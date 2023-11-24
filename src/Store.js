import React from "react";
import firstWork from "./store/firstpost.jpg";
import secondWork from "./store/secondpost.jpg";
import thirdWork from "./store/thirdpost.jpg";
import fourthWork from "./store/fourthpost.jpg";
import fifthwork from "./store/fifthpost.jpg";
import sixthwork from "./store/sixthpost.jpg";
import seventhwork from "./store/seventhpost.jpg";
import eighthwork from "./store/eighthpost.jpg";
import ninethwork from "./store/ninethpost.png";
import tenthwork from "./store/tenthpost.jpg";
import "./Store.css";

export default function Store() {
    return (
        <>
            <container className="storePreview">
                <div className="workTitle">
                    <h1 className="workSubText">Digital Asset Store</h1>
                </div>
                <div className="storeShowcase">
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/perfect-glass---cycles-material--glass-shader">
                            <div className="imageHolder">
                                <img className="storeItem" src={firstWork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">Perfect Glass</h2>
                            </div>
                        </a>
                    </div>
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/perfect-car-paint">
                            <div className="imageHolder">
                                <img className="storeItem" src={secondWork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">Perfect Car Paint</h2>
                            </div>
                        </a>
                    </div>
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/perfect-wool-material">
                            <div className="imageHolder">
                                <img className="storeItem" src={thirdWork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">Perfect Cloth</h2>
                            </div>
                        </a>
                    </div>
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/perfect-material-pack-1">
                            <div className="imageHolder">
                                <img className="storeItem" src={fourthWork} alt="placeholder" />
                                <p className="cost">$23.99</p>
                                <h2 className="productName">Perfect Material Pack 1</h2>
                            </div>
                        </a>
                    </div>
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/perfect-metal--procedural-cycles-material">
                            <div className="imageHolder">
                                <img className="storeItem" src={fifthwork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">Perfect Metal</h2>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="storeShowcase">
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/perfect-carbon---eevee-material">
                            <div className="imageHolder">
                                <img className="storeItem" src={sixthwork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">Perfect Carbon</h2>
                            </div>
                        </a>
                    </div>
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/perfect-camo---cycles-and-eevee-camo-material">
                            <div className="imageHolder">
                                <img className="storeItem" src={seventhwork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">Perfect Camo</h2>
                            </div>
                        </a>
                    </div>
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/perfect-snow---eevee-snow-material">
                            <div className="imageHolder">
                                <img className="storeItem" src={eighthwork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">Perfect Snow</h2>
                            </div>
                        </a>
                    </div>
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/the-billiard-collection-eevee">
                            <div className="imageHolder">
                                <img className="storeItem" src={ninethwork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">Billiard Collection</h2>
                            </div>
                        </a>
                    </div>
                    <div className="storeHolder">
                        <a className="clickable" href="https://blendermarket.com/products/3d-printer-for-architecture-furniture-interior-design">
                            <div className="imageHolder">
                                <img className="storeItem" src={tenthwork} alt="placeholder" />
                                <p className="cost">$7.99</p>
                                <h2 className="productName">3D Printer</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </container>
        </>
    );
}