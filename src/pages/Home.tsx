import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AutomobileList from "../components/AutomobileList";
import NoAutomobile from "../components/NoAutomoblie";
import Option from "../components/Option";
import Spinner from "../components/Spinner";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { loadCarDB, resetCarDB } from "../redux/modules/carsSlice";
import { setIsMenu, setIsSegment } from "../redux/modules/menuSlice";
import { CarDetailTypes } from "../types/carTypes";

const Home = () => {
  const dispatch = useAppDispatch();
  const navagate = useNavigate();
  const menuList = useAppSelector(state => state.loadMenu.menuState);
  const carList = useAppSelector(state => state.loadCar);
  const isSegment = useAppSelector(state => state.loadMenu.isSegment);
  useEffect(() => {
    dispatch(resetCarDB());
    const getCarsList = (isSegment: string) => {
      dispatch(loadCarDB(isSegment));
    };
    getCarsList(isSegment);
  }, [isSegment]);
  const menuToggleClick = (id: number, value: string) => {
    dispatch(setIsMenu(id));
    dispatch(setIsSegment(value));
  };
  const detailClick = (car: CarDetailTypes) => {
    navagate("/detail", {
      state: car,
    });
  };
  return (
    <Wrap>
      <Option menuList={menuList} menuToggleClick={menuToggleClick} />
      {carList.loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {carList.carsList.length === 0 ? (
            <NoAutomobile />
          ) : (
            <AutomobileList
              carsList={carList.carsList}
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
