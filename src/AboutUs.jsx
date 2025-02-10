import React from "react";

function AboutUs() {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "700px", backgroundColor: "#fff5f5" }}>
                <h1 className="text-center mb-4">🌟 About Us</h1>
                
                <p className="text-center">
                    Welcome to <strong>Our Store</strong>, your go-to place for fresh vegetables, quality dairy, and delicious non-veg items. 
                    We are dedicated to providing high-quality products at the best prices.
                </p>

                <h2 className="text-center mt-4">🚀 Our Mission</h2>
                <p className="text-center">
                    Our mission is to bring fresh, organic, and top-quality food products straight to your doorstep, 
                    making your shopping experience seamless and enjoyable.
                </p>

                <h2 className="text-center mt-4">💡 Why Choose Us?</h2>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">✅ Fresh & Organic Products</li>
                    <li className="list-group-item">✅ Affordable Pricing</li>
                    <li className="list-group-item">✅ Fast & Reliable Delivery</li>
                    <li className="list-group-item">✅ Customer Satisfaction Guaranteed</li>
                </ul>

                <h2 className="text-center mt-4">👨‍👩‍👧‍👦 Meet Our Team</h2>
                <p className="text-center">
                    We are a passionate team of food lovers who believe in quality, trust, and excellent service. 
                    Our goal is to make your grocery shopping easy and convenient.
                </p>

                <h2 className="text-center mt-4">📞 Get in Touch</h2>
                <p className="text-center">
                    Have questions? Feel free to <a href="/ContactUs" className="text-primary">Contact Us</a> anytime!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
