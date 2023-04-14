import React from "react";
import UseCountdownA from "../UseCountdownA/UseCountdownA";
import DateTimeDisplay from "../DateTimeDisplay/DateTimeDisplay";
import { Typography } from "@mui/material";

const ExpiredNotice = () => {
  return (
    <Typography fontSize={30} color="red">
      <span>Expired!!</span>
    </Typography>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  console.log(days);
  return (
    <Typography display="flex">
      <DateTimeDisplay value={days} type={"Days"} />
      {/* <p>:</p> */}
      <DateTimeDisplay value={hours} type={"Hours"} />
      {/* <p>:</p> */}
      <DateTimeDisplay value={minutes} type={"Minutes"} />
      {/* <p>:</p> */}
      <DateTimeDisplay value={seconds} type={"Seconds"} />
    </Typography>
  );
};
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = UseCountdownA(targetDate);
  // console.log(targetDate, "target");
  // console.log("days", days);
  console.log("countdown fun output", UseCountdownA(targetDate));
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
