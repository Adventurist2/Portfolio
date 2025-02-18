"use client";
import React, { useEffect } from "react";
import { TailwindCssButtons } from "./ui/tailwind-cssbuttons";
import { sendMail } from "@/lib/actions/serve";
import { useContext } from "react";
import {Refcontext} from "@/app/provider";

export function Footer() {
  const [isclient, setisclient] = React.useState(false);
  const [credentials, setCredentials] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const context = useContext(Refcontext);
  if(!context){
    throw new Error("use context outside of provider");
  }
  const {ContactRef} = context;

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault(); // prevent default button behavior
    sendMail(credentials).then((res) => {
      console.log(res);
    });
    setCredentials({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEffect(() => {
    setisclient(true);
  }, []);

  if (!isclient) {
    return null;
  }

  return (
    <div ref = {ContactRef} className="z-20 h-screen w-screen bg-gradient-to-r from-black via-[#602b05] to-[#05014f] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-screen  text-white space-y-8 lg:space-y-0 lg:space-x-36 mx-20">
        {/* Left Section - Form */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6">
            Interested in talking,
            <br />
            let&apos;s do it.
          </h1>
          <form className="space-y-4" aria-labelledby="contact-form">
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={credentials.name}
                placeholder="Full name"
                aria-label="Full name"
                className="w-1/2 px-4 py-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Email"
                aria-label="Email"
                className="w-1/2 px-4 py-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
                />

            </div>
            <input
              type="text"
              name="subject"
              value={credentials.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              aria-label="Subject"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
              />

            <textarea
              placeholder="Enter your message"
              name="message"
              value={credentials.message}
              aria-label="Message"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white resize-none"
              rows={4}
              onChange={handleChange} // Ensure you capture the change events
              />

            <TailwindCssButtons onClick={handleSubmit}>Send</TailwindCssButtons>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Get in touch</h2>
            <a href="mailto:acharychandan2005@gmail.com" className="text-2xl font-bold hover:underline">
              acharychandan2005@gmail.com
            </a>
            {/* <a href="tel:+919528391901" className="mt-2 block hover:underline">
              +91-9528391901 (not true)
            </a> */}
            <p>IIT Kanpur , India</p>
          </div>
          <div className="flex gap-4 mt-8 lg:mt-0">
            <a href={process.env.NEXT_PUBLIC_INSTA_LINK} className="transition-opacity duration-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} className="transition-opacity duration-500 hover:underline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={process.env.NEXT_PUBLIC_TWITTER_LINK} className="transition-opacity duration-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} className="transition-opacity duration-500 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}