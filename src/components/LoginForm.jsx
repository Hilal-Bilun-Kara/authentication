import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(form);
    history.push('/friends');
  };
  /* axios
      .post('https://nextgen-project.onrender.com/api/s11d2/login', form)
      .then((res) => {
        console.log('Login oldu: ', res);
        setAuthInfo(res.data);
      })
      .catch((error) => console.error('Login Hata: ', error));
  };
*/

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2>PASSWORD</h2>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
