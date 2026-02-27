import * as React from "react"
import { Link, type PageProps } from "gatsby"
import { ListItemButton, ListItemText, Paper } from "@mui/material"
import { List, Divider } from "@mui/material"
import { LinkList } from "../slideberry/navigation/LinkList"
import { SimplePage } from "../slideberry/app/SimplePage"
import BackgroundImage from "../images/background_freepik.svg"
import { App } from "../slideberry/app/App"

import { metadata as playground } from "../content/neural-networks/playground"
import { FooterDecoration } from "../FooterDecoration"


const pages = [playground]

const metadata = {
  title: "Neural Networks with Tensorflow Playground",
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
    <LinkList pages={pages} prefix="lectures"/>

      <List component="nav">
          <ListItemButton component={Link} to={"/lectures/playground/"} key={"lectures"} alignItems="flex-start">
            <ListItemText primary="Lecture"/>
          </ListItemButton>

          <ListItemButton component={Link} to={"/practicals/playground"} key={"practicals"} alignItems="flex-start">
            <ListItemText primary="Practical"/>
          </ListItemButton>

          <ListItemButton component={Link} to={"/practicals/playground"} key={"demos"} alignItems="flex-start">
            <ListItemText primary="Demo"/>
          </ListItemButton>

          <Divider variant="inset" component="li" />
      </List>
      </Paper>

    </main>

    <FooterDecoration />
    </App>
}

export default IndexPage