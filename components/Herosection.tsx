"use client"
import { Typewriter } from "./ui/Typewriting";
const ImageLink = "/assests/4058273.png";
import React, { useState } from "react";
import Image from 'next/image';


export function Hero() {

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    // console.log("clicked")
    setIsDownloading(true);
    // alert("Error while downloading file");
    // console.log("Error while downloading file");
    try {
      const response = await fetch('/api/download_file', { method: 'GET' });

      if (response.ok) {
        // Create a Blob from the response data and trigger the download
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Chandan_Achary_Resume.pdf'; // The file name for download
        link.click();
      } else {
        console.error('Error fetching file:', response.statusText);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setIsDownloading(false);
    }
  };


  return (
    <div className="w-screen h-screen z-10 flex flex-col lg:flex-row-reverse m-auto justify-center items-center gap-8 p-4">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <div className="rounded-full bg-amber-500 w-36 h-36 sm:w-64 sm:h-64 lg:w-[350px] lg:h-[350px] overflow-hidden mix-blend-lighten">
          <Image
            src={ImageLink}
            alt="Hero face"
            className="object-contain w-full h-full"
            width={350} // Specify the width
            height={350} // Specify the height
            priority // Use this for hero images to prioritize loading
          />

        </div>
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-[70%] lg:w-[37%] space-y-6 text-center lg:text-left">
        <div className="text-xl sm:text-2xl lg:text-3xl">
          <Typewriter
            strings={[
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
              " ",
            ]}
            loop={true}
          ></Typewriter>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Hello, I&apos;m<br></br> Chandan Achary</h1>
        <div className="download-cv"></div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base lg:text-lg">
          I am a Full Stack Developer with experience in building web applications. I have a passion for building beautiful and functional user interfaces.</p>

        <div className="flex items-center justify-center w-[450px] h-20 ">
          <div className="flex justify-center items-center w-3/5  h-full">
            <button onClick={() => handleDownload} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex gap-4 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {isDownloading ? 'Downloading...' : 'Download CV'} <img src="/skills/cloud-download.svg" style={{ filter: 'invert(1)' }} alt="arrow-down" className="w-6 h-6 cursor-pointer " />
              </span>
            </button>
          </div>
          <div>
            <div className="flex gap-6 items-center justify-center flex-grow h-full">
              <a href={process.env.NEXT_PUBLIC_INSTA_LINK} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/skills/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6 cursor-pointer hover:animate-bounce"
                />

              </a>
              <a href={process.env.NEXT_PUBLIC_TWITTER_LINK} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/skills/twitter.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6 cursor-pointer hover:animate-bounce"
                />

              </a>
              <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/skills/linkedin.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6 cursor-pointer hover:animate-bounce"
                />

              </a>
              <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/skills/github-square.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6 cursor-pointer hover:animate-bounce"
                />

              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

