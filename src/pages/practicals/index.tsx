import * as React from "react"
import type { PageProps } from "gatsby"
import { TopListPage } from "../../slideberry/navigation/TopListPage"
import { metadata } from "../../content/metadata"
import BackgroundImage from "../../images/background_freepik.svg"
import { FooterDecoration } from "../../FooterDecoration"

const practicals = (process.env.GATSBY_DEVELOPMENT) ? metadata : metadata.filter(p => p.links?.indexOf("practicals") !== -1);

const PracticalsPage: React.FC<PageProps> = () => {
  return <TopListPage pages={practicals} heading="Practicals" slug="practicals">
                      <FooterDecoration />
              </TopListPage>
}

export default PracticalsPage
