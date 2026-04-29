import React, { useState } from "react";

const WhatsappBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    decorType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsAppMessage = () => {
    const businessNumber = "917982474628"; // <-- YOUR WHATSAPP NUMBER HERE

    const message = `
*New Booking Request*
-----------------------
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📍 Pincode: ${formData.pincode}
🎉 Decoration Type: ${formData.decorType}
-----------------------
Please confirm the booking.
    `;

    const url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // Direct WhatsApp open
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Book Your Decoration</h2>

      <div className="space-y-4">
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 rounded-lg border"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="pincode"
          placeholder="Your Pincode"
          className="w-full p-3 rounded-lg border"
          onChange={handleChange}
          required
        />

        <select
          name="decorType"
          className="w-full p-3 rounded-lg border"
          onChange={handleChange}
          required
        >
          <option value="">Select Decoration Type</option>
          <option value="Birthday Decoration">Birthday Decoration</option>
          <option value="Anniversary Decoration">Anniversary Decoration</option>
          <option value="Baby Shower Decoration">Baby Shower</option>
          <option value="Room Decoration">Room Decoration</option>
        </select>

        <button
          onClick={sendWhatsAppMessage}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
        >
          ✔ Confirm Now
        </button>
      </div>
    </div>
  );
};

export default WhatsappBooking;

