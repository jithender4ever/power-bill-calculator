import React, { useState, useContext } from 'react';
import BillAmountContext from "./BillAmountContext";

const unitConfig = {
    "common": "Amount per consumer",
    "2br": "Total amount to be paid"
};

export function FormInput2BR({ unitType = '' }) {

    const myContext = useContext(BillAmountContext);

    // TODO: What happens when the state is not set to a default value.
    const [bill, setBill] = useState(0);

    const deriveAmount = () => {
        if(isNaN(bill) || isNaN(myContext.commonBillAmount)) return 0;

        return bill + myContext.commonBillAmount;
    };

    function handleInputChange(e) {
        setBill(Number(e.target.value));
    }

    function handleOnBlur(e) {
        if (e.target.value === '') setBill(0);
    }

    function handleOnFocus(e) {
        const value = Number(e.target.value);
        if (value === 0) setBill('');
    }

    return (
        <div className="ui form">
            <div className="inline field">
                <label>Bill</label>
                <div className="ui right labeled input">
                    <input
                        type="number"
                        id="amount"
                        min={0}
                        step={0.01}
                        value={bill}
                        onChange={handleInputChange}
                        onBlur={handleOnBlur}
                        onFocus={handleOnFocus}
                    />
                    <div className="ui basic label">.00</div>
                </div>
            </div>
            <div className="inline field">
                <label>{ unitConfig[unitType.toLowerCase()] }</label>
                <div className="ui right labeled input">
                    <input
                        readOnly
                        value={deriveAmount()} />
                    <div className="ui basic label">.00</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FormInput2BR);
