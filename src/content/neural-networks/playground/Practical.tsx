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
import Interface from "./images/interface.png"
import Gaussian from "./images/gaussian.png"
import Xor from "./images/xor.png"
import Moons from "./images/moons.png"
import Spiral from "./images/spiral.png"
import Parameters from "./images/parameters.png"
import LearningRate from "./images/learning-rate.gif"

    
const Lecture = () => {
    return <>
        <Group>
            <Slide>
                <TitleSlide metadata={metadata} />
            </Slide>
            <Section h2={metadata.title} hideCheck math hideInNav>
        <p>You should complete or follow the steps of the demo first to teach you the basics you need to know. If you are uncertain about how to proceed, go back to the <a href="../../demos/playground">demo</a> and work through it again, or ask one of the lecturers for help.</p>

        <p>For this activity, open up a web browser and visit <a href="https://playground.scienxlab.org/">https://playground.scienxlab.org/</a>. </p>

        <p><img style={{ maxWidth: "100%" }} src={Interface} alt="Screenshot of the Tensorflow Playground interface" /></p>

    </Section>
</Group>

<Group>
    <Section h3="1. Gaussian">
        <p>Select the "Gaussian" data. This is data arranged according to a gaussian or normal distribution, also called a bell-curve. This looks like a noisy blob. The data comes from two different gaussian distributions, so we have two blobs. We want our network to identify which points belong to which blob.</p>

        <SlideBox type="task" title="">
        <ol>
<li>What is the simplest network that can classify this data from the X_1 and X_2 features? Use the interactive neural network to help you work this out.</li>
</ol>

        <p><ShowAnswer>0 hidden layers. Where there is low noise, only one feature is required (e.g. X_1), but if noise increases both X_1 and X_2 features are needed. Greater noise will lead to worse accuracy, and it is not possible to make a network that avoids this.</ShowAnswer></p>

        </SlideBox>
<SlideBox type="aside" title="Gaussian Distributions">
        <p>Lots of types of real-world data, spanning all the natural sciences, follow a bell-curve or gaussian distribution due to a mathematical law called the Central Limit Theorem.</p>

        </SlideBox>

        <p><strong>Challenge Question:</strong> Theoretically would it be possible to create a network that classifies very noisy data with high accuracy?</p>

    </Section>
    <Slide>
        <MainSlide>
            <h3>1. Gaussian</h3>
            <p>Gaussian data is generated from a normal distribution or bell curve</p>

			<Columns>
				<div>
            <ol>
<li>Select <strong>Gaussian</strong> data in Tensorflow Playground</li>
<li>What is the simplest network that classifies this data?</li>
</ol>

				</div>
				<div>
            <p><img style={{ width: "100%" }} src={Gaussian} alt="Purple and blue dots each distributed according to a gaussian distribution" /></p>

				</div>
			</Columns>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="2. XOR">
        <p>Select the XOR data. This is an example problem which cannot be separated by a straight line, which is a hint that you will need at least one hidden layer to solve it!</p>

        <SlideBox type="task" title="">
        <ol>
<li>Train a network that can classify this data with a low training loss (error), using the X_1 and X_2 features. What is the lowest training loss you observe?</li>
</ol>

        </SlideBox>
<SlideBox type="task" title="">
        <ol start={2}>
<li>What is the <em>simplest</em> network you can create that has a training loss less than 0.08?</li>
</ol>

        <p><ShowAnswer>1 hidden layer, 3 neurons. A little bit of luck is required here, as the network may get caught in a local minima. Restarting training may be required.</ShowAnswer></p>

        </SlideBox>
<SlideBox type="task" title="">
        <ol start={3}>
<li>What is the <em>simplest</em> network you can create that has a training loss less than 0.005?</li>
</ol>

        <p><ShowAnswer> 2 hidden layers with 2 neurons each. However I had to restart the training many times because it frequently got caught in a local minima.</ShowAnswer></p>

        </SlideBox>
<SlideBox type="aside" title="Getting stuck.">
        <p>You will notice that sometimes the neural network stops learning but has not found a very good solution. Sometimes this is because no better solution is possible. However, it is often because the network has become caught in a <em>local minima</em>. In other words, all similar solutions it attempts are worse than its current solution.</p>

        </SlideBox>

    </Section>
    <Slide>
        <MainSlide>
            <h3>2. XOR</h3>
            <p>XOR is an example of a problem that cannot be solved linearly</p>

			<Columns>
				<div>
            <ol>
<li>Select <strong>XOR</strong> data in Tensorflow Playground</li>
</ol>

            <KeyPoint>Different networks can achieve different training loss (error); we want networks with high accuracy (low error)</KeyPoint>
            <ol start={2}>
<li>What is the simplest network that achieves a training loss of less than 0.08, and 0.005?</li>
</ol>

				</div>
				<div>
            <p><img style={{ width: "100%" }} src={Xor} alt="Purple and blue dots distributed in a checker pattern" /></p>

				</div>
			</Columns>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="3. Moons">
        <p>Select the "Moons" data.</p>

        <SlideBox type="task" title="">
        <ol>
<li>Train the the simplest network you can that can classify this dat, using the X_1 and X_2 features. For an extra challenge, try to reason about what the theoretically smallest network that can solve this problem would be.</li>
</ol>

        <p><ShowAnswer>2 hidden layers of 2 neurons using inputs X1, X2. We know we should be able to achieve this with 2 neurons per layer, because we can visually see that it can be solved in 2 dimensions: a single curving line can separate the data. We see that the line needs to curve twice (or curve back on itself), which requires at least two hidden layers.</ShowAnswer></p>

        </SlideBox>

    </Section>
    <Slide>
        <MainSlide>
            <h3>3. Moons</h3>
			<Columns>
				<div>
            <ol>
<li>Select <strong>Moons</strong> data in Tensorflow Playground</li>
</ol>

            <KeyPoint>Hidden layers let the network transform the data</KeyPoint>
            <ol start={2}>
<li>What is the smallest network that can solve this problem?</li>
</ol>

				</div>
				<div>
            <p><img style={{ width: "100%" }} src={Moons} alt="Purple and blue dots in interleaved crescents" /></p>

				</div>
			</Columns>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="4. Spiral">
        <p>Select the "Spiral" data. This might take some training time because as you might be able to work out, it will require a larger network. Your goal is to train a network to classify this data. You can try out or combine two strategies:</p>

        <ol>
<li><p>Go deep (more hidden layers). We just need a very curvy curved line. Theoretically we need two dimensions and a very complex transformation. However, can a deep network with two neurons in each hidden layer learn this?</p>
</li>
<li><p>Go wide (more neurons per layer). Is it easier to represent this pattern in a higher dimensional space?</p>
</li>
</ol>

        <SlideBox type="task" title="">
        <p>Which strategy seems to be the most helpful? What problems do you encounter training the network? (Do not expect to successfully solve this problem using only the X_1 and X_2 features!) </p>

        </SlideBox>

    </Section>
    <Slide>
        <MainSlide>
            <h3>4. Spiral</h3>
			<Columns>
				<div>
            <ol>
<li>Select <strong>Spiral</strong> data in Tensorflow Playground</li>
</ol>

            <KeyPoint>More neurons per layer enables a higher-dimensional representation</KeyPoint>
            <ol start={2}>
<li>Explore different strategies (deep network vs. wide network) for solving this problem</li>
</ol>

				</div>
				<div>
            <p><img style={{ width: "100%" }} src={Spiral} alt="Purple and blue dots in an interleaved spiral" /></p>

				</div>
			</Columns>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="5. Customise your network">
        <p>So far we have been using the default learning parameters for the neural network. We can modify some of these parameters to affect how the neural network learns.</p>

        <SlideBox type="task" title="Get familiar with the interface">
        <ol>
<li>Find the parameters section at the top of the page. Explore the various options. If at any time you want to reset everything back to the defaults, reference the screenshot below, or just close the tab and open <a href="https://playground.scienxlab.org/">https://playground.scienxlab.org/</a> again.</li>
</ol>

        </SlideBox>

        <p><img style={{ maxWidth: "100%" }} src={Parameters} alt="A section of user interface with a selection of drop down options" /></p>

        <p><strong>Epoch</strong> - The humber of times the training has cycled through the entire data set.</p>

        <p><strong>Problem Type</strong> - We have been discussing classification problems, where the goal is to draw a line between the two sets of data, allowing us to identify to which category a data point belongs. Another type of problem is a regression problem, this is where the network returns a number, not a category.</p>

        <p><strong>Loss function</strong> - This is the mathematical function used to calculate the error of the network. It is used when comparing the network's prediction with the true value of a data point. The network tries to minimise this error during the training process.</p>

        <p><strong>Learning Rate</strong> - When the network learns, it calculate the 'direction' it needs to move in and then takes a step. The learning rate is the size of that step. A small learning rate means smaller steps, and slower learning. A large learning rate means that the network can jump 'too far', going past the better solution to a worse one.</p>

        <p><strong>Activation</strong> - This is one of the mathematical functions calculated by each neuron. It is part of the process of transforming the input data to the neuron to produce its output.</p>

        <p><strong>Regularisation</strong> - These are methods to penalise complex models, which are at risk of over-fitting the training data. L1 and L2 regularisation add penalties to the cost function for the complexity of the model. The more complex the model becomes, the higher the cost (loss, or error). The network is therefore also trying to optimise for a simpler model. Simpler models are more likely to generalise to unseen data.</p>

        <p><strong>Lambda</strong> - A parameter for controlling the strength of the regularisation.</p>

        <p><strong>Train:Test ratio</strong> - The data set is split up into training data and test data. The network is trained on the training data. The test data is used to evaluate the network but does not affect its training.</p>

        <p><strong>Noise</strong> - In the provided data sets, the noise parameter controls how much randomness there is added to the data. Noisier data is typically harder to accurately classify, and the training loss will be higher.</p>

        <p><strong>Batch size</strong> - This many data points are used in training between each update of the weights of the network. If batch size is 1, the network is updated after each training example. Batching data avoids slowing down training.</p>

        <SlideBox type="task" title="Explore the different Features">
        <ol start={2}>
<li>So far we have worked with the X_1 and X_2 features. Tensorflow Playground allows you to select other features as inputs to the network. Experiment with combining these features in a network.</li>
</ol>

        </SlideBox>

        <p><strong>X_1</strong> / <strong>X_2</strong>: This is the x and y position of the dot</p>

        <p><strong>X_1X_2</strong>: This is the x and y position multiplied together</p>

        <p><strong>X_12</strong> / <strong>X_22</strong>: This is the square of the x position / the y position</p>

        <SlideBox type="task" title="Reattempt Spiral">
        <ol start={3}>
<li>Using additional features and customising the learning parameters should make it possible to get a better solution for the "Spiral" data set. What is the lowest training loss you can achieve?</li>
</ol>

        </SlideBox>

    </Section>
    <Slide>
        <MainSlide>
            <h3>5. Customise your network</h3>
            <p><img style={{ width: "100%" }} src={LearningRate} alt="Animation showing changing the learning rate parameter in the Tensorflow Playground user interface and training a neural network" /></p>

        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Conclusion: Real World Applications">
        <p>Real-world data is often complex and highly dimensional. There are lots of different properties about the world that we can measure. This data is not random, however. It obeys complex patterns. </p>

        <p>As humans, we know that by understanding the patterns of events around us, we are more able to make intelligent decisions. Neural networks learn to simplify these patterns to make decisions that appear intelligent, purely through the power of mathematics (and enough data).</p>

        <p>We have seen how to train neural networks that recognise simple patterns. The networks we have trained are tiny, but the same principles scale up - more data and more computation enables more complex patterns.</p>

        <p>Some patterns seem so complicated that we cannot imagine a machine ever learning them. For example, learning the patterns of human communication. So, when a computer talks to us - as large language models (LLMs) are now able to do - part of us readily believes it must really be <em>thinking</em>.</p>

        <p>In fact, consider that LLMs are neural networks with <em>billions</em> of parameters (and an enormous carbon footprint in terms of energy consumption). They are trained on <em>trillions</em> of words of text - almost all the text ever produced by the human race. With such astronomical amounts of data, neural networks get <em>really good</em> at predicting the patterns in human communication, but that is all they are doing.</p>

        <p>So are AIs intelligent? That depends whether structure - relationships between data points, patterns - is sufficient for intelligence, or whether intelligence involves something more. This remains an open question.</p>

    </Section>
    <Slide>
        <MainSlide>
            <h3>Conclusion: Real World Applications</h3>
            <KeyPoint><p>Neural networks learn patterns in input data in order to predict an output variable</p></KeyPoint>
            <p>This can be applied everywhere, including:</p>

			<Columns>
				<div>
            <ul>
<li>Healthcare</li>
<li>Finance</li>
<li>Transportation</li>
<li>Industry</li>
</ul>

				</div>
				<div>
            <ul>
<li>Agriculture</li>
<li>Technology</li>
<li>Marketing</li>
<li>Education</li>
</ul>

				</div>
			</Columns>
        </MainSlide>
    </Slide>
</Group>

<Group>
    <Section h2="Extensions">
            <p>Interested and want to keep learning after the session? Some of these activities require more knowledge or experience. If you are interested in pursuing these, talk to one of the lecturers who can give you some pointers and advice.</p>

            <SlideBox title="Further Reading">
            <p>A good introductory text to neural networks, available for free online, is Michael Nielsen, 2019. <a href="http://neuralnetworksanddeeplearning.com/index.html">Neural Networks and Deep Learning</a>.</p>

            <p>This activity and how it explains neural networks was inspired by Chris Olah's (2014) paper on <a href="http://colah.github.io/posts/2014-03-NN-Manifolds-Topology/">Neural Networks, Manifolds, and Topology</a>. There are some complex mathematical ideas in here but these are presented with intuitive diagrams and animations.</p>

        </SlideBox>

    </Section>
    <Slide>
        <HeadSlide>
            <h2>Extensions</h2>
        </HeadSlide>
    </Slide>
</Group>

<Group>
    <Section h3="Train on your own data">
        <p>The version of Tensorflow Playground used above allows you to upload your own data sets. This could be any data you are interested in and want to see what a neural network can learn from it.</p>

        <p>This data needs to be in a JSON file format. Each dot represents data with an X and a Y value. Each data point is loaded from a JSON file in the format:</p>

        <CodeBlk language="json" text={`{"x":0.8028169014,"y":0.5919661734,"label":1}`} />
        <p>For a classification task like we have been performing above, the label should be either 1 or -1; the x and y values should ideally be between <code>[-1, 1]</code> (though these are normalised automatically if you forget). Because of the limitations of this tool, you can only have up to two input variables, called <code>x</code> and <code>y</code>.</p>

        <p>You can use a tool such as <a href="https://jsonlint.com/csv-to-json">this one</a> to convert a CSV file, saved from a spreadsheet package such as Excel, to JSON. The CSV should be in a format like this (a few hundred records is ideal):</p>

        <table>
<thead>
<tr>
<th>x</th>
<th>y</th>
<th>label</th>
</tr>
</thead>
<tbody><tr>
<td>0.8028169014</td>
<td>0.5919661734</td>
<td>1</td>
</tr>
</tbody></table>

        <p>Convert your own data into the correct JSON format and then upload to Tensorflow Playground to train a neural network on it.</p>

    </Section>
</Group>

<Group>
    <Section h3="Use your neural network">
        <p>You can use Python to create a program that includes your neural network. Tensorflow Playground shows you the Python function to evaluate the trained network.</p>

        <CodeBlk language="python" text={`import math
import tensorflow

def forward(X1, X2):
    """Compute a forward pass of the network."""
    a1 = math.tanh(0.10 + (0.35 * X1) + (-0.38 * X2))
    return a1

forward(0.5, 0.2)`} />
        <p>To run this function, you need to import the <code>math</code> and <code>tensorflow</code> packages. Then call this function, passing the values for the X1 (x) and X2 (y) arguments.</p>

        <p>You will need to first install the tensorflow package using</p>

        <CodeBlk language="bash" text={`pip install tensorflow`} />
    </Section>
</Group>

</>
}
export default Lecture;
