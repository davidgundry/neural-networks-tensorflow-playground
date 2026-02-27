import * as React from "react";
import BackgroundImage from "./images/neural-network.png"

export const FooterDecoration = () => {
    return <>
                <div style={{
            zIndex: -1000,
            backgroundColor: "#30799d",
            backgroundImage: ` linear-gradient(to bottom, #30799d, #6099ad)`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 400px",
            position: "fixed",
            top: 0,
            bottom:0,
            left:0,
            right:0,
    }}><div style={{backgroundImage: `url(${BackgroundImage})`,
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "calc(min(100%, 400px)) auto",
                            position: "fixed",
            top: 0,
            bottom:0,
            left:0,
            right:0,
            }}>

            <span style={{position: "fixed",
                bottom:0,
                right:0,
                color: "white"
        }}><a href="https://www.flaticon.com/free-icons/neural-network" title="neural network icons">Neural Network icon by Paul J. - Flaticon</a></span>
        </div>
        </div>
    </>
}