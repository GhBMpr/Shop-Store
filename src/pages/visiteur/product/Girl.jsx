import { Component } from "react";
import NavBar from "../../../component/NavBarProduct";
/********importation des images de clothes 1 */
import gc1c1 from "../../../image/kids/girls/c1-c1.jfif";
import gc1c2 from "../../../image/kids/girls/c1c2.jfif";
import gc1c3 from "../../../image/kids/girls/c1c3.jfif";
import gc1c4 from "../../../image/kids/girls/c1c4.jfif";
/********importation des images de dress 1 */
import gd1c1 from "../../../image/kids/girls/d1c1.jfif";
import gd1c2 from "../../../image/kids/girls/d1c2.jfif";
import gd1c3 from "../../../image/kids/girls/d1c3.jfif";
/********importation des images de dress 2 */
import gd2c1 from "../../../image/kids/girls/d2c1.jfif";
/********importation des images de jumpsuit 1 */
import gj1c1 from "../../../image/kids/girls/j1c1.jfif";
import gj1c2 from "../../../image/kids/girls/j1c2.jfif";
import gj1c3 from "../../../image/kids/girls/j1c3.jfif";
import gj1c4 from "../../../image/kids/girls/j1c4.jfif";
/*****importation de Font Awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default class Girl extends Component {
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
                    <div class="girls" id="girls">
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
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
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
                        <div class="line">
                            <div class="cloth">
                                <img src={gd2c1} id="gdress2" />
                                <div class="colors">
                                    <div class="blackGray color-box" ></div>
                                </div>
                                <span>70,192$</span>
                                <p>Black&Gray dress</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                            <div class="cloth">
                                <img src={gj1c1} id="gjum1" />
                                <div class="colors">
                                    <div class="biege color-box" onClick={() => this.handleImageChange("gjum1", gj1c1)}></div>
                                    <div class="orange color-box" onClick={() => this.handleImageChange("gjum1", gj1c2)}></div>
                                    <div class="blue color-box" onClick={() => this.handleImageChange("gjum1", gj1c3)}></div>
                                    <div class="pink color-box" onClick={() => this.handleImageChange("gjum1", gj1c4)}></div>
                                </div>
                                <span>95,192$</span>
                                <p>Jumpsuit</p>
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