import * as React from "react";
import { LecturePage } from "../../slideberry/lecture/LecturePage";
import {Demo, metadata} from "../../content/neural-networks/playground";

const Page = () =>  {
    return <LecturePage metadata={metadata} pageType="demos">
        <Demo />
    </LecturePage>
}; export default Page;
