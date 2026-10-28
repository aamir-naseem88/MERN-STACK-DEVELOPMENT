import {useState} from "react";
import DigitalClock from "./DigitalClock";


function DigitalClockDropdown() {
    const [tcolor, setTcolor] = useState("text-green-500");
    const [bcolor, setBcolor] = useState("text-green-200");
  return (
    <div>
      <h1>Digital Clock Project</h1>
      <div className="mt-4 mb-4">
        <label htmlFor="tcolor">Clock Text Color</label>
        <select id="tcolor" value={tcolor} onChange={(e)=>setTcolor(e.target.value)} className="border ml-5">
          <option value="text-green-900">Green</option>
          <option value="text-yellow-900">Yellow</option>
          <option value="text-red-900">Red</option>
          <option value="text-grey-900">Balck</option>
          <option value="text-blue-900">Blue</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="bcolor">Clock Background Color</label>
        <select id="bcolor" value={bcolor} onChange={(e)=>setBcolor(e.target.value)}>
            <option value="bg-green-200">Green</option>
            <option value="bg-yellow-200">Yellow</option>
            <option value="bg-orange-200">Orange</option>
            <option value="bg-grey-200">Grey</option>
            <option value="bg-purple-200">Purple</option>
            <option value="bg-blue-200">Blue</option>
            <option value="bg-red-200">Red</option>
        </select>
      </div>
      <DigitalClock tcolor={tcolor} bcolor={bcolor} />
    </div>
  );
}

export default DigitalClockDropdown;
