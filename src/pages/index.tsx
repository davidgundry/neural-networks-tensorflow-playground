import * as React from "react"
import { Link, type PageProps } from "gatsby"
import { ListItemButton, ListItemText, Paper } from "@mui/material"
import { List, Divider } from "@mui/material"
import { LinkList } from "../slideberry/navigation/LinkList"
import { moduleInformationMetadata } from "./module-information"
import { SimplePage } from "../slideberry/app/SimplePage"
import BackgroundImage from "../images/background_freepik.svg"
import { App } from "../slideberry/app/App"


const pages = [moduleInformationMetadata]

const metadata = {
  title: "Slideberry",
  author: "David Gundry",
  summary: "",
  slug: ""
}

const IndexPage: React.FC<PageProps> = () => {

  return <App metadata={metadata} topLevel={true}>
          <main>

<Paper sx={{
                    flexGrow: 1,
                    backgroundColor: "background.paper",
                    color: "text.primary",
                    marginTop: 2,
                    marginBottom: 2,
                }}>
    <LinkList pages={pages} prefix=""/>

      <List component="nav">
          <ListItemButton component={Link} to={"/lectures/"} key={"lectures"} alignItems="flex-start">
            <ListItemText primary="Lectures"/>
          </ListItemButton>

          <ListItemButton component={Link} to={"/practicals/"} key={"practicals"} alignItems="flex-start">
            <ListItemText primary="Practicals"/>
          </ListItemButton>

          <Divider variant="inset" component="li" />
      </List>
      </Paper>

    </main>

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
    </App>
}

export default IndexPage