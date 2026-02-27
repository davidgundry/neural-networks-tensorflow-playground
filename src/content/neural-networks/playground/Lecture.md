This short lecture gives a very brief introduction to neural networks.

### Computation

Computer science is about computation - what problems we can solve using systems

* Systems can be networks of (trillions of) logic gates
* The human brain is a network of neurons
* Neural networks are layers of simulated neurons

#### Aside: Computers that can learn

Logic gates are hard transitions - binary on-off switches; neurons have smooth transitions - this smooth gradient makes it possible to train them

---

### Neural Networks

A neural network learns a function (function approximation)
* Function takes an input and returns an output
* We teach the neural network by giving it examples (supervised learning); just like a person, if you compare your work to the correct answer and find you made an error, you try to change your behaviour to not make the same error (as much) next time.
* A big enough network can learn extremely complicated functions - what the most likely next character in a sentence is (LLM), or whether a picture is of a dog or a cat

---

### Group Activity

**Group Activity** - divide dogs and cats; put them on a line, mark the point between that separates the two groups

**Key Point:** A classifier tries to draw a line to divide two groups

* Extra detail - it does this by minimising the error (loss function)

* Repeat in two dimensions - we draw a straight line between the two groups
* Repeat where you need to draw a curved line - remember the rule, you have to use a straight line.
    * We cannot correctly classify this without transforming the data first.
    * Repeat, but before you draw the line, you can slide the pictures around, but only in big, squashy movements

**Key Point:** In a deep neural network, you have layers. each layer transforms (squashes and stretches) the data; the final layer sees the squashed data and draws a straight line

#### Aside: More dimensions

We often need to work with more than two dimensions because there is more information than can be represented in one or two; in higher dimensional spaces, the "line" we draw to separate the data is a hyperplane

---

### Lateral Thinking Puzzle

Moving to higher dimensions

* A challenge to draw a line to divide groups of cats and dogs on a line, where the cats encircle the dogs.
* Solution: squash the line (move into a two dimensional space), and then draw a straight line that cuts through it

---

### Summary of Neural networks

* Input features

**Key Point:**  If the information we need is not (latent) in the features, we cannot learn the function
* Hidden units/layers - little units of computation, do the squashing/streching of the data; as they are simple, only limited forms of transformation are possible (affine transformations, translations, and pointwise application of activation function)
    * Number of units in layer - number of dimensions we are working in
    * Number of layers - number of transformations we apply
* Output units - final activation function draws the "straight line"

---
