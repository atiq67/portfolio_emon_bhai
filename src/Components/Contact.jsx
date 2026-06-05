// import { EmailJSResponseStatus } from "@emailjs/browser";
import { Mail, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please Fill The Form");
      return;
    }

    const data = new FormData(event.target);

    data.append("access_key", "0a76e62c-59bb-4d72-95e6-d2f20d7dd0f7");

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Your Email Was Sent Successfully!");
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="mt-10 md:mt-16">
      <div className="h-full py-10 text-white px-7 md:px-20  font-bold">
        <h2 className="text-sky-600 text-center text-2xl pb-4 uppercase ">
          Contact
        </h2>
        <hr className=" md:pb-10 md:mx-20 border-black" />

        <form
          onSubmit={handleSubmit}
          className="font-normal mt-16 space-y-5 text-black"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-blue-500" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 p-3 border-[1px] border-blue-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-blue-500" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 p-3 border-[1px] border-blue-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-blue-500" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full pl-10 p-3 border-[1px] border-blue-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full
              hover:scale-105
        relative px-5 py-2 
        uppercase
        text-white font-normal hover:font-bold text-lg 
        rounded-xl 
        bg-sky-400
        shadow-lg
        hover:bg-sky-600
        transition 
        duration-300
        ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
