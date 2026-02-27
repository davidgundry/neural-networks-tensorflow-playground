import * as React from "react";
import { LecturePage } from "../../slideberry/lecture/LecturePage";
import {Practical, metadata} from "../../content/neural-networks/playground";

const Page = () =>  {
    return <LecturePage metadata={metadata} pageType="practicals">
        <Practical />
    </LecturePage>
}; export default Page;
