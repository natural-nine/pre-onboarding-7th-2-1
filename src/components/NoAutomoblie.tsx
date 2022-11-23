import React from "react";
import styled from "styled-components";

const NoAutomobile = () => {
  return (
    <Box>
      <p>차량이 없습니다.</p>
    </Box>
  );
};

export default NoAutomobile;

const Box = styled.div`
  width: 100%;
  margin-top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 30px;
    font-weight: 700;
    font-size: 2.1rem;
  }
`;
