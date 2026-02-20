import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { TopListPage } from "../../slideberry/navigation/TopListPage"
import { metadata } from "../../content/metadata"
import BackgroundImage from "../../images/background_freepik.svg"

const lectures = (process.env.GATSBY_DEVELOPMENT) ? metadata : metadata.filter(p => p.links?.indexOf("lectures") !== -1);

const LecturesPage: React.FC<PageProps> = () => {
    return <TopListPage pages={lectures} heading="Lectures" slug="lectures">
                    <div style={{
                    zIndex: -1000,
                    backgroundColor: "#30799d",
                    backgroundImage: `url(${BackgroundImage}), linear-gradient(to bottom, #30799d, #6099ad)`,
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 400px",
                    position: "fixed",
                    top: 0,
                    bottom:0,
                    left:0,
                    right:0,
            }}></div>
            </TopListPage>
}

export default LecturesPage

export const Head: HeadFC = () => <title>Lectures</title>
