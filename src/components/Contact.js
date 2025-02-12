import { motion } from "framer-motion";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  };

  const verticalLeft = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formDataToSubmit = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataToSubmit).toString(),
    })
      .then(() => {
        toast.success("Thanks for your message! I'll get back to you soon.", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.error("Submission failed. Please try again.", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error(error);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <motion.div
            className="heading"
            initial={{ opacity: 0 }}
            whileInView={fade}
            viewport={{ once: true }}
          >
            <p className="heading-sub-text">Hire Me</p>
            <p className="heading-text">Get in Touch</p>
          </motion.div>
          <div className="contact-box">
            <motion.div
              className="left-box"
              initial={{ opacity: 0, y: "-50px" }}
              whileInView={verticalLeft}
            >
              <div className="contact-heading">
                <p>
                  I’m interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  requests or questions, don’t hesitate to use the form.
                </p>
              </div>
              <div className="contact-hello">
                <p>Say Hello</p>
                <a
                  className="hello-links"
                  href="https://www.linkedin.com/in/amany-al-rouby-617b0b236"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={20} style={{ marginRight: "8px" }} />
                  LinkedIn
                </a>
                <a
                  className="hello-links"
                  href="https://wa.me/message/A75VKRGOIAQOM1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
                  WhatsApp
                </a>
                <a
                  className="hello-links"
                  href="mailto:amanyroby117@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope size={20} style={{ marginRight: "8px" }} />
                  amanyroby117@gmail.com
                </a>
              </div>
            </motion.div>
            <motion.div
              className="right-box"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={verticalLeft}
            >
              <form
                name="contact-form"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="hidden" name="bot-field" />

                <div className="form-top">
                  <div className="name">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="email">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-mid">
                  <div className="message">
                    <label htmlFor="message">Your message</label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="hero-contact"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
