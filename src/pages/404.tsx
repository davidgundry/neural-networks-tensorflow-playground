import * as React from "react"
import { type PageProps } from "gatsby"
import Box from "@mui/material/Box"
import { SimplePage } from "../slideberry/app/SimplePage"

const metadata = {
  title: "404: Not Found",
  author: "",
  summary: "",
  slug: ""
}

const IndexPage: React.FC<PageProps> = () => {

  return <SimplePage metadata={metadata}>
    <Box sx={{padding: 2}}> 
      <h2>There's nothing here</h2>
      <p>Unfortunately that page doesn't exit.</p>
      <p>The link you followed may be out of date.</p>
    </Box>
  </SimplePage>
}

export default IndexPage