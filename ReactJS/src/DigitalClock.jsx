import React, { useEffect, useState } from "react";

function DigitalClock({tcolor, bcolor}) {
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const intervalID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <div> 
      <div className={`w-fit mt-5 p-4 rounded ${bcolor}`}>
        <h2 className={`text-5xl font-bold ${tcolor}`}>
          {time.toLocaleTimeString()}
        </h2>
      </div>
    </div>
  );
}

export default DigitalClock;
