import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";
import profile from "./assets/profile-image.jpg";

function LightDarkTheme() {

    const [dark, setDark] = (bg-black);
  return (
    <>
      
      {/* card main container */}
<div className="w-[280px] flex flex-col justify-center p-4 rounded-2xl bg-green-900 rounded-2xl shadow-md border border-transparent transition-all duration-300 hover:border-white hover:shadow-xl">
    
    {/* card image */}
    <div><img src={profile} className="w-auto h-auto rounded-full" alt="" /></div>
    
    {/* card content and blur effect*/}
    <div className="mt-9 p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl">
        <h3 className="text-2xl font-bold text-green-500">Software Engineer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, facilis?</p>
        <button className="font-medium text-white bg-green-500 px-4 py-2 rounded-full mt-4 cursor-pointer hover:bg-green-600">View Profile</button>
    </div>
</div>
    </>
  );
}

export default LightDarkTheme;