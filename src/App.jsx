import React, { Component } from "react";
import Header from "./header/Header";
import Table from "./calendar_table/Table";
import Popup from "./popup/Popup";
import moment from "moment";
import {
  createEvents,
  deleteEvents,
  getEventsList,
  updateEvents
} from "./eventsGateaway";
import { check } from "./utilites";
import { validator } from "./validator";

class App extends Component {
  state = {
    firstMonday: moment().startOf("isoWeek"),
    isOpen: false,
    delete: false,
    update: false,
    selectDay: {},
    events: []
  };

  componentDidMount() {
    getEventsList().then(events => {
      this.setState({
        events: events
      });
    });
  }

  nextWeak = () => {
    this.setState({
      firstMonday:  moment(this.state.firstMonday).add(7, "days")
    });
  };

  prevWeak = () => {
    this.setState({
      firstMonday:  moment(this.state.firstMonday).subtract(7, "days")
    });
  };

  handleToday = () => {
    this.setState({
      firstMonday: moment().startOf("isoWeek")
    });
  };

  popup = (date, time) => {
    if (event.target.className == "table-sections__section") {
      this.setState({
        delete: false,
        isOpen: true,
        update: false,
        selectDay: {
          nameEvent: "",
          startDate: moment(date).format("YYYY-MM-DD"),
          startTime: `${check(time) + ":00"}`,
          endDate: moment(date).format("YYYY-MM-DD"),
          endTime: `${check(time + 1) + ":00"}`,
          description: ""
        }
      });
    }
  };

  popupForUpdate = id => {
    const curentEvent = this.state.events.find(elem => elem.id == id);
    this.setState({
      isOpen: true,
      delete: true,
      update: true,
      selectDay: { ...curentEvent, id }
    });
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
      startDate: moment(startDate).format("YYYY-MM-DD"),
      startTime,
      endDate: moment(endDate).format("YYYY-MM-DD"),
      endTime: endTime,
      description: description
    };
    if (validator(newEvent)) {
      createEvents({ ...newEvent }).then(() =>
        getEventsList().then(events => {
          this.setState({
            events: events,
            selectDay: "",
            isOpen: false
          });
        })
      );
    }
    event.preventDefault();
  };

  updateEventTest = () => {
    const curentEvent = this.state.selectDay;
    updateEvents(curentEvent.id, curentEvent).then(() =>
      getEventsList().then(events => {
        this.setState({
          events: events,
          selectDay: "",
          isOpen: false
        });
      })
    );
  };

  handleDeleteEvent = (event, id) => {
    event.preventDefault();
    deleteEvents(id)
      .then(() => getEventsList())
      .then(events => {
        this.setState({
          events: events
        });
      });
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <>
        <Header
          popup={this.popup}
          firstMonday={this.state.firstMonday}
          nextWeak={this.nextWeak}
          prevWeak={this.prevWeak}
          handleToday={this.handleToday}
        />
        <Table
          onPopup={this.popup}
          popupForUpdate={this.popupForUpdate}
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
          handleDeleteEvent={this.handleDeleteEvent}
          handleUpdateEvent={this.updateEventTest}
          update={this.state.update}
        />
      </>
    );
  }
}

export default App;
