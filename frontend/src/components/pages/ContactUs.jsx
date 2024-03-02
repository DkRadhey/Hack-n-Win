import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div>
            <section class="contact" id="contact">
                <h1 class="heading">
                    <span>contact Us</span>
                </h1>

                <form
                    action="https://formsubmit.co/09ca1c572cfd0d91890a42dc5d8452a6"
                    method="POST"
                >
                    <input
                        type="hidden"
                        name="_next"
                        value="http://localhost:5174/"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="text"
                        placeholder="your name"
                        id="name"
                        class="box"
                        name="name"
                    />
                    <input
                        type="email"
                        placeholder="your email"
                        id="emailid"
                        name="email"
                        class="box"
                    />
                    <input
                        type="text"
                        placeholder="subject"
                        id="subject"
                        class="box"
                        name="subject"
                    />
                    <textarea
                        class="box"
                        placeholder="your message"
                        id="message"
                        name="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <input type="submit" value="send message" class="btn" />
                </form>
            </section>
        </div>
    );
};

export default ContactUs;
