export const baseUrl = 'https://crudcrud.com/api/79e65eadde354ae18db94d04ccdee356/events';

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

export const fetchEvents = () => {
  return fetch(baseUrl)
      .then(response => {
          if (response.ok) {
              return response.json();
          }
      })
      .then(tasksList => tasksList.map(({ _id, ...task }) => ({
          id: _id,
          ...task
      })));

}

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