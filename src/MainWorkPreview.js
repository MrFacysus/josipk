import React from "react";
import "./MainWorkPreview.css";
import video from "./videos/god.mp4";

export default function MainWorkPreview() {
    return (
        <main className="mainWorkPlaceHolder">
            <h1 className="mainTitle">Josip Kladarić</h1>
            <h3 className="mainSubtitle">Freelance 3D Designer</h3>
            <video className="mainVideo" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
            </video>
        </main>
    );
}
