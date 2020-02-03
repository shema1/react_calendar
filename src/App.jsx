import React, { Component } from "react";
import Header from "./header/Header";
import Table from "./calendar_table/Table";
import Popup from "./popup/Popup";
import moment from "moment";
import { createEvents } from "./eventsGateaway";

class App extends Component {
  state = {
    timeNow: moment(),
    firstMonday: moment().startOf("isoWeek"),
    isOpen: false,
    selectDay: '',
    events: [
      {
        text: "test",
        startDateEvent: "2020-02-03T09:15",
        endDateEvent: "2020-02-03T10:15",
        description: undefined
      },
      {
        text: "test2",
        startDateEvent: "2020-02-05T07:15",
        endDateEvent: "2020-02-05T08:15",
        description: undefined
      },
      {
        text: "test3",
        startDateEvent: "2020-02-04T06:15",
        endDateEvent: "2020-02-04T08:15",
        description: undefined
      }
    ]
  };

  nextWeak = () => {
    this.setState({
      firstMonday: this.state.timeNow.add(7, "days")
    });
  };

  prevWeak = () => {
    this.setState({
      firstMonday: this.state.timeNow.subtract(7, "days")
    });
  };

  handleToday = () => {
    this.setState({
      timeNow: moment()
    });
  };

  popup = (date, time) => {
    // const { text, startDateEvent, endDateEvent, description } = obj[0];
    this.setState({
      isOpen: true,
      selectDay: {
        startDateEvent: moment(date).format("YYYY-MM-DD"),
        startTime: time,
        endDateEvent: moment(date).format("YYYY-MM-DD"),
        endTime: time+1
      }
    });
    console.log(time)
  };
  popupOff = event => {
    event.preventDefault();
    this.setState({
      isOpen: false
    });
  };

  onCreateEvent = eventObj => {
    // createEvents(eventObj)
    const { events } = this.state;
    const updatedTasks = events.concat(eventObj);
    this.setState({
      events: updatedTasks
    });

    console.log(events);
  };

  render() {
    return (
      <>
        <Header
          popup={this.popup.timeNow}
          timeNow={this.state.timeNow}
          nextWeak={this.nextWeak}
          prevWeak={this.prevWeak}
          handleToday={this.handleToday}
        />
        <Table
          onPopup={this.popup}
          firstMonday={this.state.firstMonday}
          events={this.state.events}
        />
        <Popup
          isOpen={this.state.isOpen}
          popupOff={this.popupOff}
          onCreate={this.onCreateEvent}
          selectDay={this.state.selectDay}
        />
      </>
    );
  }
}

export default App;
