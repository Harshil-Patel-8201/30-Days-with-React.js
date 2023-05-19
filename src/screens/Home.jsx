import React from "react";
import Logo from "../assets/logo.png";
import BG from "../assets/bg-green.png";
import JacketWomen from "../assets/jacketWomen.png";
import Women from "../assets/woman1.png";

const Home = () => {
  return (
    <div className="w-screen h-auto bg-colorWhite flex flex-col px-[100px]">
      {/* Header */}
      <div className="flex flex-row justify-between py-[30px] items-center">
        <img src={Logo} className="w-[130px]" alt="" />
        <div className="flex flex-row items-center gap-4">
          <p className="text-black text-sm font-medium tracking-wide">About</p>
          <p className="text-black text-sm font-medium tracking-wide">
            Programs
          </p>
          <p className="text-black text-sm font-medium tracking-wide">
            Servies
          </p>
          <p className="text-black text-sm font-medium tracking-wide">
            Support
          </p>
          <p className="text-white bg-colorBlack px-4 py-2 rounded-full text-sm font-medium tracking-wide">
            Join
          </p>
        </div>
      </div>

      {/* Title Text */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-col text-left my-20">
          <p className="text-colorBlack font-extrabold text-5xl">
            You are not alone.
          </p>
          <p className="text-colorBlack font-extrabold text-5xl">
            You have peers.
          </p>
          <p className="w-[340px] texr-lg text-colorText py-[30px]">
            Join thousands of people who have walked in your shoes and survived.
          </p>
          <div className="flex flex-row gap-[30px] items-center">
            <p className="text-white bg-colorBlack px-5 py-3 rounded-full text-lg font-medium">
              Join Peers
            </p>
            <div className="flex flex-row items-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                className="w-[60px] h-[60px] object-cover rounded-full border-2 border-white"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                className="w-[60px] h-[60px] object-cover rounded-full border-2 border-white -ml-5"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="w-[60px] h-[60px] object-cover rounded-full border-2 border-white -ml-5"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                className="w-[60px] h-[60px] object-cover rounded-full border-2 border-white -ml-5"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="w-[60px] h-[60px] object-cover rounded-full border-2 border-white -ml-5"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* image */}
        <div className="relative">
          <img src={BG} className="w-[500px] h-[300px] mt-[150px]" alt="" />
          <img
            src={JacketWomen}
            className="absolute -top-[143px] -right-10"
            alt=""
          />
          <p className="text-black text-sm -mt-12 mr-[250px]">
            Giovanni, Combat Medic
          </p>
        </div>
      </div>

      {/* Second image */}
      <div className="flex flex-row items-center justify-between">
        <div className="relative">
          <img src={Women} className="ml-[140px]" alt="" />
          <p className="absolute bottom-10 ml-8 text-black text-sm">
            Nakita, ER Nurse
          </p>
        </div>
        <div className="flex flex-col text-left mr-[100px] mt-[80px]">
          <p className="text-colorBlack text-3xl">Peer-to-peer support</p>
          <p className="text-colorBlack text-3xl">when you need it the most.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
