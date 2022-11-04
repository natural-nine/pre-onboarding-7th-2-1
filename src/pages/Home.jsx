import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AutomobileList from "../components/AutomobileList";
import NoAutomobile from "../components/NoAutomoblie";
import Option from "../components/Option";
import Spinner from "../components/Spinner";
import { loadCarDB, resetCarDB } from "../redux/modules/carsSlice";
import { setIsMenu, setIsSegment } from "../redux/modules/menuSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navagate = useNavigate();
  const menuList = useSelector(state => state.loadMenu.menuState);
  const carList = useSelector(state => state.loadCar);
  const isSegment = useSelector(state => state.loadMenu.isSegment);
  useEffect(() => {
    dispatch(resetCarDB());
    const getCarsList = isSegment => {
      dispatch(loadCarDB(isSegment));
    };
    getCarsList(isSegment);
  }, [isSegment]);
  console.log(isSegment);
  const menuToggleClick = (id, value) => {
    dispatch(setIsMenu(id));
    dispatch(setIsSegment(value));
  };
  const detailClick = car => {
    navagate("/detail", {
      state: car,
    });
  };
  return (
    <Wrap>
      <Option
        dispatch={dispatch}
        menuList={menuList}
        menuToggleClick={menuToggleClick}
      />
      {carList.loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {carList.carsList.length === 0 ? (
            <NoAutomobile />
          ) : (
            <AutomobileList
              carList={carList}
              menuList={menuList}
              detailClick={detailClick}
            />
          )}
        </React.Fragment>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export default Home;
