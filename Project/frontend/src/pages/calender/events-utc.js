import React from "react";
import axios from "axios"
var setTask;
var Task;


  axios.get("http://localhost:8080/Task/").then((res) =>{
          setTask = res.data.Task.Title
          console.log(setTask);
      }).catch((e) =>{
          alert(e)
      })

const baseData = [{

    "TaskID": 4,
    "OwnerID": 2,
    "Title": "Bowling tournament",
    "Description": "",
    "StartTimezone": null,
    "Start": "2023-01-09T21:00:00.000Z",
    "End": "2023-01-10T00:00:00.000Z",
    "EndTimezone": null,
    "RecurrenceRule": null,
    "RecurrenceID": null,
    "RecurrenceException": null,
    "isAllDay": true
  }, {
    "TaskID": 120,
    "OwnerID": 3,
    "Title": "Website upload",
    "Description": "",
    "StartTimezone": null,
    "Start": "2023-01-16T07:00:00.000Z",
    "End": "2023-01-16T08:30:00.000Z",
    "EndTimezone": null,
    "RecurrenceRule": "",
    "RecurrenceID": null,
    "RecurrenceException": null,
    "isAllDay": false
   }
  ];
  export const customModelFields = {
    id: 'TaskID',
    title: 'Title',
    description: 'Description',
    start: 'Start',
    end: 'End',
    recurrenceRule: 'RecurrenceRule',
    recurrenceId: 'RecurrenceID',
    recurrenceExceptions: 'RecurrenceException'
  };
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDay();
  const parseAdjust = eventDate => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
  };
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  export const displayDate = new Date(Date.UTC(currentYear, currentMonth, currentDay));
  export const sampleData = baseData.map(dataItem => ({
    id: dataItem.TaskID,
    start: parseAdjust(dataItem.Start),
    startTimezone: dataItem.startTimezone,
    end: parseAdjust(dataItem.End),
    endTimezone: dataItem.endTimezone,
    isAllDay: dataItem.isAllDay,
    title: dataItem.Title,
    description: dataItem.Description,
    recurrenceRule: dataItem.RecurrenceRule,
    recurrenceId: dataItem.RecurrenceID,
    recurrenceExceptions: dataItem.RecurrenceException,
    roomId: dataItem.RoomID,
    ownerID: dataItem.OwnerID,
    personId: dataItem.OwnerID
  }));
  // console.log(baseData);
  export const sampleDataWithResources = baseData.map(dataItem => ({
    id: dataItem.TaskID,
    start: parseAdjust(dataItem.Start),
    startTimezone: dataItem.startTimezone,
    end: parseAdjust(dataItem.End),
    endTimezone: dataItem.endTimezone,
    isAllDay: dataItem.isAllDay,
    title: dataItem.Title,
    description: dataItem.Description,
    recurrenceRule: dataItem.RecurrenceRule,
    recurrenceId: dataItem.RecurrenceID,
    recurrenceExceptions: dataItem.RecurrenceException,
    roomId: randomInt(1, 2),
    personId: randomInt(1, 2)
  }
  )
  );
  console.log(sampleDataWithResources);
  export const sampleDataWithCustomSchema = baseData.map(dataItem => ({
    ...dataItem,
    Start: parseAdjust(dataItem.Start),
    End: parseAdjust(dataItem.End),
    PersonIDs: randomInt(1),
    RoomID: randomInt(3)
  }));
  // console.log(sampleDataWithCustomSchema);