import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center mt-10">
    <h1 className="text-3xl font-bold mb-5">Welcome to Rick & Morty App</h1>
    <Link to="/characters" className="text-blue-500 underline">
      View All Characters
    </Link>
  </div>
);

export default Home;
