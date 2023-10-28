import './scss/_main.scss';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import BookingForm from './pages/bookingForm';
import LandingLogin from './pages/landingLogin';
// cur prac
import RadioButtons from './components/radioButtons';

import AdminProvider from './provider/adminProvider';

function App() {

  const arr = ['sm', 'med', 'l'];

  return (

    <GoogleOAuthProvider clientId='29200798300-tmajo4t5hqrgk71bsshmsvtdf3k07u2v.apps.googleusercontent.com'>
      <AdminProvider>

        <div className = {`theme`}>
            <div className='app'>

              <div className='content'>
                <Routes>
                  {/* open routes */}
                  <Route path = '/prac' element = {<RadioButtons arr = {arr} header = 'header'/>}></Route>
                  <Route path = '/bookingform/:id' element = {<BookingForm/>}/>
                  <Route path = '/' element = {<LandingLogin/>}/>
                  {/* closed routes */}
                  {/* <Route path = '/dashboard' element = {<Dashboard/>}/> */}
                  {/* <Route path = '/dashboard/createbookingform/:id' element = {<crudBookingForm/>}/> */}
                </Routes>
              </div>  

            </div>
        </div>
      </AdminProvider>
    </GoogleOAuthProvider>

  );
}

export default App;
