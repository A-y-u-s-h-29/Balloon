import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    location: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // ⭐ W3 Web Form API Integration — replace YOUR_W3_API_KEY
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "613eda8b-f9ff-459f-8c0c-0d5846d5e14c", // ← ADD YOUR W3 FORM API KEY HERE
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          location: formData.location,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', mobile: '', location: '', message: '' });
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'OFFICE ADDRESS',
      content: (
        <>
          Flat no-1405 Tower-N Aditya World city, Ghazibad ,UP,201002
         </>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'OUR EMAIL',
      content: 'info@digitalexpressindia.com',
      link: 'info@digitalexpressindia.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'PHONE NUMBER',
      content: (
        <>
          9667277348 
        </>
      ),
      link: 'tel:+919811552041',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Office</h2>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 shadow transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white shadow-md`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-500 mb-2 tracking-wide">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-gray-900 font-medium hover:text-blue-600 transition">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium leading-relaxed">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ⭐ Google Map Iframe (Replace src with your map link) */}
            <div className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100 overflow-hidden">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.529939049746!2d77.4870689739194!3d28.643847083569682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x252cc9898c153415%3A0x326cdf271836326c!2sSoorveer%20Yuva%20Sangathan%20Trust!5e0!3m2!1sen!2sin!4v1764054838325!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Form</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <div className="space-y-6">

              {/* Inputs */}
              <inputField label="Name" name="name" value={formData} onChange={handleChange} required />
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300"
                required
              />

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300"
                required
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City or Location"
                className="w-full px-4 py-3 rounded-xl border border-gray-300"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 resize-none"
                required
              />

              {/* Status */}
              {status.message && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle /> : <AlertCircle />}
                  <p className="text-sm">{status.message}</p>
                </div>
              )}

              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactComponent;
