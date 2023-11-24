import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        body: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, body } = formData;

        // Create a mailto link with form data
        const mailtoLink = `mailto:josip.kladaric+josipkcom@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(`Name: ${name}\n\nMessage: ${body}`)}`;

        // Open the default email client
        window.location.href = mailtoLink;
    };

    return (
        <footer>
            <h1 className="contactTitle">Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name.."
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject.."
                    value={formData.subject}
                    onChange={handleInputChange}
                />
                <label htmlFor="body">Message:</label>
                <textarea
                    id="body"
                    name="body"
                    placeholder="Write something.."
                    style={{ height: "200px" }}
                    value={formData.body}
                    onChange={handleInputChange}
                ></textarea>
                <input type="submit" value="Submit" />
            </form>
        </footer>
    );
}
