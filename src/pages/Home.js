import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AutomobileList from "../components/AutomobileList";
import NoAutomobile from "../components/NoAutomoblie";
import Option from "../components/Option";
import Spinner from "../components/Spinner";
import { loadCarDB, resetCarDB } from "../redux/modules/carsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [isSegment, setIsSegment] = useState("");
  const menuList = useSelector(state => state.loadMenu.menuState);
  const carList = useSelector(state => state.loadCar);
  useEffect(() => {
    dispatch(resetCarDB());
    const getCarsList = async isSegment => {
      await dispatch(loadCarDB(isSegment));
    };
    getCarsList(isSegment);
  }, [isSegment]);
  console.log(carList);
  return (
    <Wrap>
      <Option
        dispatch={dispatch}
        menuList={menuList}
        setIsSegment={setIsSegment}
      />
      {!carList.loading && (
        <>
          {carList.carsList.length === 0 ? (
            <NoAutomobile />
          ) : (
            <AutomobileList carList={carList} menuList={menuList} />
          )}
        </>
      )}
      {carList.loading && <Spinner />}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
