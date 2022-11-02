import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Option from "../components/Option";
import { loadCarDB } from "../redux/modules/carsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const menuList = useSelector(state => state.loadMenu.menuState);
  useEffect(() => {
    const getCarsList = async () => {
      await dispatch(loadCarDB());
    };
    getCarsList();
  }, []);
  return (
    <Wrap>
      <Option dispatch={dispatch} menuList={menuList} />
      {/* <Spinner /> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
