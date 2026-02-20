// Import the necessary modules
import * as fs from "fs";
import { marked } from "marked"; // Markdown parser
import * as yaml from "js-yaml"

class MarkdownToJsxConverter {

    frontmatter: any;
    currentHeading = ``
    currentType : "section" | "aside" | "example" | "question" = "section"
    jsxContent = ``
    imports = `import * as React from "react";
import { Group } from "../../../slideberry/lecture/Group";
import { Section } from "../../../slideberry/lecture/Section";
import { Slide } from "../../../slideberry/slides/Slide";
import { Columns, HeadSlide, MainSlide } from "../../../slideberry/theme/programming";
import { TitleSlide } from "../../../slideberry/theme/programming";
import { LearningOutcomesDropdowns, LearningOutcomesList } from "../../../slideberry/pagecontent/LearningOutcomes";
import { KeyPoint } from "../../../slideberry/theme/programming/components/KeyPoint";
import { CodeBlk } from "../../../slideberry/theme/programming/components/CodeBlk";
import { SlideBox } from "../../../slideberry/theme/programming/components/SlideBox";
import { M } from "../../../slideberry/pagecontent/math/Math";

import metadata from "./metadata";`;

    head = `
    
const Lecture = () => {
    return <>
        <Group>
            <Slide>
                <TitleSlide metadata={metadata} />
            </Slide>
            <Section h2={metadata.title} hideCheck math hideInNav>
`;
    currentSlideContent = "";
    inputFile;
    outputFile;

    state: "Start" | "Group" | "Section" | "HeadSection" | "HeadSlide" | "MainSlide" = "Section"

    inColumn = false;


    constructor(inputFile, outputFile) {
        this.inputFile = inputFile;
        this.outputFile = outputFile;
    }

    createLearningOutcomes() {
        this.jsxContent += `<Group>
            <Section h2="Learning Outcomes" hideCheck hideInNav math>
                <LearningOutcomesList learningOutcomes={metadata.learningOutcomes} />
            </Section>
            <Slide>
                <MainSlide>
                    <h2>Learning Outcomes</h2>
                    <LearningOutcomesList learningOutcomes={metadata.learningOutcomes} />
                </MainSlide>
            </Slide>
        </Group>`
    }

    readInputFile() {
        console.log(`Reading file: ${this.inputFile}`);
        try {
            return fs.readFileSync(this.inputFile, "utf8");
        } catch (error) {
            console.error(`Error reading file: ${error.message}`);
            throw error;
        }
    }

    parseMarkdown(markdownContent) {
        console.log("Parsing Markdown content into tokens...");
        return marked.lexer(markdownContent);
    }

    renderHtml(token) {
        if (token.type === "code") {
            return `<CodeBlk language="${token.lang || "plaintext"}" text={\`${token.text}\`} />`;
        }
        else if (token.raw) {
            if (token.type === "paragraph" && token.text.trim().startsWith("/*")) {
                return `{${token.raw}}`
            }
            else if (token.type === "paragraph" && token.text.trim().startsWith("<KeyPoint>"))
                return `${token.raw}`
            else
                return `${marked.parse(token.raw)}`
        }
        return "";
    }

    closeGroup()
    {
        if (this.state !== "Start")
        {
            this.closeContent();
            this.jsxContent += `</Group>\n\n`;
            this.state = "Start";
        }
    }

    closeContent()
    {
        if (this.state == "Section" || this.state == "HeadSection")
            this.closeSection();
        else if (this.state == "MainSlide" )
            this.closeMainSlide();
        else if (this.state == "HeadSlide" )
            this.closeHeadSlide();
        this.state = "Group";
    }

    closeSlideBox()
    {
        if (inSlideBox)
        {
            if (this.state == "Section" || this.state == "HeadSection")
                this.jsxContent += `        </SlideBox>\n\n`;
            else
                this.jsxContent += `            </SlideBox>\n\n`;
            inSlideBox = false;
        }
    }

    closeHeadSlide() {
        if (this.state == "HeadSlide")
        {
            this.jsxContent += this.currentSlideContent;
            this.currentSlideContent = "";
            this.closeSlideBox();
            this.jsxContent += `        </HeadSlide>
    </Slide>\n`;
            this.state = "Group";
        }
    }

    closeMainSlide() {
        if (this.state == "MainSlide")
        {
            this.jsxContent += this.currentSlideContent;
            this.currentSlideContent = "";
            this.closeSlideBox();
            this.jsxContent += `        </MainSlide>
    </Slide>\n`;
            this.state = "Group";
        }
    }

    closeSection() {
        if (this.state == "Section" || this.state == "HeadSection")
        {
            this.jsxContent += this.currentSlideContent;
            this.currentSlideContent = "";
            this.closeSlideBox();
            this.jsxContent += `    </Section>\n`;
            this.state = "Group";   
        }
    }

    startGroup()
    {
        if (this.state === "Start")
        {
            this.jsxContent += `<Group>\n`
            this.state = "Group";
            this.currentSlideContent = "";
        }
    }

    startHeadSection() {
        if (this.state === "Group")
        {
            this.jsxContent += `    <Section h2="${this.currentHeading}">\n`;
            this.currentSlideContent = "";
            this.state = "HeadSection";
        }
    }

    startMainSection() {
        if (this.state === "Group")
        {
            if (this.currentType != "section")
                this.jsxContent += `    <Section type="${this.currentType}" h3="${this.currentHeading}">\n`;
            else
                this.jsxContent += `    <Section h3="${this.currentHeading}">\n`;
            this.currentSlideContent = "";
            this.state = "Section";
        }
    }

    startMainSlide() {
        if (this.state === "Group")
        {
            this.jsxContent += `    <Slide>
        <MainSlide>
            <h3>${this.currentHeading}</h3>\n`;
            this.currentSlideContent = "";
            this.state = "MainSlide";
        }
    }

    startHeadSlide() {
        if (this.state === "Group")
        {
            this.jsxContent += `    <Slide>
        <HeadSlide>
            <h2>${this.currentHeading}</h2>\n`;
            this.currentSlideContent = "";
            this.state = "HeadSlide";
        }
    }

    startColumn() {
        if (this.inColumn)
            this.closeColumn();
        else
            this.currentSlideContent += "\t\t\t<Columns>\n";    
        this.currentSlideContent += "\t\t\t\t<div>\n";
        this.inColumn = true;
    }

    closeColumn()
    {
        if (this.inColumn)
            this.currentSlideContent += "\t\t\t\t</div>\n";
        this.inColumn = false;
    }

    closeMagicTags()
    {
        if (this.inColumn)
        {
            this.closeColumn();
            this.currentSlideContent += "\t\t\t</Columns>\n";
        }
    }


    transformTokensToJsx(tokens) {
        console.log("Transforming tokens to JSX...");

        tokens.forEach((token) => {
            if (token.type === "heading" && token.depth === 2)
            {
                this.closeGroup();
                this.currentHeading = token.text;
                this.startGroup();
                this.startHeadSection();
                if (toSlideMode === "slide")
                {
                    this.closeContent();
                    this.startHeadSlide();
                }
            }
            else if (token.type === "heading" && token.depth === 3)
            {
                this.currentHeading = token.text.trim();
                let inSameGroup = this.currentHeading.startsWith("~");
                if (inSameGroup)
                    this.currentHeading = this.currentHeading.substring(1).trim();
                if (this.currentHeading.startsWith("Aside:"))
                {
                    this.currentType = "aside";
                    this.currentHeading = this.currentHeading.substring(6).trim();
                }
                else if (this.currentHeading.startsWith("Example:"))
                {
                    this.currentType = "example";
                    this.currentHeading = this.currentHeading.substring(8).trim();
                }
                else if (this.currentHeading.startsWith("Question:"))
                {
                    this.currentType = "question";
                    this.currentHeading = this.currentHeading.substring(9).trim();
                }
                else 
                    this.currentType = "section";

                if (inSameGroup)
                {
                    this.closeContent();
                    this.startMainSection()
                }
                else
                {
                    this.closeGroup();
                    this.startGroup();
                    this.startMainSection();
                    if (toSlideMode === "slide")
                    {
                        this.closeContent();
                        this.startMainSlide();
                    }
                }
            }
            else if (token.type === "hr")
            {
                let useHeadSlide = this.state === "HeadSection";
                this.closeContent();
                if (useHeadSlide)
                    this.startHeadSlide();
                else
                    this.startMainSlide();
            }
            else if (token.type == "blockquote")
            {
                const text = token.text.trim();
                if (text == "<Column>")
                    this.startColumn();
                else if (text == "</>")
                    this.closeMagicTags();
            }
            else {
                let rendered = this.renderHtml(token);
                if (rendered.trim())
                {
                    if (this.state === "Section")
                        this.currentSlideContent += `        ${rendered}\n`;
                    else
                        this.currentSlideContent += `            ${rendered}\n`;
                }
            }

        });
        this.closeGroup();
        this.jsxContent += `</>
}
export default Lecture;
`;
    }

    writeOutputFile(content) {
        console.log(`Writing content to file: ${this.outputFile}`);
        try {
            fs.writeFileSync(this.outputFile, content, "utf8");
        } catch (error) {
            console.error(`Error writing file: ${error.message}`);
            throw error;
        }
    }

    parseYAMLFrontmatter(document: string)
    {
        this.frontmatter = yaml.load(document);
    }

    convert() {
        try {
            let markdownContent = this.readInputFile();
            if (markdownContent.startsWith("---"))
            {
                const endIndex = markdownContent.indexOf("---", 3);
                const frontmatter = markdownContent.substring(3, endIndex);
                this.parseYAMLFrontmatter(frontmatter);
                markdownContent = markdownContent.substring(endIndex+3);
            }
            const tokens = this.parseMarkdown(markdownContent);
            const self = this;

            marked.use({
                extensions: [
                    {
                        name: 'image',
                        renderer(token) {

                            let imageName: string = token.href;
                            imageName = imageName.replace(/.+\//g, "");
                            imageName = imageName.replace(/\..+/g, "");
                            imageName = imageName.replace(/[\-_](\w)/g, function (v) { return v.toUpperCase(); });
                            imageName = imageName.replace(/[\-_]/g, "");
                            imageName = imageName[0].toUpperCase() + imageName.substring(1);

                            imageSrcs.set(imageName, token.href);
                            if (self.state === "HeadSlide" || self.state === "MainSlide")
                                return `<img style={{ width: "100%" }} src={${imageName}} alt="${token.text}" />`;
                            else
                                return `<img style={{ maxWidth: "100%" }} src={${imageName}} alt="${token.text}" />`;
                        }
                    },
                    {
                        name: 'heading',
                        renderer(token) {
                            let out;
                            if (token.depth === 4) {
                                if (token.text.trim() === "!") // If #### ! is read, end the current slidebox
                                {
                                    if (inSlideBox)
                                    {
                                        inSlideBox = false;
                                        return "</SlideBox>\n"
                                    }
                                }
                                if (token.text.trim().startsWith("Warning:"))
                                    out = `${inSlideBox ? `</SlideBox>\n` : ``}<SlideBox type="warning" title="${token.text.trim().substring(8).trim()}">`
                                else if (token.text.trim().startsWith("Good:"))
                                    out = `${inSlideBox ? `</SlideBox>\n` : ``}<SlideBox type="good" title="${token.text.trim().substring(5).trim()}">`
                                else if (token.text.trim().startsWith("Example:"))
                                    out = `${inSlideBox ? `</SlideBox>\n` : ``}<SlideBox type="example" title="${token.text.trim().substring(8).trim()}">`
                                else if (token.text.trim().startsWith("Task:"))
                                    out = `${inSlideBox ? `</SlideBox>\n` : ``}<SlideBox type="task" title="${token.text.trim().substring(5).trim()}">`
                                else if (token.text.trim().startsWith("Aside:"))
                                    out = `${inSlideBox ? `</SlideBox>\n` : ``}<SlideBox type="aside" title="${token.text.trim().substring(6).trim()}">`
                                else
                                    out = `${inSlideBox ? `</SlideBox>\n` : ``}<SlideBox title="${token.text.trim()}">`
                                inSlideBox = true;
                                return out;
                            }
                            return `<h${token.depth}>${token.text}</h${token.depth}>`
                        }
                    }]
            })


            this.transformTokensToJsx(tokens);
            let file = this.imports + createImageImports(imageSrcs) + this.head + this.jsxContent
            file = this.regexFixes(file);
            file = (this.frontmatter?.top ? this.frontmatter.top : "") + file;
            this.writeOutputFile(file);
            console.log(`File '${this.outputFile}' created successfully.`);
        } catch (error) {
            console.error(`Conversion failed: ${error.message}`);
        }
    }

    regexFixes(file: string): string
    {
        file = file.replace(/<ol start="([0-9]+)">/g, "<ol start={$1}>");
        file = file.replace(/<ul start="([0-9]+)">/g, "<ul start={$1}>");
        file = file.replace(/&#39;/g, "'");
        file = file.replace(/&quot;/g, "\"");
        file = file.replace(/\$(.+?)\$/g, (substring: string, arg1: string): string => { return `<M>{\`${arg1.replace("\\","\\\\")}\`}</M>`});
        return file;
    }
}

function createImageImports(srcs: Map<string, string>) {
    let out = "\n";
    imageSrcs.forEach((v, k) => {
        out += `import ${k} from "${v}"\n`
    })
    return out;
}

const imageSrcs: Map<string, string> = new Map<string, string>();


const [, , toSlideMode, inputFile, outputFile] = process.argv;
// Run the conversion
if (!inputFile || !outputFile) {
    console.error("Usage: node script.js <inputFile> <outputFile>");
    process.exit(1);
}

let inSlideBox = false;

const converter = new MarkdownToJsxConverter(inputFile, outputFile);
converter.convert();
