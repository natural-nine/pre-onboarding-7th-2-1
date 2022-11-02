import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();
  return (
    <Wrap>
      {location.pathname === "/" ? <p>전체차량</p> : <p>상세차량</p>}
      {/* <p>전체차량</p> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  p {
    font-weight: 700;
  }
`;

export default Header;
