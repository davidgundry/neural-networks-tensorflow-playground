import * as React from "react";
import { LecturePage } from "../../slideberry/lecture/LecturePage";
import { Lecture, metadata } from "../../content/slideberry/1-introduction";

const Page = () =>  { 
    return <LecturePage metadata={metadata} pageType="lectures">
        <Lecture />
    </LecturePage>
  }
export default Page; 