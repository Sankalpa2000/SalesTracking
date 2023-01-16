import * as React from 'react';
import { guid } from '@progress/kendo-react-common';
import { timezoneNames } from '@progress/kendo-date-math';
import { IntlProvider, load, LocalizationProvider } from '@progress/kendo-react-intl';
import { Scheduler, TimelineView, DayView, WeekView, MonthView, AgendaView } from '@progress/kendo-react-scheduler';
import weekData from 'cldr-core/supplemental/weekData.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';
import Form from 'react-bootstrap/Form';
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import '@progress/kendo-date-math/tz/Europe/Madrid';
import '@progress/kendo-date-math/tz/Asia/Dubai';
import '@progress/kendo-date-math/tz/Asia/Tokyo';
import '@progress/kendo-date-math/tz/America/New_York';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
// import esMessages from './es.json';
import { sampleDataWithCustomSchema, displayDate, customModelFields } from './CalenderData';
import Container from 'react-bootstrap/esm/Container';
load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);
// loadMessages(esMessages, 'es-ES');
const Planner = () => {


  const timezones = React.useMemo(() => timezoneNames(), []);
  const locales = [{
    language: 'en-US',
    locale: 'en'
  }, {
    language: 'es-ES',
    locale: 'es'
  }];
  const [view, setView] = React.useState('month');
  const [date, setDate] = React.useState(displayDate);
  const [locale, setLocale] = React.useState(locales[0]);
  const [timezone, setTimezone] = React.useState('Etc/UTC');
  const [orientation, setOrientation] = React.useState('horizontal');
  const [data, setData] = React.useState(sampleDataWithCustomSchema);
  const [search , setSearch] = React.useState("");
 
  
  const handleViewChange = React.useCallback(event => {
    setView(event.value);
  }, [setView]);
  const handleDateChange = React.useCallback(event => {
    setDate(event.value);
  }, [setDate]);
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
    setData(old => old.filter(item => deleted.find(current => current.TaskID === item.TaskID) === undefined)
    .map(item => updated.find(current => current.TaskID === item.TaskID) || item)
    .concat(created.map(item => Object.assign({}, item, 
      {
      TaskID: guid()
    }))));
  }, [setData]);
 const resources=[
    { 
      name: 'Company',
      data: [{
          text: 'Hi',
          value: 1,
          color:'#1e1e1e1e'
        },{
          text: 'Bye',
          value: 1,
          color:'#1e1e1e1e'
          }], 
field: 'RoomID',
valueField: 'value',
textField: 'text',
colorField: 'color'
    }]
  return <Container>
        <Container className="example-config">
          <div className="row">
            <div className="col">
              <h5>Orientation:</h5>
              <input type="radio" name="orientation" id="horizontal" data-orientation="horizontal" className="k-radio k-radio-md" checked={orientation === 'horizontal'} onChange={handleOrientationChange} />
              <label className="k-radio-label" htmlFor="horizontal">Horizontal</label>
              <br />
              <input type="radio" name="orientation" id="vertical" data-orientation="vertical" className="k-radio k-radio-md" checked={orientation === 'vertical'} onChange={handleOrientationChange} />
              <label className="k-radio-label" htmlFor="vertical">Vertical</label>
            </div>
            <Form>
            <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:20,alignItems:'center'}}>
                    Search By Company :<br></br>
                <Form.Select onChange={(e) =>{setSearch(e.target.value)}} required  style={{fontWeight : 'bold', marginRight:'10px'}}>
                            <option value = {search}  selected>Select Main Company</option>
                        {/* {Company.map((e,i) =>(
                            <option key={i} value={e.Name}>{e.Name}</option>
                        ))} */}
                    
                </Form.Select>
            </div>
            </Form>
          </div>
        </Container>
        <LocalizationProvider >
          <IntlProvider locale={locale.locale}>
            <Scheduler 
            data={data} onDataChange={handleDataChange} 
            view={view} onViewChange={handleViewChange} 
            date={date} onDateChange={handleDateChange} 
            editable={true} 
            timezone={timezone} 
            modelFields={customModelFields}
            group={{orientation}}
            resources={resources}>
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