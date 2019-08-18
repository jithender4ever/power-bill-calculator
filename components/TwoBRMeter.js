import React from 'react';
import {FormInput2BR} from "./FormInput2BR";

export function TwoBRMeter({ tenant = false }) {
    return (
        <div>
        <div className="ui card">
          <div className="content">
              <div className="header">
                  { tenant ? `2 BR Meter` : `Owner\'s Meter` }
              </div>
              <div className="meta">
                00000000
              </div>
              <div className="description">
                  { tenant ? `This meter is privately used by the tenants living in the 2 BR unit.` : `This is owner's meter` }
              </div>
          </div>
            <FormInput2BR unitType={"2BR"}/>
            <br />
        </div>
        </div>
    )
}
