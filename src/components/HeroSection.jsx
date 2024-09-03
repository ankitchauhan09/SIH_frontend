import React from 'react'
import home_bg_video from "../assets/home_bg_vid.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 overflow-hidden">
        {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={home_bg_video} 
        autoPlay 
        loop 
        muted 
        playsInline
      />
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>
       {/* Content */}
       <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-white">
          Jobly
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {' '}
            - A Job and Internship Platform
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
          Achieve your career goals with Jobly—where personalized mentorship and affordable guidance help you land your dream job. Whether you're a job seeker or a recruiter, Jobly is the platform that connects talent with opportunity. Start your journey today and make your career aspirations a reality!
        </p>
        <div className="flex justify-center my-10">
          <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 mx-3 px-4 rounded-md text-white">
            Get Job
          </a>
          <a href="#" className="border py-3 mx-3 px-4 rounded-md text-white">
            Hire
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
