import React from 'react'
import { useSelector } from 'react-redux'


const EventsList = () => {
  const { events } = useSelector((item) => item.eventsReducer)
  console.log(events, "events");
  return (
    <div>

      {events.length != 0 && <table className="table-auto">
        <thead>
          <tr>
            {Object.keys(events[0]).map((item) => <th>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {events && events.map((item) => (
            <tr>
              {Object.values(item).map((item) => <td>{item}</td>)}
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  )
}

export default EventsList