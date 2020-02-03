import React, { Component } from "react";
import Header from "./header/Header";
import Table from "./calendar_table/Table";
import Popup from "./popup/Popup";
import moment from "moment";
import { createEvents, getEvents, fetchEvents, deleteEvents } from "./eventsGateaway";
import { check } from "./utilites";
import { validator } from "./validator";

class App extends Component {
  state = {
    timeNow: moment(),
    firstMonday: moment().startOf("isoWeek"),
    isOpen: false,
    delete: false,
    selectDay: {},
    events: []
  };
  // componentDidMount() {
  //   getEvents().then(events => {
  //     this.state({
  //       events: events
  //     });
  //   });
  // }

  componentDidMount() {
    fetchEvents().then(events => {
      this.setState({
        events: events
      });
    });
  }
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

  popup = (date, time, id) => {
    if (event.target.className == "table-sections__section"  ) {
      this.setState({
        delete: false,
        isOpen: true,
        selectDay: {
          nameEvent: "",
          startDate: moment(date).format("YYYY-MM-DD"),
          startTime: `${check(time) + ":00"}`,
          endDate: moment(date).format("YYYY-MM-DD"),
          endTime: `${check(time + 1) + ":00"}`,
          description: ""
        }
      });
      // console.log(this.state.events)
      // console.log(moment("2020-02-04T04:00").format("YYYY-MM-DD"))
      console.log("work");
    }
  };

  popupOff = event => {
    event.preventDefault();
    this.setState({
      isOpen: false
    });
  };

  handleChangeForm = event => {
    const { name, value } = event.target;
    this.setState(({ selectDay }) => ({
      selectDay: {
        ...selectDay,
        [name]: value
      }
    }));
  };

  onCreateEvent = event => {
    const { events } = this.state;
    const {
      nameEvent,
      startDate,
      startTime,
      endDate,
      endTime,
      description
    } = this.state.selectDay;
    const newEvent = {
      nameEvent: nameEvent,
      startDateEvent: moment(startDate).format("YYYY-MM-DD") + "T" + startTime,
      endDateEvent: moment(endDate).format("YYYY-MM-DD") + "T" + endTime,
      description: description
    };
    if(validator(newEvent)){
    createEvents({...newEvent}).then(() =>
    getEvents().then(events => {
      this.setState({
        events: events,
        selectDay: ""
      });
    })
    );
  }
    event.preventDefault();
    // console.log(events);
  };

  updateEvent = (event, id) => {
    const eventR = this.state.events.find(elem => elem.id == id);
    // const test = his.state.events.indexOf(eventR)
    this.setState({
      isOpen: true,
      delete: true,
      selectDay: {...eventR,id}
    });
    console.log("update")
  };

  handleDeleteEvent=(id,event)=>{
    event.preventDefault()
    // deleteEvents(id)
    console.log(id+" work")
  }

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
          updateEvent={this.updateEvent}
          firstMonday={this.state.firstMonday}
          events={this.state.events}
        />
        <Popup
          isOpen={this.state.isOpen}
          popupOff={this.popupOff}
          onCreate={this.onCreateEvent}
          selectDay={this.state.selectDay}
          handleChangeForm={this.handleChangeForm}
          deleteButton={this.state.delete}
          handleDeleteEvent={this.state.handleDeleteEvent}
        />
      </>
    );
  }
}

export default App;
