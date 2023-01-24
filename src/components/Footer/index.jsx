import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__center">
                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/vongsavanth-parry/">
                            <FaLinkedin
                                size={25}
                                style={{ color: "#fff", marginRight: "0.5rem" }}
                            />
                        </a>
                        <a href="https://github.com/vongsavanth-parry?tab=repositories">
                            <FaGithub
                                size={25}
                                style={{ color: "#fff", marginRight: "0.5rem" }}
                            />
                        </a>
                    </div>
                    <h4>Designed & Built by Vongsavanth Parry</h4>
                </div>
            </div>
        </div>
    );
};