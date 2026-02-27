import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { TopListPage } from "../../slideberry/navigation/TopListPage"
import { metadata } from "../../content/metadata"
import BackgroundImage from "../../images/background_freepik.svg"
import { FooterDecoration } from "../../FooterDecoration"

const lectures = (process.env.GATSBY_DEVELOPMENT) ? metadata : metadata.filter(p => p.links?.indexOf("lectures") !== -1);

const LecturesPage: React.FC<PageProps> = () => {
    return <TopListPage pages={lectures} heading="Lectures" slug="lectures">
                    <FooterDecoration />
            </TopListPage>
}

export default LecturesPage

export const Head: HeadFC = () => <title>Lectures</title>
