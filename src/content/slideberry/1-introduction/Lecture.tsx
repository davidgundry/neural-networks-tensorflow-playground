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

import metadata from "./metadata";

    
const Lecture = () => {
    return <>
        <Group>
            <Slide>
                <TitleSlide metadata={metadata} />
            </Slide>
            <Section h2={metadata.title} hideCheck math hideInNav>
        <p>This presentation will give an introduction to the Slideberry slide library</p>

    </Section>
    <Slide>
        <MainSlide>
            <h3></h3>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Slideberry">
    </Section>
    <Slide>
        <MainSlide>
            <h3>Slideberry</h3>
            <ul>
<li>Open source slide/presentation library</li>
<li>React/Gatsby</li>
</ul>

        </MainSlide>
    </Slide>
</Group>

</>
}
export default Lecture;
