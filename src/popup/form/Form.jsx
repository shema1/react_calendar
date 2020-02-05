import React, { Component } from "react";
import moment from "moment";
import { timeOptions } from "./timeOptions";

class Form extends Component {
  render() {
    const {
      nameEvent,
      endDate,
      endTime,
      startDate,
      startTime,
      description,
      id,
      endDateEvent,
      startDateEvent
    } = this.props.selectDay;
    const { update, handleUpdateEvent } = this.props;
    const buttonDel = this.props.deleteButton
      ? "delete-ivent delete-ivent__on"
      : "delete-ivent";

    const buttonUpdate = update ? (
      <button className="submit-button" onClick={handleUpdateEvent}>
        Update
      </button>
    ) : (
      <button className="submit-button ">Save</button>
    );

    return (
      <form className="popup__form" onSubmit={() => this.props.onCreate(event)}>
        <button
          className="close material-icons"
          onClick={() => this.props.popupOff(event)}
        >
          close
        </button>
        <input
          className="input__name"
          type="text"
          name="nameEvent"
          placeholder="Input name event"
          value={nameEvent}
          onChange={() => this.props.handleChangeForm(event)}
        />
        <div className="date-block ">
          <i className="Tiny material-icons">access_time</i>
          <input
            className="start-date input-style"
            type="date"
            name="startDate"
            value={
              startDateEvent
                ? moment(startDateEvent).format("YYYY-MM-DD")
                : startDate
            }
            onChange={() => this.props.handleChangeForm(event)}
          />
          <select
            className="start-time time-list input-style "
            name="startTime"
            value={
              startDateEvent
                ? moment(startDateEvent).format("HH:mm")
                : startTime
            }
            onChange={() => this.props.handleChangeForm(event)}
          >
            {timeOptions()}
          </select>
          <span>-</span>
          <select
            className="end-time time-list input-style "
            name="endTime"
            value={
              endDateEvent ? moment(endDateEvent).format("HH:mm") : endTime
            }
            onChange={() => this.props.handleChangeForm(event)}
          >
            {timeOptions()}
          </select>
          <input
            className="end-date input-style "
            type="date"
            id="start "
            name="endDate"
            max="2020-12-31 "
            value={
              endDateEvent ? moment(endDateEvent).format("YYYY-MM-DD") : endDate
            }
            onChange={() => this.props.handleChangeForm(event)}
          />
        </div>
        <div className="description ">
          <i className="Tiny material-icons ">format_align_left</i>
          <textarea
            className="description-input "
            name="description"
            cols="42 "
            rows="4 "
            placeholder="Добавте опис "
            value={description}
            onChange={() => this.props.handleChangeForm(event)}
          ></textarea>
        </div>
        <div className="control ">
          <button
            className={buttonDel}
            onClick={() => this.props.handleDeleteEvent(event, id)}
          >
            <i className="Tiny material-icons ">delete</i>
          </button>
          {buttonUpdate}
        </div>
      </form>
    );
  }
}

export default Form;
