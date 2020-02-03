import React, { Component } from "react";
import moment from "moment";
import {timeOptions} from "./timeOptions"

class Form extends Component {
  state = {
    eventName: "",
    startDate: this.props.selectDay.startDateEvent,
    startTime: moment().format('hh:mm'),
    endDate: "",
    endTime: ""
  };



  // const {
  //   endDateEvent,
  //   endTime,
  //   startDateEvent,
  //   startTime
  // } = this.props.selectDay;

  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTaskCreate = event => {
    console.log("work")
    const newEvent = {
      text: this.state.eventName,
      startDateEvent: this.state.startDate + "T" + this.state.startTime,
      endDateEvent: this.state.endDate + "T" + this.state.endTime,
      description: this.state.description
    };
    this.props.onCreate(newEvent);
    this.setState({
      eventName: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: ""
    });
    event.preventDefault();
  };
  render() {
    // console.log('test '+ this.props.selectDay.startDateEvent)
    return (
      <form className="popup__form"  onSubmit={() => this.handleTaskCreate(event)}>
        <button
          className="close material-icons"
          onClick={() => this.props.popupOff(event)}
        >
          close
        </button>
        <input
          className="input__name"
          type="text"
          name="eventName"
          placeholder="Input name event"
          value={this.state.eventName}
          onChange={this.handleChange}
        />
        <div className="date-block ">
          <i className="Tiny material-icons">access_time</i>
          <input
            className="start-date input-style"
            type="date"
            name="startDate"
            value={this.state.date}
            onChange={this.handleChange}
          />
          {/* <input
            className="start-time time-list input-style "
            type="time"
            name="startTime"
            min="00:00"
            max="23:45"
            value={this.state.startTime}
            onChange={this.handleChange}
            required
          ></input> */}
           {/* <input
            className="end-time time-list input-style "
            type="time"
            name="endTime"
            min="00:00"
            max="23:45"
            value={this.state.endTime}
            onChange={this.handleChange}
            required
          ></input> */}
          <select
            className="start-time time-list input-style "
            name="startTime"
          >
            {timeOptions()}
          </select>
          <span>-</span>
          <select
            className="end-time time-list input-style "
            name="endTime"
          >
            {timeOptions()}
          </select>
          <input
            className="end-date input-style "
            type="date"
            id="start "
            name="endDate"
            max="2020-12-31 "
            value={this.state.endDate}
            onChange={this.handleChange}
          />
        </div>
        {/* <div className="input__color">
          <span>choose a color</span>
          <select className="select__color" name="color">
            <option value="#039be5" className="standart" selected>
              standart
            </option>
            <option value="red" className="red">
              red
            </option>
            <option value="green" className="green">
              green
            </option>
            <option value="blue" className="blue">
              blue
            </option>
          </select>
        </div> */}
        <div className="description ">
          <i className="Tiny material-icons ">format_align_left</i>
          <textarea
            className="description-input "
            name="description"
            cols="42 "
            rows="4 "
            placeholder="Добавте опис "
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="control ">
          <button className="delete-ivent ">
            <i className="Tiny material-icons ">delete</i>
          </button>
          <button
            className="submit-button "
          >
            Зберегти
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
