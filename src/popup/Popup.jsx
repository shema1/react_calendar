import React, { Component } from "react";
import "./popup.scss";
import Form from "./form/Form";

class Popup extends Component {
  render() {
    const { isOpen, popupOff, onCreate, selectDay } = this.props;
    const popup = isOpen ? "popup popup-on" : "popup";
    return (
      <section className={popup}>
        <Form popupOff={popupOff} onCreate={onCreate} selectDay={selectDay}/>
        {/* <span className="event__name "></span>
        <span className="event__description "></span> */}
      </section>
    );
  }
}

export default Popup;
