import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import backIcon from "../assets/ICON_Back.png";

const Header = () => {
  const location = useLocation();
  const nagigate = useNavigate();
  return (
    <Wrap>
      {location.pathname === "/" ? (
        <p>전체차량</p>
      ) : (
        <>
          <img
            onClick={() => {
              nagigate(-1);
            }}
            src={backIcon}
          />
          <p>차량상세</p>
        </>
      )}
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
  position: relative;
  padding: 0px 10px;

  p {
    font-weight: 700;
  }
  img {
    position: absolute;
    left: 0;
    margin-left: 20px;
  }
`;

export default Header;
