import React from "react";
import "./styles.scss";

export default function ContactForm() {
    return (
        <div className="form">
            <form>
                <label>Full name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here" />
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
};