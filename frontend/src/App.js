import './scss/_main.scss';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Login from './pages/login';
import BookingForm from './pages/bookingForm';
import GuestNames from './components/guestNames';

import AdminProvider from './provider/adminProvider';

function App() {
  return (

    <GoogleOAuthProvider clientId='29200798300-tmajo4t5hqrgk71bsshmsvtdf3k07u2v.apps.googleusercontent.com'>
      <AdminProvider>

        <div className = {`theme`}>
            <div className='app'>

              <div className='content'>
                <Routes>
                  {/* open routes */}
                  <Route path = '/prac' element = {<GuestNames/>}></Route>
                  <Route path = '/bookingform/:id' element = {<BookingForm/>}/>
                  <Route path = '/' element = {<Login/>}/>
                  {/* closed routes */}
                  
                </Routes>
              </div>  

            </div>
        </div>
      </AdminProvider>
    </GoogleOAuthProvider>

  );
}

export default App;
