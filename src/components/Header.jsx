import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const history = useHistory();

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {!isLoggedIn && (
            <button onClick={() => history.push('/login')}>LOGIN</button>
          )}
          {isLoggedIn && (
            <>
              <button onClick={() => history.push('/friends')}>
                FRIENDS LIST
              </button>
              <button onClick={() => history.push('/friends/add')}>
                ADD FRIEND
              </button>
              <button onClick={logOut}>LOGOUT</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
