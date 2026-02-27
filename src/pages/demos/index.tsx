import * as React from "react"
import type { PageProps } from "gatsby"
import { TopListPage } from "../../slideberry/navigation/TopListPage"
import { metadata } from "../../content/metadata"
import BackgroundImage from "../../images/background_freepik.svg"

const practicals = (process.env.GATSBY_DEVELOPMENT) ? metadata : metadata.filter(p => p.links?.indexOf("practicals") !== -1);

const PracticalsPage: React.FC<PageProps> = () => {
  return <TopListPage pages={practicals} heading="Practicals" slug="practicals">
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

export default PracticalsPage
