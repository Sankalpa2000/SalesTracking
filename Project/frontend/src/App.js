import { Route, Routes } from 'react-router-dom';
import Companies from './pages/company/Companies';
import CompanyEdit from './pages/company/CompanyEdit';
import CompanyInsert from './pages/company/CompanyInsert';
import SubCompanyEdit from './pages/company/SubCompanyEdit';
import SubCompanyInsert from './pages/company/SubCompanyInsert';
import SubCompanyList from './pages/company/SubCompanyList';
// import SubCompanyList1 from './pages/company/SubCompanyList';
import CustomerEdit from './pages/customer/CustomerEdit';
import CustomerInsert from './pages/customer/CustomerInsert';
import CustomerList from './pages/customer/CustomerList';
import EditUsers from './pages/main/EditUsers';
import Home from './pages/main/Home';
import Login from './pages/main/Login';
// import Planner from './pages/calender/Planner';
import RegistrationForm from "./pages/main/RegistrationForm";
import UserList from './pages/main/UserList';
// import CalenderInsert from './pages/calender/CalenderInsert';
// import CalenderData from './pages/calender/CalenderData';


import Modal from 'react-modal';

import TaskInsert from './pages/Task/TaskInsert';
import TaskList from './pages/Task/TasklList';
import TaskDetails from './pages/Task/TaskDetails';
import TaskEdit from './pages/Task/TaskEdit';
import TaskCompleted from './pages/Task/TaskCompleted';
import TaskListCompleted from './pages/Task/TaskListCompleted';
// import Calender from './pages/calender/Calender';
Modal.setAppElement('#root')
function App() {
  return (
    <>
        <Home/>
        <Routes>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Register' element={<RegistrationForm/>}/>
          <Route exact path='/UserList' element={<UserList/>}/>
          {/* <Route exact path='/Planner' element={<Calender/>}/> */}
          <Route exact path='/Company' element={<Companies/>}/>
          {/* <Route exact path='/ViewSubCompanies' element={<SubCompanyList/>}/> */}
          <Route exact path='/AddCompany' element={<CompanyInsert/>}/>
          <Route exact path='/Customer' element={<CustomerInsert/>}/>
          <Route exact path='/CustomerList' element={<CustomerList/>}/>
          <Route exact path='/EditUsers' element={<EditUsers/>}/>
          <Route exact path='/SubCompanyInsert' element={<SubCompanyInsert/>}/>
          <Route exact path='/EditCompanies' element={<CompanyEdit/>}/>
          <Route exact path='/EditCustomer' element={<CustomerEdit/>}/>
          <Route exact path='/SubCompany' element={<SubCompanyList/>}/>
          <Route exact path='/EditSubCompany' element={<SubCompanyEdit/>}/>
          {/* <Route exact path='/AddTask' element={<Calender/>}/> */}
          <Route exact path='/TaskList' element={<TaskList/>}/>
          <Route exact path='/InsertTask' element={<TaskInsert/>}/>
          <Route exact path='/TaskDetails' element={<TaskDetails/>}/>
          <Route exact path='/TaskEdit' element={<TaskEdit/>}/>
          <Route exact path='/ViewCompleted' element={<TaskCompleted/>}/>
          <Route exact path='/CompletedList' element={<TaskListCompleted/>}/>
          

        </Routes>
    </>
  );
}

export default App;
