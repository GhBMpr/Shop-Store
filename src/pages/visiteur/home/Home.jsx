import React, { Component } from 'react';
import NavBarHome from '../../../component/NavBarHome';
import Header from '../../../component/Header';
import image1 from '../../../image/1 pieza multifuncional Percha Estante de almacenaje.jfif';
import image2 from '../../../image/+216 5374.jpg';
import image3 from '../../../image/offer.jpg';
import LivraisionAnimation from '../../../assets/visiteur/js/FonctionsLivraision';
import OffersAnimation from '../../../assets/visiteur/js/FonctionOffers';
import { Link } from 'react-router-dom';
import Footer from '../../../component/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBarHome />
                <Header /> 
                <section className="about" id="about">
                    <div className="max-width">
                        <h2 className="title">About us</h2>
                        <div className="about-content">
                            <div className="column left">
                                <img src={image1} alt="" />
                            </div>
                            <div className="column right">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                                <Link to="/signupDelivery">
                                    <span></span>Work with us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service" id="service" >
                    <div className="max-width">
                        <h2 className="title">Services</h2>
                        <div className=" service-content">
                            <div className="livration">

                                <div className="column left">
                                    <div className="text"> About our <span className="typing-2"><LivraisionAnimation /></span></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>

                                </div>
                                <div className="column right">
                                    <img src={image2} alt="" />
                                </div>
                            </div>
                            <div className="offers">
                                <div className="column left">
                                    <img src={image3} alt="" />
                                </div>
                                <div className="column right">
                                    <div className="text"> About our <span className="typing-3"><OffersAnimation /></span></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    };
};
