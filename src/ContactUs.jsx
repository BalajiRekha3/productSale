import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted: ", formData);
        setSubmitted(true);
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "600px", width: "100%" }}>
                <h2 className="text-center mb-4">📩 Contact Us</h2>

                {submitted ? (
                    <p className="alert alert-success text-center">
                        ✅ Your message has been sent successfully!
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="form-control"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100">
                            ✉ Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactUs;
