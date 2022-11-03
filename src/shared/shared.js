export const dateChange = created_at => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date(created_at);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = week[new Date(`${year}-${month}-${day}`).getDay()];
  return ` ${month}월 ${day}일 (${dayOfWeek}) 부터`;
};

export const segmentChange = seg => {
  let segment = "";
  if (seg === "C") {
    segment = "소형";
  } else if (seg === "D") {
    segment = "중형";
  } else if (seg === "SUV") {
    segment = seg;
  }
  return segment;
};

export const fuelChange = fuel => {
  let fuelType = "";
  if (fuel === "gasoline") {
    fuelType = "가솔린";
  } else if (fuel === "ev") {
    fuelType = "전기";
  }
  return fuelType;
};
