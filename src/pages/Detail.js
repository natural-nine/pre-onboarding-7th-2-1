import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AutomobileDetail from "../components/AutomobileDetail";

const Detail = () => {
  const location = useLocation();
  return (
    <Wrap>
      <AutomobileDetail carDetail={location.state} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: auto;
`;

export default Detail;
