import * as React from "react";
import { Section } from "../../../slideberry/lecture/Section";
import { Group } from "../../../slideberry/lecture/Group";
import { Slide } from "../../../slideberry/slides/Slide";
import { TitleSlide } from "../../../slideberry/theme/programming";
import metadata from "./metadata";
import { LearningOutcomesList } from "../../../slideberry/pagecontent/LearningOutcomes";


const Practical = () =>  { 
    return ( <> 
<Group>
    <Section h2={metadata.title} math>
        <LearningOutcomesList learningOutcomes={metadata.learningOutcomes}/>
    </Section>
    <Slide>
        <TitleSlide practical metadata={metadata} />
    </Slide>
</Group>

</>)}

export default Practical;