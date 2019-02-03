import React, { Component } from "react";

import Config from "Config";
import MQTT from "lib/MQTT";
import Tile from "components/Tile";
import { TiLightbulb } from "react-icons/ti";

export default class SwitchTile extends Component {
  constructor(props) {
    super(props);
    this.status_topic = Config.mqtt.smartthings + "/" + props.name + "/";
    this.status_topic_length = this.status_topic.length;
    this.set_topic = this.status_topic;

    this.onStateChange = this.onStateChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  render() {
    const state = this.state,
      props = this.props;

    if (!state) {
      return (
        <Tile width={1} height={1}>
          ...
        </Tile>
      );
    }
    if (state.switch === "off") {
      return (
        <Tile width={1} height={1}>
          <div style={{ textAlign: "center" }} onClick={this.onClick}>
            <TiLightbulb size={24} style={{ marginBottom: 10 }} />
            <div style={{ fontWeight: "normal" }}>{props.name}</div>
            <div style={{ fontSize: 30 }}>Off</div>
          </div>
        </Tile>
      );
    }
    return (
      <Tile width={1} height={1}>
        <div
          style={{ textAlign: "center", color: "yellow" }}
          onClick={this.onClick}
        >
          <TiLightbulb size={24} style={{ marginBottom: 10 }} />
          <div style={{ fontWeight: "normal" }}>{props.name}</div>
          <div style={{ fontSize: 30 }}>On</div>
        </div>
      </Tile>
    );
  }

  onStateChange(topic, newState) {
    const newVal = {};

    newVal[topic.substr(this.status_topic_length)] = newState;
    this.setState(newVal);
  }

  componentDidMount() {
    MQTT.subscribe(this.status_topic + "switch", this.onStateChange);
  }

  componentWillUnmount() {
    MQTT.unsubscribe(this.status_topic + "switch", this.onStateChange);
  }

  onClick(e) {
    e.stopPropagation();

    if (this.state.switch === "on") {
      this.setState({ switch: "off" });
      MQTT.publish(this.set_topic + "switch/set", "off");
    } else {
      this.setState({ switch: "on" });
      MQTT.publish(this.set_topic + "switch/set", "on");
    }
    console.log("click", this.state);
  }
}