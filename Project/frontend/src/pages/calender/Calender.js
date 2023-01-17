import React from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import '../calender/index.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap'

export default class Calender extends React.Component {


    
    state = {
        weekendsVisible: true,
        currentEvents: []
    }
    
    render() {


        return (
            <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='timeGridWeek'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            dateClick={this.handleDateClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            //you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            
            />
        </div>
      </div>
    )
}

renderSidebar() {
    return (
        <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
              ></input>
            Toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
}

handleWeekendsToggle = () => {
    this.setState({
        weekendsVisible: !this.state.weekendsVisible
    })
}
handleDateClick = (arg) => { // bind with an arrow function
    // navigate('/TaskInsert');
    alert(arg.dateStr)
}
handleDateSelect = (selectInfo) => {
    const navigate = useNavigate();

    navigate('/TaskInsert');
    
    // onclick(navigate('/TaskInsert'))
    
    let title = prompt('Please enter a new title for your event')
    let name = prompt('Please enter a new title for your Name')
    let calendarApi = selectInfo.view.calendar
    console.log(selectInfo)

    calendarApi.unselect() // clear date selection

    if (title) {
    calendarApi.addEvent({
        id: createEventId(),
        title,
        name,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
    console.log(selectInfo.startStr);
  }

  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event ?`)=== true) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
        <i>{event.name}</i>
    </li>
  )
}
