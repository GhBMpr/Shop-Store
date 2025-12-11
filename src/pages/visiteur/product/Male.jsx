import { Component } from "react";
/**********importation des images de jacket 1 */
import mj1c1 from "../../../image/male/j1-c1.jfif";
import mj1c2 from "../../../image/male/j1-c2.jfif";
import mj1c3 from "../../../image/male/j1-c3.jfif";
import mj1c4 from "../../../image/male/j1-c4.jfif";
/**********importation des images de pulle 1 */
import mp1c1 from "../../../image/male/p1-c1.jfif";
import mp1c2 from "../../../image/male/p1-c2.jfif";
import mp1c3 from "../../../image/male/p1-c3.jfif";
/**********importation des images de pulle 2 */
import mp2c1 from "../../../image/male/p2-c1.jfif";
/**********importation des images de pants 1 */
import mpt1c1 from "../../../image/male/pt1-c1.jfif";
import mpt1c2 from "../../../image/male/pt1-c2.jfif";
/**********importation des images de servetment 1 */
import ms1c1 from "../../../image/male/s1-c1.jfif";
import ms1c2 from "../../../image/male/s1-c2.jfif";
/**********importation des images de servetment 2 */
import ms2c1 from "../../../image/male/s2-c1.jfif";
import NavBar from "../../../component/NavBarProduct";
/*****importation de Font Awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default class Male extends Component {
    handleImageChange = (imageId, newSrc) => {
        document.getElementById(imageId).src = newSrc;
    };
    render() {
        return (
            <div>
                <NavBar/>
                <section className="header product-header" id="header">
                    <div className="max-width">
                        <div className="header-content">
                            <div className="text-1">Discover Style, Quality, and Comfort</div>
                        </div>
                    </div>
                </section>
                <div className="productpage">
                    <div className="men" id="men">
                        <div className="line">
                            <div className="cloth">
                                <img src={mj1c1} id="mjack1" />
                                <div className="colors">
                                    <div className="greenBlue color-box" onClick={() => this.handleImageChange("mjack1", mj1c1)}></div>
                                    <div className="brownBlue color-box" onClick={() => this.handleImageChange("mjack1", mj1c2)}></div>
                                    <div className="beigeBlack color-box" onClick={() => this.handleImageChange("mjack1", mj1c3)}></div>
                                    <div className="blueBlack color-box" onClick={() => this.handleImageChange("mjack1", mj1c4)}></div>
                                </div>
                                <span>25,192$</span>
                                <p>Jackette</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                            <div className="cloth">
                                <img src={mp1c1} id="mpull1" />
                                <div className="colors">
                                    <div className="gray color-box" onClick={() => this.handleImageChange("mpull1", mp1c1)}></div>
                                    <div className="blue color-box" onClick={() => this.handleImageChange("mpull1", mp1c2)}></div>
                                    <div className="orange color-box" onClick={() => this.handleImageChange("mpull1", mp1c3)}></div>
                                </div>
                                <span>30,192$</span>
                                <p>Pulle gradé 2 couleurs</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="cloth">
                                <img src={mp2c1} id="mpull2" />
                                <div className="colors">
                                    <div className="blueWhiteBlack color-box" ></div>
                                </div>
                                <span>40,192$</span>
                                <p>Pulle gradé 3 couleurs</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                            <div className="cloth">
                                <img src={mpt1c1} id="mpants1" />
                                <div className="colors">
                                    <div className="militaire color-box" onClick={() => this.handleImageChange("mpants1", mpt1c1)}></div>
                                    <div className="black color-box" onClick={() => this.handleImageChange("mpants1", mpt1c2)}></div>
                                </div>
                                <span>15,192$</span>
                                <p>Pants</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                        </div>

                        <div className="line">
                            <div className="cloth">
                                <img src={ms1c1} id="mservet1" />
                                <div className="colors">
                                    <div className="grayBlack color-box" onClick={() => this.handleImageChange("mservet1", ms1c1)}></div>
                                    <div className="bluecielWhiteBlack color-box" onClick={() => this.handleImageChange("mservet1", ms1c2)}></div>
                                </div>
                                <span>50,992$</span>
                                <p>Tracksuit</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                            <div className="cloth">
                                <img src={ms2c1} id="servet2" />
                                <div className="colors">
                                    <div className="beigeBlack color-box" ></div>
                                </div>
                                <span>90,500$</span>
                                <p>Tracksuit</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}