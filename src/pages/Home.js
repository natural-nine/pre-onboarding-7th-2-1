import React, { useEffect } from "react";
import instance from "../shared/axios";

const Home = () => {
  const getCars = () => {
    instance.get().then(res => console.log(res.data));
  };
  useEffect(() => {
    getCars();
  }, []);
  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default Home;
