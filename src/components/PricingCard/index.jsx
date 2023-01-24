import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function PricingCard() {
    return (
        <div className="card">
            <div className="card__container">
                <div className="card__content">
                    <h3>- Basic -</h3>
                    <span className="divider"></span>
                    <p className="price">100 €</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        CONTACT NOW
                    </Link>
                </div>

                <div className="card__content">
                    <h3>- Premium -</h3>
                    <span className="divider"></span>
                    <p className="price">200 €</p>
                    <p>- 2 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        CONTACT NOW
                    </Link>
                </div>

                <div className="card__content">
                    <h3>- Business -</h3>
                    <span className="divider"></span>
                    <p className="price">300 €</p>
                    <p>- 5 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        CONTACT NOW
                    </Link>
                </div>
            </div>
        </div>
    );
};