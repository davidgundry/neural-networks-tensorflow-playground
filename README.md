# Slideberry Template Project

This is a Gatsby web app for use with [Slideberry](https://github.com/davidgundry/slideberry) (a combination of 'slide' and 'library') - a React library for creating web apps for sharing slides and presentation materials. This template project has been used as a base to create web apps for several courses (6 modules so far). The apps contains slides and lecture notes, which can easily be made interactive with the power of React. You can present directly from the app, as well as print accessible PDFs.

You can see a live version of this template project at [https://slideberry.netlify.app](https://slideberry.netlify.app)

The template, and the library has the following goals:

* **Accessible content** - The web app is accessible, and slides and notes can be printed as accessible PDFs.
* **Interactive Materials** - Lecture content can be directly authored in TSX, so the full power of React is available for authoring interactive components, as well as programmatically generating content and slides from data if you want to
* **Quick to Author** - Content can be authored in Markdown and automatically converted to TSX; a script is provided to convert Markdown documents into presentation materials. Some custom Markdown extensions are used to author both notes and slides in the same document. Currently this process is separate to Gatsby's content pipeline. 

This template has been a work in progress, being adapted from several web apps for different courses that make slight modifications depending on the needs of the course. 

## Development

Clone this repository, then run

```shell
npm install
npm start
```

Your site is now running at http://localhost:8000!

### Basic Configuration Summary

All of the pages of the web app are defined in `src/pages/` corresponding to their path.

Teaching content should be added, grouped by topic in `src/content/<course-name>/<topic-name>`. Each topic has an `index.tsx` which exports both components for each lecture/practical/etc. and a `Metadata` object with metadata about that topic. The metadata for each topic is re-exported in an array from `src/content/metadata.ts`.

For each lecture a page must be manually created in `src/pages/lectures/<slug>/` where the slug is defined in the topic metadata. Similarly, a page must be manually created for each practical in `src/pages/practicals/<slug>`. These pages import the content that has been exported with the metadata.

While this requires more manual work to set up the course topics, it is more flexible and less prescriptive than generating the pages automatically through Gatsby. The assumption has been that for a particular course, the number of pages is fixed and relatively small, and it is likely that complete customisation is desired for adding arbitrary custom interactivity.

### Convert Markdown to Slides script

Documents written in Markdown can be converted to TSX components using the included `markdownToSlides.ts` script. Currently this assumes the content will be located in the `src/content/<course-name>/<topic-name>` folder and that it follows the lecture page template.

Call the `markdownToSlides.ts` script using `ts-node`.

    npx ts-node markdownToSlides.ts [section | slide] <path-to-markdown> <path-to-tsx>

If you are using VS Code, a task has been created in `.vscode/tasks.json` to covert the active file.

The files are parsed as markdown, with the following additions created entirely for my convenience when in an authoring module content:

* A level 2, or 3 heading marks the start of a new group
    * The first slide in a level 2 group is a `HeadSlide`, otherwise slides are `MainSlide`
* Content underneath a heading is added to the section (lecture notes)
* A horizontal rule, of three dashes surrounded by empty lines `---` marks the start of a slide, or a new slide
* A level 4 heading starts a `SlideBox`; a level 4 heading of an exclamation mark `#### !` ends a `SlideBox`
    * The type of the slidebox can be included in the heading name, e.g. `#### Task: Do Something` will be converted to a `Slidebox` with `type: "task"`
