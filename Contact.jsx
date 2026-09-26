import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return;
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="page">
      <div className="contact-layout">
        <div className="contact-info">
          <p className="small-title">GET IN TOUCH</p>

          <h1>Contact EduManage</h1>

          <p>
            Have a question about our tuition management
            application? Send us a message.
          </p>

          <div className="contact-item">
            📧 support@edumanage.com
          </div>

          <div className="contact-item">
            📞 +91 98765 43210
          </div>

          <div className="contact-item">
            📍 Tamil Nadu, India
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
          />

          <button className="primary-btn">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              Message submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;