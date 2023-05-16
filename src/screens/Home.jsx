import React from "react";
import LandingPage from "./LandingPage";
import Brand from "./Brand";
import NewCollection from "./NewCollection";
import BestSeller from "./BestSeller";
import SalesEnd from "./SalesEnd";
import LatestNews from "./LatestNews";
import { BottomDetails } from "./BottomDetails";

const Home = () => {
  return (
    <div className="flex flex-col w-screen h-auto">
      <LandingPage />
      <Brand />
      <NewCollection />
      <BestSeller />
      <SalesEnd />
      <LatestNews />
      <BottomDetails />
    </div>
  );
};

export default Home;
