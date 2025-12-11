import { Component } from "react";
/*****importation des images de costume 1 */
import bc1c1 from "../../../image/kids/boys/c1-c1.jfif";
import bc1c2 from "../../../image/kids/boys/c1-c2.jfif";
import bc1c3 from "../../../image/kids/boys/c1-c3.jfif";
/*****importation des images de jacket 1 */
import bj1c1 from "../../../image/kids/boys/j1-c1.jfif";
/*****importation des images de jacket 2 */
import bj2c1 from "../../../image/kids/boys/j2-c1.jfif";
/*****importation des images de jacket 3 */
import bj3c1 from "../../../image/kids/boys/j3-c1.jfif";
/*****importation de Navbar */
import NavBar from "../../../component/NavBarProduct";
/*****importation de Font Awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default class Boy extends Component {
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
                    <div class="boys" id="boys">
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
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                            <div class="cloth">
                                <img src={bj1c1} id="jum1" />
                                <div class="colors">
                                    <div class="green color-box" ></div>
                                </div>
                                <span>59,192$</span>
                                <p>Green jumpsuit</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                        </div>
                        <div class="line">
                            <div class="cloth">
                                <img src={bj2c1} id="jum2" />
                                <div class="colors">
                                    <div class="blue color-box" ></div>
                                </div>
                                <span>70,192$</span>
                                <p>Blue jumpsuit</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                            <div class="cloth">
                                <img src={bj3c1} id="jum3" />
                                <div class="colors">
                                    <div class="yellow color-box" ></div>
                                </div>
                                <span>95,192$</span>
                                <p>Yellow jumpsuit</p>
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