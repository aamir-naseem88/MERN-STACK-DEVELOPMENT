import React, { useState } from "react";

function FormHandling() {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [hobbies, setHobbies] = useState([]);

  function getHobby(event) {
    if (event.target.checked) {
      setHobbies([...hobbies, event.target.value]);
    } else {
      setHobbies(hobbies.filter((item) => item !== event.target.value));
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Form Handling ReactJS</h1>
      <div className="text-center p-4 rounded-2xl bg-amber-100 mt-2 mb-5">
        <h1 className="text-3xl text-center mb-2">Form Area</h1>

        {/* name */}
        <input
          className="mb-2 border p-2 rounded"
          type="text"
          placeholder="Enter name"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <br /><br />

        {/* phone */}
        <input
          className="mb-2 border p-2 rounded"
          type="tel"
          placeholder="Enter phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <br /><br />

        {/* gender */}
        <input
          type="radio"
          id="Male"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="Male" className="mr-5">Male</label>

        <input
          type="radio"
          id="Female"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="Female">Female</label>
        <br /><br />

        {/* grade */}
        <label htmlFor="grade" className="mr-5">Grade</label>
        <select
          id="grade"
          value={grade}
          onChange={(event) => setGrade(event.target.value)}
          className="mb-2 border p-2 rounded"
        >
          <option value="">Select grade</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
        </select>
        <br /><br />

        {/* hobbies */}
        <h2>Hobbies</h2>
        <input
          type="checkbox"
          id="Reading"
          value="Reading"
          onChange={getHobby}
          checked={hobbies.includes("Reading")}
        />
        <label htmlFor="Reading">Reading</label>
        <br />
        <input
          type="checkbox"
          id="Cricket"
          value="Cricket"
          onChange={getHobby}
          checked={hobbies.includes("Cricket")}
        />
        <label htmlFor="Cricket">Cricket</label>
        <br /><br />

        {/* buttons */}
        <button className="bg-green-500 px-4 py-2 font-bold rounded hover:bg-green-600 text-white cursor-pointer">
          Submit
        </button>
        <button
          className="bg-orange-500 px-4 py-2 font-bold rounded hover:bg-orange-600 text-white cursor-pointer ml-2"
          onClick={() => {
            setUser("");
            setPhone("");
            setGender("");
            setGrade("");
            setHobbies([]);
          }}
        >
          Reset
        </button>
      </div>

      {/* Display form data */}
      <div>
        <h1>Form Data</h1>
        <h2>User Name: {user}</h2>
        <h2>User Phone: {phone}</h2>
        <h2>User Gender: {gender}</h2>
        <h2>User Grade: {grade}</h2>
        <h2>User Hobbies: {hobbies.join(", ")}</h2>
      </div>
    </div>
  );
}

export default FormHandling;
