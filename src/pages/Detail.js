import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AutomobileDetail from "../components/AutomobileDetail";

const Detail = () => {
  const location = useLocation();
  // console.log(location.state);
  return (
    <Wrap>
      <AutomobileDetail carDetail={location.state} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  /* height: 100%; */
  height: auto;
  /* overflow-y: scroll; */
`;

export default Detail;
