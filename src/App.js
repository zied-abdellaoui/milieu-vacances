import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";

import "./App.css";

function App() {
  const [startDate, onStartDateChange] = useState(new Date());
  const [EndDate, onEndDateChange] = useState(new Date());
  const [midDate, setMidDate] = useState(new Date());

  useEffect(() => {
    var middate = new Date((startDate.getTime() + EndDate.getTime()) / 2);
    setMidDate(new Date(middate));
    console.log(midDate);
  }, [startDate, EndDate]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <DateTimePicker onChange={onStartDateChange} value={startDate} />
        </div>
        <div>
          <DateTimePicker onChange={onEndDateChange} value={EndDate} />
        </div>
        <div>
          <h2> Mid Date</h2>
          <p>{midDate.toLocaleString()}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
