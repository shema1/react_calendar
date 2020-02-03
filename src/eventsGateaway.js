export const baseUrl = 'https://crudcrud.com/api/a2d9d09969d1463da62e1251fcd969bb/events';

const mapTasks = (events) => events.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getEventsList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((events) => mapTasks(events));

export const createEvents = (eventData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(eventData),
});

export const updateEvents = (eventsId, updateEventsData) => fetch(`${baseUrl}/${eventsId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updateEventsData),
});

export const getEvents = (eventsData) => fetch(baseUrl, {
  method: 'GET',
});

export const deleteEvents = (eventId) => fetch(`${baseUrl}/${eventId}`, {
  method: 'DELETE',
});