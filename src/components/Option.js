import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { setIsMenu } from "../redux/modules/menuSlice";

const Option = ({ dispatch, menuList }) => {
  const menuToggleClick = id => {
    dispatch(setIsMenu(id));
  };
  console.log(menuList);
  return (
    <Wrap>
      {menuList.map((i, idx) => (
        <OptionBox onClick={() => menuToggleClick(i.id)}>{i.title}</OptionBox>
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 39px;
  border-bottom: 1px solid black;
  padding: 11px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const OptionBox = styled.div`
  width: 17%;
  height: 27px;
  border-radius: 62px;
  background-color: #d9d9d9;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.1rem;
  }
`;

export default Option;
