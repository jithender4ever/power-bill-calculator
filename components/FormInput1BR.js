import React, { useState, useContext } from 'react';
import BillAmountContext from "./BillAmountContext";

const unitConfig = {
    "common": "Amount per consumer",
    "2br": "Total amount to be paid"
};

export function FormInput1BR() {

    const billContext = useContext(BillAmountContext);

    // TODO: What happens when the state is not set to a default value.
    const [mainUnits, setMainUnits] = useState(0);
    const [subUnits, setSubUnits] = useState(0);
    const [charges, setCharges] = useState(0);

    const unitPrices = new Map();

    unitPrices.set(100, 4);
    unitPrices.set(200, 6);
    unitPrices.set(300, 8);
    unitPrices.set(400, 10);
    unitPrices.set(Infinity, 100);


    function findPriceForUnit(units) {
      const pricePerUnit =  unitPrices.get(Array.from(unitPrices.keys()).find(k => k >= units));
      return units * pricePerUnit;
    }

    function getTotalBill(meterType) {
        const units = meterType.toLowerCase() === 'main' ? (mainUnits-subUnits) : subUnits ;

        if (units === 0) return 0;

        const totalBill =  findPriceForUnit(units);

        return (totalBill + billContext.commonBillAmount + (charges/2));
    }

    // Main Meter Units
    function handleMainUnitsChange(e) {
        setMainUnits(Number(e.target.value));
    }

    function handleOnBlurMainUnits(e) {
        if (e.target.value === '') setMainUnits(0);
    }

    function handleOnFocusMainUnits(e) {
        const value = Number(e.target.value);
        if (value === 0) setMainUnits('');
    }

    // Sub Meter Units
    function handleOnBlurSubUnits(e) {
        if (e.target.value === '') setSubUnits(0);
    }

    function handleOnFocusSubUnits(e) {
        const value = Number(e.target.value);
        if (value === 0) setSubUnits('');
    }

    function handleSubUnitsChange(e) {
        setSubUnits(Number(e.target.value));
    }

    // Misc. Charges
    function handleChargesChange(e) {
        setCharges(Number(e.target.value));
    }

    function handleOnFocusCharges(e) {
        const value = Number(e.target.value);
        if (value === 0) setCharges('');
    }

    function handleOnBlurCharges(e) {
        if (e.target.value === '') setCharges(0);
    }

    return (
        <div className="ui form">
            <div className="inline field">
                <label>Main Meter Units</label>
                <input
                    type="number"
                    id="mainUnits"
                    min={0}
                    step={1}
                    value={mainUnits}
                    onChange={handleMainUnitsChange}
                    onBlur={handleOnBlurMainUnits}
                    onFocus={handleOnFocusMainUnits}
                />
            </div>
            <div className="inline field">
                <label>Sub-Meter Units</label>
                <input
                    type="number"
                    id="subUnits"
                    min={0}
                    step={1}
                    value={subUnits}
                    onChange={handleSubUnitsChange}
                    onBlur={handleOnBlurSubUnits}
                    onFocus={handleOnFocusSubUnits}
                />
            </div>
            <div className="inline field">
                <label>Misc. Charges</label>
                <div className="ui right labeled input">
                    <input
                        type="number"
                        id="charges"
                        min={0}
                        step={1}
                        value={charges}
                        onChange={handleChargesChange}
                        onBlur={handleOnBlurCharges}
                        onFocus={handleOnFocusCharges}
                    />
                    <div className="ui basic label">.00</div>
                </div>
            </div>
            <div className="inline field">
                <label>Main Meter Consumer Total Bill</label>
                <div className="ui right labeled input">
                    <input
                        readOnly
                        value={getTotalBill('main')} />
                    <div className="ui basic label">.00</div>
                </div>
            </div>
            <div className="inline field">
                <label>Sub-Meter Consumer Total Bill</label>
                <div className="ui right labeled input">
                    <input
                        readOnly
                        value={getTotalBill('sub')} />
                    <div className="ui basic label">.00</div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default React.memo(FormInput1BR);
