import React from "react";
import "./WorkPreview.css";
import firstWork from "./imgs/firstpost.png";
import secondWork from "./imgs/secondpost.png";	
import thirdWork from "./imgs/thirdpost.png";
import fourthWork from "./imgs/fourthpost.png";
import fifthwork from "./imgs/fifthpost.png";
import sixthwork from "./imgs/sixthpost.png";
import seventhwork from "./imgs/seventhpost.png";
import eighthwork from "./imgs/eighthpost.png";
import ninethwork from "./imgs/ninethpost.png";
import tenthwork from "./imgs/tenthpost.png";

export default function WorkPreview() {
    return (
        <>
            <container className="workPreview">
                <div className="workTitle">
                    <h1 className="workSubText">Projects</h1>
                </div>
                <div className="workShowcase">
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/cthulhu-lego-minifigure-06bc61b02ab2461fb8f001d7b43d5d80">
                            <img className="work" src={firstWork} alt="placeholder" />
                            <h2>Cthulhu Lego</h2>
                        </a>
                    </div>
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/lowpoly-knife-free-3d-model-5e910a4ee19248b794317d952036622e">
                            <img className="work" src={secondWork} alt="placeholder" />
                            <h2>Lowpoly Knife</h2>
                        </a>
                    </div>
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/badge-e7f91186a2c44b2490445a90e705fdc6">
                            <img className="work" src={thirdWork} alt="placeholder" />
                            <h2>Badge</h2>
                        </a>
                    </div>
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/clark-preview-cbf0baf3cfec423d950e70ace92fb541">
                            <img className="work" src={fourthWork} alt="placeholder" />
                            <h2>Clark</h2>
                        </a>
                    </div>
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/dog-head-preview-9d003d91122e423cbb3685ce7d966070">
                            <img className="work" src={fifthwork} alt="placeholder" />
                            <h2>Dog Head</h2>
                        </a>
                    </div>
                </div>
                <div className="workShowcase">
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/horse-revision5-preview-2ca0b0bde67740a5ab92066b2684b49c">
                            <img className="work" src={sixthwork} alt="placeholder" />
                            <h2>Horse</h2>
                        </a>
                    </div>
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/canary-with-leg-grips-20cadced09b145f3b44f517c5df7dd86">
                            <img className="work" src={seventhwork} alt="placeholder" />
                            <h2>Canary</h2>
                        </a>
                    </div>
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/mermaid-preview-1155bb3155d54fe8bc397bdb2b0b7db6">
                            <img className="work" src={eighthwork} alt="placeholder" />
                            <h2>Mermaid</h2>
                        </a>
                    </div>
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/the-billiard-collection-pool-table-set-16ae48123d48428a8d1e00b033531ada">
                            <img className="work" src={ninethwork} alt="placeholder" />
                            <h2>Billiard Table</h2>
                        </a>
                    </div>
                    <div className="workHolder">
                        <a className="clickable" href="https://sketchfab.com/3d-models/lip-balm-holder-preview-54e9a38624864a1e9ab031ec42f8ca62">
                            <img className="work" src={tenthwork} alt="placeholder" />
                            <h2>Lip Balm Holder</h2>
                        </a>
                    </div>
                </div>
            </container>
        </>
    );
}