import React, { useState } from "react";

function Form() {
  const [subs, setSubs] = useState([""]);

  function handleClick() {
    const newSub = [...subs, ""];
    setSubs(newSub);
  }

  return (
    <div className="flex justify-center pt-20 grid">
      <div className="flex justify-between border grid-cols-1 p-2">
        <div className="">
          <input
            type="text"
            id="sub"
            placeholder="Enter Subject"
            className="border rounded-sm"
          />
        </div>
        <div>
          <select name="grade" id="grad3e">
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
      <div id="cgpa">
        <h1>cgpa</h1>
      </div>
    </div>
  );
}

export default Form;
