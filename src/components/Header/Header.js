import React,{useEffect, useState} from "react";
import "./header.css";

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const currentDate = currentDateTime.toDateString();
  const currentTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="header_">
      <h1>Todo List</h1>
      <h5 className="date">
        <div>{currentDate}</div>
        <div>{currentTime}</div>
      </h5>
    </div>
  );
};

export default Header;
