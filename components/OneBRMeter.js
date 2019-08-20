import React, {useContext} from 'react';
import BillAmountContext from './BillAmountContext';
import FormInput1BR from "./FormInput1BR";

export function OneBRMeter() {

    const billAmount = useContext(BillAmountContext);



    return (
        <div>
            <div className="ui card">
              <div className="content">
                  <div className="header">
                    Shared 1 BR Meter
                  </div>
                  <div className="meta">
                    9999999
                  </div>
                  <div className="description">
                    This meter use is shared by the tenants living in the 1 BR units.
                  </div>
              </div>
              <FormInput1BR />

            </div>
        </div>
    )
}
