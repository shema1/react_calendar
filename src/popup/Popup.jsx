import React, { Component } from "react";
import "./popup.scss";
import Form from "./form/Form";

class Popup extends Component {
  render() {
    const {
      isOpen,
      popupOff,
      onCreate,
      selectDay,
      handleChangeForm,
      deleteButton,
      handleDeleteEvent,
      handleUpdateEvent,
      update
    } = this.props;
    const popup = isOpen ? "popup popup-on" : "popup";
    return (
      <section className={popup}>
        <Form
          popupOff={popupOff}
          onCreate={onCreate}
          selectDay={selectDay}
          handleChangeForm={handleChangeForm}
          deleteButton={deleteButton}
          handleDeleteEvent={handleDeleteEvent}
          handleUpdateEvent={handleUpdateEvent}
          update={update}
        />
        {/* <span className="event__name "></span>
        <span className="event__description "></span> */}
      </section>
    );
  }
}

export default Popup;
