import { createContext, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authInfo, setAuthInfo] = useLocalStorage('s11d2', {});
  const isLoggedIn = authInfo && authInfo.token;
  const history = useHistory();

  const login = (loginInfo) => {
    axios
      .post('https://nextgen-project.onrender.com/api/s11d2/login', loginInfo)
      .then(function (response) {
        console.log('LOGİN', response);
        setAuthInfo(response.data);
        history.push('/friends');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logOut = () => {
    setAuthInfo({});
    history.push('/login');
  };

  // console.log('CONTETETN SELAMLAR', isUserLoggedIn);

  return (
    <AuthContext.Provider
      value={{
        authInfo,
        login,
        isLoggedIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
