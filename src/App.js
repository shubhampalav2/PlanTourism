import React, { useState } from "react";
import data from "./data.js";
import Tours from "./Component/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <>
      {tours.length === 0 ? (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btnWhite" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      ) : (
        <div className="app">
          <Tours tours={tours} removeTours={removeTour} />
        </div>
      )}
    </>
  );
};

export default App;
