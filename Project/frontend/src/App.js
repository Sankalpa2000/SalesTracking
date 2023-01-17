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
import Planner from './pages/calender/Planner';
import RegistrationForm from "./pages/main/RegistrationForm";
import UserList from './pages/main/UserList';
import CalenderInsert from './pages/calender/CalenderInsert';
import CalenderData from './pages/calender/CalenderData';

function App() {
  return (
    <>
        <Home/>
        <Routes>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Register' element={<RegistrationForm/>}/>
          <Route exact path='/UserList' element={<UserList/>}/>
          <Route exact path='/Planner' element={<Planner/>}/>
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
          <Route exact path='/AddTask' element={<CalenderData/>}/>
          

        </Routes>
    </>
  );
}

export default App;
