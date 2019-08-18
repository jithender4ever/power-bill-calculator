import React from 'react';
import FormInput from "./FormInput";

export function CommonMeter() {
    return (
        <div>
            <div className="ui card">
                <div className="content">
                    <div className="header">
                      Common Meter: 1234567
                    </div>
                    <div className="description">
                      This meter is used for water motor, outside lighting purposes etc.
                    </div>
                </div>
                <h4>Bill Calculator</h4>
                <FormInput unitType={"Common"} />
                <br/>
            </div>
        </div>
    )
}
