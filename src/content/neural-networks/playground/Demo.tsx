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
import HiddenLayersIcons from "./images/hidden-layers-icons.png"
import NeuronsIcons from "./images/neurons-icons.png"
import GreenButton from "./images/green-button.png"
import Features from "./images/features.png"
import DataIcons from "./images/data-icons.png"
import PlaygroundInterface from "./images/playground-interface.gif"
import LinearData from "./images/linear-data.png"
import LinearSeparableNetwork1Feature from "./images/linear-separable-network-1-feature.png"
import Linear1Feature from "./images/linear-1-feature.gif"
import DiagonalData from "./images/diagonal-data.png"
import Diagonal1Feature from "./images/diagonal-1-feature.gif"
import LinearSeparableNetwork2Feature from "./images/linear-separable-network-2-feature.png"
import Diagonal2Feature from "./images/diagonal-2-feature.gif"
import TestTrainingLoss from "./images/test-training-loss.png"
import Linear2FeaturesExperiment from "./images/linear-2-features-experiment.gif"
import CircleData from "./images/circle-data.png"
import CircleNetwork2Neurons from "./images/circle-network-2-neurons.png"
import Circle1HiddenLayer from "./images/circle-1-hidden-layer.gif"
import Spiral from "./images/spiral.1-2.2-2-2-2-2-2.gif"
import Topology2D2DTrain from "./images/topology_2D-2D_train.gif"
import CircleNetwork3Neurons from "./images/circle-network-3-neurons.png"
import Circle3Neurons from "./images/circle-3-neurons.gif"
import Topology3d from "./images/topology_3d.png"

    
const Lecture = () => {
    return <>
        <Group>
            <Slide>
                <TitleSlide metadata={metadata} />
            </Slide>
            <Section h2={metadata.title} hideCheck math hideInNav>
        <p>Neural networks are powerful tools used for Artificial Intelligence and Machine Learning. They can enable computers to make decisions that appear intelligent. They are able to do this by simplifying apparently complex patterns to identify their underlying mathematical simplicity.</p>

        <p>We will create neural networks that solve simple problems that involve classifying data points. The reason we use  simple problems here is to reveal the logic that governs how neural networks work (without needing any maths!)</p>

    </Section>
</Group>

<Group>
    <Section h3="Using Tensorflow Playground">
        <p>We are going to be using an easy-to-use educational visualisation called <a href="https://playground.scienxlab.org/">Tensorflow Playground</a>. The version we are using is a fork of the <a href="https://playground.tensorflow.org/">original</a>.</p>

        <SlideBox type="task" title="">
        <ol>
<li>Open up a web browser and visit <a href="https://playground.scienxlab.org/">https://playground.scienxlab.org/</a></li>
</ol>

        </SlideBox>

			<Columns>
				<div>
        <SlideBox type="task" title="">
        <ol start={2}>
<li>Get familiar with the interface - don't worry you can't break it!</li>
</ol>

        </SlideBox>

        <ul>
<li><strong>Hidden layers</strong>: Use the +/- to add or remove hidden layers </li>
<li><strong>Neurons per layer</strong>: Use the +/- to add or remove neurons from a layer </li>
<li><strong>Green play button</strong>: Start training the network, you can watch the output change on the right showing you what the network has learned </li>
<li><strong>Reset button</strong>: Forget the training to start training the same network again</li>
</ul>

				</div>
				<div>
        <p><img style={{ maxWidth: "100%" }} src={HiddenLayersIcons} alt="A section of user interface showing '3 Hidden layers' with plus and minus buttons" /></p>

        <p><img style={{ maxWidth: "100%" }} src={NeuronsIcons} alt="A section of user interface showing '2 neurons' with plus and minus buttons" /></p>

        <p><img style={{ maxWidth: "100%" }} src={GreenButton} alt="A section of user interface with a green button with a white triangle" /></p>

				</div>
			</Columns>
        <SlideBox type="task" title="">
        <ol start={3}>
<li>Start training the network by pressing the green 'play' button</li>
</ol>

        </SlideBox>

        <p>Once you've started training, the network will be learning where to draw the white line which divides the areas of blue and purple. It is trying to get the blue dots to be in the blue section, and the purple dots to be in the purple section. Whether it succeeds depends on factors that we will explore below.</p>

        <p>You can reset the network, adjust the network settings by adding or removing neurons and hidden layers, and try again.</p>

			<Columns>
				<div>
        <ol start={4}>
<li>A few more things to be aware of that we will use later on:</li>
</ol>

        <ul>
<li>The "Features" on the left of the network are the inputs to our network. We can choose which inputs to use </li>
<li>The icons on the left change the data we are using (the positions of the dots). If you are interested, there is more information about the data and how to use your own data below</li>
<li>The options at the top of the page can be left as the default; these control how the network learns. If you are interested, there will be more information below</li>
</ul>

				</div>
				<div>
        <p><img style={{ maxWidth: "100%" }} src={Features} alt="Section of user interface showing 'Features' and buttons with coloured patterns" /></p>

        <p><img style={{ maxWidth: "100%" }} src={DataIcons} alt="Square icons each showing patterns of dots representing different data sets" /></p>

				</div>
			</Columns>
        <p>If at any time you want to reset everything back to the defaults, just close the tab and open <a href="https://playground.scienxlab.org/">https://playground.scienxlab.org/</a> again</p>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Using Tensorflow Playground</h3>
            <p><img style={{ width: "100%" }} src={PlaygroundInterface} alt="" /></p>

        </MainSlide>
    </Slide>
    <Slide>
        <MainSlide>
            <h3>Using Tensorflow Playground</h3>
            <p>Tensorflow Playground lets us train simple neural networks</p>

            <ul>
<li>Choose the data to use</li>
<li>Design the network by adding layers and neurons</li>
<li>It visualises the output of each neuron during training</li>
</ul>

        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="One Feature">
        <p>Let's get started by training the simplest network we can imagine. We are going to train a network that learns to classify - or draw a line between - two sets of data. At first, this data will be very simple. We can apply the same principles to work with much more complicated data.</p>

        <SlideBox type="task" title="Set up the Network">
        <ol>
<li>Select "Linear" Data <img style={{ maxWidth: "100%" }} src={LinearData} alt="An icon showing a pattern of dots; purple dots on the left and blue dots on the right" />; Find this on the left side of the screen under the 'Data' heading, just below where it says 'Or use synthetic data:'</li>
<li>Remove all hidden layers, so it shows "0 Hidden layers"</li>
<li>Select only the X_1 Feature</li>
</ol>

        </SlideBox>

        <p>Your network should look like this (note this is before training):</p>

        <p><img style={{ maxWidth: "100%" }} src={LinearSeparableNetwork1Feature} alt="A diagram of a neural network with an input feature labelled X1 and one output; the output is visualised a square of purple-blue gradient" /></p>

        <SlideBox type="task" title="Training">
        <ol start={4}>
<li>Train the network. Where does it learn to draw a line dividing the data points?</li>
</ol>

        </SlideBox>

        <KeyPoint><p>A classifier is a neural network for categorising data. (The final layer of) a classifier is trying to draw a straight line through the data. In this case, data to the left of the line is the 'purple' data, and data to the right is 'blue' data.</p></KeyPoint>
    </Section>
    <Slide>
        <MainSlide>
            <h3>One Feature</h3>
            <p><img style={{ width: "100%" }} src={Linear1Feature} alt="" /></p>

        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="One Feature - Limitations">
        <p>We have a simple neural network that uses only one feature (X_1). It can classify our "linear" data set. We want to discover what the limits of this network are.</p>

        <SlideBox type="task" title="Evaluation">
        <ol start={5}>
<li>See how the network you created above behaves on data that follows a different pattern. Try the "Diagonal" data <img style={{ maxWidth: "100%" }} src={DiagonalData} alt="An icon showing a pattern of dots; purple dots on the top right and blue dots on the bottom left" /></li>
</ol>

        </SlideBox>

        <p>In this example, our network is trying to learn to classify the data based only on the x position of each dot.</p>

        <KeyPoint><p>Neural networks can only learn patterns that exist in the data we provide. In the Diagonal example, we did not supply information about the y position of dots, so it has no way to use this information.</p></KeyPoint>
    </Section>
    <Slide>
        <MainSlide>
            <h3>One Feature - Limitations</h3>
            <p><img style={{ width: "100%" }} src={Diagonal1Feature} alt="" /></p>

        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Two Features">
        <p>Now let's see how supplying the right features to our network gives it the information it needs. This information will allow it to learn to draw the line in the correct place. In other words, it will have correctly learned to classify the data.</p>

        <SlideBox type="task" title="Set up the network">
        <ol>
<li>Once again, select Diagonal data <img style={{ maxWidth: "100%" }} src={DiagonalData} alt="An icon showing a pattern of dots; purple dots on the top right and blue dots on the bottom left" /> and create a network with 0 hidden layers; but this time, select both X_1 and X_2 features.</li>
</ol>

        </SlideBox>

        <p>Your network should look like this (note this is before training):</p>

        <p><img style={{ maxWidth: "100%" }} src={LinearSeparableNetwork2Feature} alt="A diagram of a neural network with two input features labelled X1 and X2 and joined by two lines to the output; the output is visualised a square of purple-blue gradient" /></p>

        <SlideBox type="task" title="Training">
        <ol start={2}>
<li>Train the network; see the output transform</li>
</ol>

        </SlideBox>

        <p>What do we see here? By including <code>x</code> an <code>y</code> information in our output, the network has learned to draw a straight line across the 2D pattern of dots. In other words, it has learned to classify (or predict) whether a dot in the diagonal data set should be blue or purple based on its x and y position. </p>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Two Features</h3>
            <p><img style={{ width: "100%" }} src={Diagonal2Feature} alt="" /></p>

        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Two Features - Evaluation">
        <p>This network can learn to classify the linear and diagonal data very accurately. What other kinds of data can it accurately classify? Are there any kinds of data it cannot classify?</p>

        <SlideBox type="task" title="Evaluation">
			<Columns>
				<div>
        <ol start={3}>
<li>Test the other data sets provided. Find out which ones can be learned by this network, and which ones the network is unable to learn</li>
</ol>

				</div>
				<div>
        <p><img style={{ maxWidth: "100%" }} src={DataIcons} alt="Square icons each showing patterns of dots representing different data sets" /></p>

				</div>
			</Columns>
        </SlideBox>
<SlideBox type="aside" title="Evaluating Accuracy">
        <p>To evaluate a network, we can look at its "Training loss"; this is the error between what the network predicts and the correct answer. We want this to drop to a very small number,</p>

        <p><img style={{ maxWidth: "100%" }} src={TestTrainingLoss} alt="Double line graph that drops sharply, showing test and training loss" /></p>

        </SlideBox>

        <KeyPoint><p>Providing input features that encode the necessary information makes it possible for the right neural network to learn a function (pattern), meaning the training loss (error) decreases. However, not all designs of neural network can learn all functions; in these cases the training loss (error) remains high.</p></KeyPoint>
    </Section>
    <Slide>
        <MainSlide>
            <h3>Two Features - Evaluation</h3>
            <p><img style={{ width: "100%" }} src={Linear2FeaturesExperiment} alt="" /></p>

        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Hidden Layers">
        <p>Now we are going to learn how adding hidden layers can make our network more intelligent.</p>

        <ul>
<li>Each layer of neurons is connected to the previous layer.</li>
<li>The data is goes in at the left of the network and is passed from layer to layer.</li>
</ul>

        <KeyPoint><p>Each layer of neurons transforms the values it receives from previous layers by squashing and stretching (but never splitting or breaking) them. We might say that each layer produces a different 'representation' of the underlying data.</p></KeyPoint>
        <p>Let's see this in action with a more complex data set.</p>

        <SlideBox type="task" title="Set up the network">
        <ol>
<li>Select "Circle" data.
<img style={{ maxWidth: "100%" }} src={CircleData} alt="An icon showing a ring of dots; purple dots on the outside and blue dots on the inside" /></li>
<li>Add a hidden layer to your network, so you have 1 hidden layer. This hidden layer should contain 2 neurons.</li>
</ol>

        </SlideBox>

        <p>Your network should look like the following (before training):</p>

        <p><img style={{ maxWidth: "100%" }} src={CircleNetwork2Neurons} alt="A diagram of a neural network with two input features labelled X1 and X2 connected by lines to one hidden layer of two neurons, which are connected to one output; the output is visualised a square of purple-blue gradient" /></p>

        <SlideBox type="task" title="Training">
        <ol start={3}>
<li>Train your network. What happens?</li>
</ol>

        </SlideBox>

        <p>While better than our previous network, because our new network can draw a curving line, for some reason it can never learn to draw a circle. Next we will learn why this is.</p>

        <KeyPoint><p>Adding hidden layers allows the network to divide the data using a more curvy line (or 'hyperplane').</p></KeyPoint>
    </Section>
    <Slide>
        <MainSlide>
            <h3>Hidden Layers</h3>
            <p><img style={{ width: "100%" }} src={Circle1HiddenLayer} alt="" /></p>

        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Transforming the Data">
        <p>Let's see what is happening here.</p>

        <p>Our neural network is trying to draw a line to separate the blue and purple data. Like before, a layer (the final, output layer) can only draw a straight line. However, in this case, we have added a hidden layer that transforms (squashes and stretches) the data before passing it to the final layer. This means that - <em>from the perspective of the input data</em> - the line that is drawn appears curved.</p>

        <KeyPoint><p>Each hidden layer transforms the values it receives. While the 'line' it draws is always straight relative to the data it receives, relative to the original data, the line can be curved.</p></KeyPoint>
        <p>Observe that this network is still not able to accurately classify the circle data. While it draws a curve, it can never succeed at drawing a circle, because there is no way to transform a circle in two dimensions to separate the inside and outside with a straight line.</p>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Transforming the Data</h3>
			<Columns>
				<div>
            <p>Hidden layers let the network squash and stretch the data to make it easier to separate with a straight line</p>

            <p>This animation by <a href="https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/">Chris Olah (2014)</a> shows an example of this</p>

				</div>
				<div>
            <p><img style={{ width: "100%" }} src={Spiral} alt="" /></p>

				</div>
			</Columns>
            <KeyPoint><p>Deep networks contain many hidden layers</p></KeyPoint>
        </MainSlide>
    </Slide>
    <Slide>
        <MainSlide>
            <h3>Transforming the Data</h3>
			<Columns>
				<div>
            <p>Our current network cannot possibly squash and stretch the circle to separate the two colours with a straight line.</p>

            <p>This animation by <a href="https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/">Chris Olah (2014)</a> shows what our current network is trying to do.</p>

				</div>
				<div>
            <p><img style={{ width: "100%" }} src={Topology2D2DTrain} alt="An animation showing the squashing of a ring and an attempt to draw a straight line to separate the outside and inside of the ring" /></p>

				</div>
			</Columns>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Moving to three dimensions">
        <p>Let's take our network to another dimension in order to classify the "Circle" data set.</p>

        <SlideBox type="task" title="Create the network">
        <ol>
<li>Add one neuron to your hidden layer. You should now have one hidden layer with three neurons, two input features (X_1 and X_2), and be using the circle data.</li>
</ol>

        </SlideBox>

        <p>Your network should look like this, before training:</p>

        <p><img style={{ maxWidth: "100%" }} src={CircleNetwork3Neurons} alt="A diagram of a neural network with two input features labelled X1 and X2 connected by lines to one hidden layer of three neurons, which are connected to one output; the output is visualised a square of purple-blue gradient" /></p>

        <SlideBox type="task" title="Training">
        <ol start={2}>
<li>Train your network. Keep watching. It might take up to ten seconds or so.</li>
</ol>

        </SlideBox>

        <p>What has happened?</p>

        <p>The line has become a circle and the data is accurately classified. We could not do this in two dimensions above but now our hidden layer has three dimensions. Here is the confusing bit: What we have done is project the data from two dimensions into three dimensions where we can squash out the middle. </p>

        <p>The problem could not be solved in two dimensions, but could be solved in three.</p>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Moving to three dimensions</h3>
            <p><img style={{ width: "100%" }} src={Circle3Neurons} alt="" /></p>

        </MainSlide>
    </Slide>
    <Slide>
        <MainSlide>
            <h3>Moving to three dimensions</h3>
			<Columns>
				<div>
            <p>This diagram by <a href="https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/">Chris Olah (2014)</a> shows how the network learns to squash out the middle of our circle in 3D</p>

				</div>
				<div>
            <p><img style={{ width: "100%" }} src={Topology3d} alt="A 3D diagram showing a blue ring of dots with red dots projecting out of the ring in a different dimension" /></p>

				</div>
			</Columns>
            <KeyPoint><p>In three or more dimensions we separate the data by drawing a 'hyperplane'</p></KeyPoint>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Summary">
        <p>We can create a neural network and choose the features that we provide as its input. When we train the neural network, we show it examples. For each example, it receives the features we select as the input. It learns to classify these examples by drawing a line between them.</p>

        <p>Simple networks can only perform simple tasks, but we can make networks more complicated by adding hidden layers, and adding more neurons to these hidden layers.</p>

        <p>By adding hidden layers, the network can transform the data over more steps. Each layer squashes and stretches the input is receives. More layers means more complicated transformations. However, networks with more layers take longer to train.</p>

        <p>By adding neurons to hidden layers we change the number of dimensions the data is represented in.</p>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Summary</h3>
            <p>A neural network can learn to classify data</p>

            <ul>
<li>The input must contain the information we want to learn</li>
<li>The larger the network, the more complex patterns it can learn.</li>
</ul>

            <KeyPoint><p>Containing up to billions of neurons, modern neural networks can learn incredibly sophisticated patterns</p></KeyPoint>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Next Step">
        <p>Now you've completed the demo, move on to the <a href="../../practicals/playground">practical</a></p>

    </Section>
</Group>

</>
}
export default Lecture;
