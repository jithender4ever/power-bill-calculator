import React from 'react';

export function OneBRMeter() {
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
          <div className="extra content">
            <div className="ui button">
              <div className="ui basic green button">Compute Bill</div>
            </div>
          </div>
        </div>
        </div>
    )
}
