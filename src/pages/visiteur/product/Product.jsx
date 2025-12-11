import { Component } from "react";
import NavBar from "../../../component/NavBarProduct";
/*****importation de Font Awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
/*****importation des images de costume 1 Boy */
import bc1c1 from "../../../image/kids/boys/c1-c1.jfif";
import bc1c2 from "../../../image/kids/boys/c1-c2.jfif";
import bc1c3 from "../../../image/kids/boys/c1-c3.jfif";
/********importation des images de dress 1 women */
import fd1c1 from "../../../image/female/d1-c1.jfif";
import fd1c2 from "../../../image/female/d1-c2.jfif";
import fd1c3 from "../../../image/female/d1-c3.jfif";
/********importation des images de clothes 1 girl */
import gc1c1 from "../../../image/kids/girls/c1-c1.jfif";
import gc1c2 from "../../../image/kids/girls/c1c2.jfif";
import gc1c3 from "../../../image/kids/girls/c1c3.jfif";
import gc1c4 from "../../../image/kids/girls/c1c4.jfif";
/**********importation des images de jacket 1 men */
import mj1c1 from "../../../image/male/j1-c1.jfif";
import mj1c2 from "../../../image/male/j1-c2.jfif";
import mj1c3 from "../../../image/male/j1-c3.jfif";
import mj1c4 from "../../../image/male/j1-c4.jfif";
/********importation des images de jacket 1 women*/
import fj1c1 from "../../../image/female/j1-c1.jfif";
import fj1c2 from "../../../image/female/j1-c2.jfif";
import fj1c3 from "../../../image/female/j1-c3.jfif";
/********importation des images de dress 1 girls */
import gd1c1 from "../../../image/kids/girls/d1c1.jfif";
import gd1c2 from "../../../image/kids/girls/d1c2.jfif";
import gd1c3 from "../../../image/kids/girls/d1c3.jfif";

export default class Product extends Component {
    handleImageChange = (imageId, newSrc) => {
        document.getElementById(imageId).src = newSrc;
    };
    render() {
        return (
            <div>
                <NavBar />
                <section className="header product-header" id="header">
                    <div className="max-width">
                        <div className="header-content">
                            <div className="text-1">Discover Style, Quality, and Comfort</div>
                        </div>
                    </div>
                </section>
                <div className="productpage">
                    <div className="Products">
                        <div class="line">
                            <div class="cloth">
                                <img src={bc1c1} id="bcost1" />
                                <div class="colors">
                                    <div class="gray color-box" onClick={() => this.handleImageChange("bcost1", bc1c1)}></div>
                                    <div class="biege color-box" onClick={() => this.handleImageChange("bcost1", bc1c2)}></div>
                                    <div class="black color-box" onClick={() => this.handleImageChange("bcost1", bc1c3)}></div>
                                </div>
                                <span>200,192$</span>
                                <p>Costume</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1" />
                                </div>
                            </div>
                            <div className="cloth">
                                <img src={fd1c1} id="dres1" />
                                <div className="colors">
                                    <div className="blue color-box" onClick={() => this.handleImageChange("dres1", fd1c1)}></div>
                                    <div className="yellow color-box" onClick={() => this.handleImageChange("dres1", fd1c2)}></div>
                                    <div className="pink color-box" onClick={() => this.handleImageChange("dres1", fd1c3)}></div>
                                </div>
                                <span>100,192$</span>
                                <p>Dress</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1" />
                                </div>

                            </div>
                        </div>
                        <div class="line">
                            <div class="cloth">
                                <img src={gc1c1} id="gcost1" />
                                <div class="colors">
                                    <div class="green color-box" onClick={() => this.handleImageChange("gcost1", gc1c1)}></div>
                                    <div class="blue color-box" onClick={() => this.handleImageChange("gcost1", gc1c2)}></div>
                                    <div class="white color-box" onClick={() => this.handleImageChange("gcost1", gc1c3)}></div>
                                    <div class="pink color-box" onClick={() => this.handleImageChange("gcost1", gc1c4)}></div>
                                </div>
                                <span>200,192$</span>
                                <p>Costume</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1" />
                                </div>
                            </div>
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
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1" />
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="cloth">
                                <img src={fj1c1} id="fjack1" />
                                <div className="colors">
                                    <div className="black color-box" onClick={() => this.handleImageChange("fjack1", fj1c1)}></div>
                                    <div className="blue color-box" onClick={() => this.handleImageChange("fjack1", fj1c2)}></div>
                                    <div className="pink color-box" onClick={() => this.handleImageChange("fjack1", fj1c3)}></div>
                                </div>
                                <span>30,192$</span>
                                <p>Jackette</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1" />
                                </div>
                            </div>
                            <div class="cloth">
                                <img src={gd1c1} id="gdress1" />
                                <div class="colors">
                                    <div class="blue color-box" onClick={() => this.handleImageChange("gdress1", gd1c1)}></div>
                                    <div class="red color-box" onClick={() => this.handleImageChange("gdress1", gd1c2)}></div>
                                    <div class="pink color-box" onClick={() => this.handleImageChange("gdress1", gd1c3)}></div>
                                </div>
                                <span>59,192$</span>
                                <p>Dress</p>
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