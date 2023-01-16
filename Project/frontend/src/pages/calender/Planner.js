import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import { guid } from '@progress/kendo-react-common';
import { timezoneNames } from '@progress/kendo-date-math';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import { Scheduler, TimelineView, DayView, WeekView, MonthView, AgendaView } from '@progress/kendo-react-scheduler';
import weekData from 'cldr-core/supplemental/weekData.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import '@progress/kendo-date-math/tz/Europe/Madrid';
import '@progress/kendo-date-math/tz/Asia/Dubai';
import '@progress/kendo-date-math/tz/Asia/Tokyo';
import '@progress/kendo-date-math/tz/America/New_York';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import esMessages from './es.json';
import { sampleDataWithCustomSchema, displayDate, customModelFields } from './events-utc';
import Container from 'react-bootstrap/esm/Container';
load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);
loadMessages(esMessages, 'es-ES');
const Planner = () => {
  const timezones = React.useMemo(() => timezoneNames(), []);
  const locales = [{
    language: 'en-US',
    locale: 'en'
  }];
  React.useEffect((e) => {
        
    axios.get("http://localhost:8080/Company/").then((res) =>{
        setCompany(res.data.Company);
        // console.log(Company);
        
        // setTimeout(() => {
            // setLoading(false);
            //   }, 1000);
            
        }).catch((e) =>{
            alert(e)
        })

    })

  const [Company, setCompany] = React.useState();
  const [view, setView] = React.useState('month');
  const [date, setDate] = React.useState(displayDate);
  const [locale, setLocale] = React.useState(locales[0]);
  const [timezone, setTimezone] = React.useState('Etc/UTC');
  const [orientation, setOrientation] = React.useState('vertical');
  const [data, setData] = React.useState(sampleDataWithCustomSchema);
  const handleViewChange = React.useCallback(event => {
    setView(event.value);
  }, [setView]);
  const handleDateChange = React.useCallback(event => {
    setDate(event.value);
  }, [setDate]);
  const handleLocaleChange = React.useCallback(event => {
    setLocale(event.target.value);
  }, [setLocale]);
  const handleTimezoneChange = React.useCallback(event => {
    setTimezone(event.target.value);
  }, [setTimezone]);
  const handleOrientationChange = React.useCallback(event => {
    setOrientation(event.target.getAttribute('data-orientation'));
  }, []);
  const handleDataChange = React.useCallback(({
    created,
    updated,
    deleted
  }) => {
    setData(old => old.filter(item => deleted.find(current => current.TaskID === item.TaskID) === undefined).map(item => updated.find(current => current.TaskID === item.TaskID) || item).concat(created.map(item => Object.assign({}, item, {
      TaskID: guid()
    }))));
  }, [setData]);


  
  return <Container style={{marginTop : '5%',display : 'block',width : '100%',justifyContent : 'center'}}>
        {/* <Container className="example-config"> */}
          {/* <div className="row"> */}
            {/* <div className="col">
              <h5>Orientation:</h5>
              <input type="radio" name="orientation" id="horizontal" data-orientation="horizontal" className="k-radio k-radio-md" checked={orientation === 'horizontal'} onChange={handleOrientationChange} />
              <label className="k-radio-label" htmlFor="horizontal">Horizontal</label>
              <br />
              <input type="radio" name="orientation" id="vertical" data-orientation="vertical" className="k-radio k-radio-md" checked={orientation === 'vertical'} onChange={handleOrientationChange} />
              <label className="k-radio-label" htmlFor="vertical">Vertical</label>
            </div> */}
          {/* </div> */}
        {/* </Container> */}
        <LocalizationProvider language={locale.language}>
          <IntlProvider locale={locale.locale}>
            <Scheduler data={data} onDataChange={handleDataChange} view={view} onViewChange={handleViewChange} date={date} onDateChange={handleDateChange} editable={true} 
            timezone={timezone} 
            modelFields={customModelFields} 
            group={{
              resources: ['Company', 'Persons'], 
              orientation
            }} 
            resources={[{
                name: 'Company',
                data: [{
                text: 'Room 12',
                value: 1
            }, {
                text: 'Meeting Room 201',
                value: 2,
                color: '#FF7272'
            }, {
                text: 'Meeting Room 201',
                value: 2,
                color: '#FF7272'
            }],
            field: 'RoomID',
            valueField: 'value',
            textField: 'text',
            colorField: 'color'
          }, {
            name: 'Persons',
            data: [{
            text: 'Peter',
            value: 1,
            color: '#5392E4'
          }, {
            text: 'Alex',
            value: 2,
            color: '#54677B'
          }],
          field: 'PersonIDs',
          valueField: 'value',
          textField: 'text',
          colorField: 'color'
        }]}>
              <TimelineView />
              <DayView />
              <WeekView />
              <MonthView />
              <AgendaView />
            </Scheduler>
          </IntlProvider>
        </LocalizationProvider>
      </Container>;
};

export default Planner;