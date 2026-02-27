import * as React from "react";
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
import { ShowAnswer } from "../../../slideberry/theme/programming/components/ShowAnswer";

import metadata from "./metadata";

    
const Lecture = () => {
    return <>
        <Group>
            <Slide>
                <TitleSlide metadata={metadata} />
            </Slide>
            <Section h2={metadata.title} hideCheck math hideInNav>
        <p>import { TopicMetadata } from "../../../slideberry/app/Metadata";</p>

        <p>const metadata: TopicMetadata =
{
    title: "Neural Networks",
    author: "David Gundry",
    module: "Tensorflow Playground",
    summary: "Learning about how neural networks are able to solve complex problems ",
    slug: "playground",</p>

        <CodeBlk language="plaintext" text={`links: ["lectures","practicals", "demos"],
learningOutcomes: [
    { overall: "Understand that neural networks learn to approximate functions" },
    { overall: "Understand the importance of input features" },
    { overall: "Recognise that the architecture of the neural network affects the patterns it can recognise" }
]`} />
        <p>}
export default metadata;</p>

    </Section>
</Group>

</>
}
export default Lecture;
