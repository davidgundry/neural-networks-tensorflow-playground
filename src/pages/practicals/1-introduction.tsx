import * as React from "react";
import { LecturePage } from "../../slideberry/lecture/LecturePage";
import {Practical, metadata} from "../../content/slideberry/1-introduction";

const Page = () =>  {
    return <LecturePage metadata={metadata} pageType="practicals">
        <Practical />
    </LecturePage>
}; export default Page;
