import React from "react";
import { stockData } from "./data";

const App = () => {
  return (
    <div>
      {stockData?.map((item) => {
        return (
          <>
            <div key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.image} alt={item.name} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
