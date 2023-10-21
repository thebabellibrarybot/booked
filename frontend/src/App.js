import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId='29200798300-tmajo4t5hqrgk71bsshmsvtdf3k07u2v.apps.googleusercontent.com'>
      <div className = {`theme`}>
          <div className='app'>
            <div className='content'>
              <Routes>
                {/* open routes */}
                <Route path = '/' element = {<Login/>}/>
                {/* closed routes */}
                
              </Routes>
            </div>   
          </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
