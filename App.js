import React, { useState } from 'react';
import './App.css';
import {CommonMeter} from "./components/CommonMeter";
import {TwoBRMeter} from "./components/TwoBRMeter";
import {OneBRMeter} from "./components/OneBRMeter";

import BillAmountContext from './components/BillAmountContext';

const style = {
    cardDisplay: {
        display: 'flex'
    }
};

function App() {

  const [commonBillAmount, setCommonBillAmount] = useState(0);

  return (
    <div className="App">
      <h2>Bill Dashboard</h2>
      <div style={ style.cardDisplay }>
          <BillAmountContext.Provider value={ { commonBillAmount, setBillAmount: (amount) => setCommonBillAmount(amount) } }>
              <CommonMeter />
              <TwoBRMeter />
              <TwoBRMeter tenant />
        {/*<OneBRMeter />*/}
          </BillAmountContext.Provider>
      </div>
    </div>
  );
}

export default App;
