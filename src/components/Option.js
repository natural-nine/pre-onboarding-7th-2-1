import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { setIsMenu } from "../redux/modules/menuSlice";

const Option = ({ dispatch, menuList, setIsSegment }) => {
  const menuToggleClick = (id, value) => {
    dispatch(setIsMenu(id));
    setIsSegment(value);
  };
  return (
    <Wrap>
      {menuList.map((i, idx) => (
        <OptionBox
          key={i.id}
          props={i.isMenu}
          onClick={() => menuToggleClick(i.id, i.value)}
        >
          <p> {i.title}</p>
        </OptionBox>
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
  /* text-decoration: ${props => props.props && "line-through"}; */
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
    color: ${props => props.props && "white"};
  }
  background-color: ${props => props.props && "black"};
  cursor: pointer;
`;

export default Option;
