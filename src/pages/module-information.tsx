import * as React from "react";
import { LecturePage } from "../slideberry/lecture/LecturePage";
import { Section } from "../slideberry/lecture/Section";
import { Group } from "../slideberry/lecture/Group";
import { Slide } from "../slideberry/slides/Slide";
import { TitleSlide } from "../slideberry/theme/programming";
import { TopicMetadata } from "../slideberry/app/Metadata";

export const moduleInformationMetadata: TopicMetadata =
{
    title: "Module Information",
    author: "David Gundry",
    module: "Slideberry",
    summary: "About Slideberry",
    slug: "module-information",
}

const Page = () => {
    return (
        <LecturePage metadata={moduleInformationMetadata}>

            <Group>
                <Section h2="Module Information" hideCheck>
                    <h3>Aim and rationale</h3>

                    <p>This module introduces Slideberry</p>
                </Section>
                <Slide>
                    <TitleSlide metadata={moduleInformationMetadata} />
                </Slide>
            </Group>
        </LecturePage >
    )
}; export default Page; 