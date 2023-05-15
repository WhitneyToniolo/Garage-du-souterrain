import React from "react";
import "../Contact/contact.css"

function Contact() {
return (
    <div className="container__form">
        <h1 className="form__title">Nous contacter</h1>
            <form target="_blank" action="https://formsubmit.co/whitney.toniolo@gmail.com" method="POST">
                <div className="form-group__first">
                    <div className="form-row">
                        <div className="col">
                        <input type="text" name="name" className="form-control" placeholder="Nom" required />
                        </div>
                        <div className="col">
                        <input type="email" name="email" className="form-control" placeholder="Adresse Email" required />
                        </div>
                        </div>
                        </div>
                    <div className="form-group">
                <textarea placeholder="Une question ? " className="form-control" name="message" rows="10" required></textarea>
                </div>
                <div className="button__style">
                <button type="submit" className="button-89" role="button">Submit Form</button>
                </div>
            </form>
    </div>
);
}

export default Contact;