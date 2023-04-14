import { useEffect, useState } from "react";

//  NOTE : error {targetDate} => NAN ????
const UseCountdownA = (targetDate) => {
  // console.log(props, "props");
  console.log(targetDate, "#1");
  const countDownDate = new Date(targetDate).getTime();
  console.log(countDownDate, "#2");
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  console.log(countDown, "countdownstate");
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  console.log(countDown, "1 count");
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

export default UseCountdownA;
