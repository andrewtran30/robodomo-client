/**
 * Screen to control Nest products (thermostat, nest protect)
 */
import React, { useState } from "react";
import Config from "Config";

import { Tab, Tabs } from "react-bootstrap";
import ThermostatTab from "tabs/ThermostatTab";
import ProtectTab from "tabs/ProtectTab";

const Nest = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("thermostatTabState") || "0"
  );

  return (
    <Tabs
      id="thermostat-tabs"
      onSelect={eventKey => {
        localStorage.setItem("thermostatTabState", eventKey);
        setActiveTab(eventKey);
      }}
      activeKey={activeTab}
      variant="pills"
      mountOnEnter
      unmountOnExit
    >
      {Config.nest.thermostats.map(thermostat => {
        return (
          <Tab
            title={thermostat.name}
            eventKey={thermostat.name}
            key={thermostat.name}
          >
            <ThermostatTab thermostat={thermostat} />
          </Tab>
        );
      })}
      {Config.nest.protects.map(protect => {
        return (
          <Tab title={protect.name} eventKey={protect.name} key={protect.name}>
            <ProtectTab sensor={protect} />
          </Tab>
        );
      })}
    </Tabs>
  );
};
export default Nest;