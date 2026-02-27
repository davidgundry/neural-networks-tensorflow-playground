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
        <p>This short lecture gives a very brief introduction to neural networks.</p>

    </Section>
</Group>

<Group>
    <Section h3="Computation">
        <p>Computer science is about computation - what problems we can solve using systems</p>

        <ul>
<li>Systems can be networks of (trillions of) logic gates</li>
<li>The human brain is a network of neurons</li>
<li>Neural networks are layers of simulated neurons</li>
</ul>

        <SlideBox type="aside" title="Computers that can learn">
        <p>Logic gates are hard transitions - binary on-off switches; neurons have smooth transitions - this smooth gradient makes it possible to train them</p>

        </SlideBox>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Computation</h3>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Neural Networks">
        <p>A neural network learns a function (function approximation)</p>

        <ul>
<li>Function takes an input and returns an output</li>
<li>We teach the neural network by giving it examples (supervised learning); just like a person, if you compare your work to the correct answer and find you made an error, you try to change your behaviour to not make the same error (as much) next time.</li>
<li>A big enough network can learn extremely complicated functions - what the most likely next character in a sentence is (LLM), or whether a picture is of a dog or a cat</li>
</ul>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Neural Networks</h3>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Group Activity">
        <p><strong>Group Activity</strong> - divide dogs and cats; put them on a line, mark the point between that separates the two groups</p>

        <p><strong>Key Point:</strong> A classifier tries to draw a line to divide two groups</p>

        <ul>
<li><p>Extra detail - it does this by minimising the error (loss function)</p>
</li>
<li><p>Repeat in two dimensions - we draw a straight line between the two groups</p>
</li>
<li><p>Repeat where you need to draw a curved line - remember the rule, you have to use a straight line.</p>
<ul>
<li>We cannot correctly classify this without transforming the data first.</li>
<li>Repeat, but before you draw the line, you can slide the pictures around, but only in big, squashy movements</li>
</ul>
</li>
</ul>

        <p><strong>Key Point:</strong> In a deep neural network, you have layers. each layer transforms (squashes and stretches) the data; the final layer sees the squashed data and draws a straight line</p>

        <SlideBox type="aside" title="More dimensions">
        <p>We often need to work with more than two dimensions because there is more information than can be represented in one or two; in higher dimensional spaces, the "line" we draw to separate the data is a hyperplane</p>

        </SlideBox>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Group Activity</h3>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Lateral Thinking Puzzle">
        <p>Moving to higher dimensions</p>

        <ul>
<li>A challenge to draw a line to divide groups of cats and dogs on a line, where the cats encircle the dogs.</li>
<li>Solution: squash the line (move into a two dimensional space), and then draw a straight line that cuts through it</li>
</ul>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Lateral Thinking Puzzle</h3>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Summary of Neural networks">
        <ul>
<li>Input features</li>
</ul>

        <p><strong>Key Point:</strong>  If the information we need is not (latent) in the features, we cannot learn the function</p>

        <ul>
<li>Hidden units/layers - little units of computation, do the squashing/streching of the data; as they are simple, only limited forms of transformation are possible (affine transformations, translations, and pointwise application of activation function)<ul>
<li>Number of units in layer - number of dimensions we are working in</li>
<li>Number of layers - number of transformations we apply</li>
</ul>
</li>
<li>Output units - final activation function draws the "straight line"</li>
</ul>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Summary of Neural networks</h3>
        </MainSlide>
    </Slide>
</Group>

</>
}
export default Lecture;
