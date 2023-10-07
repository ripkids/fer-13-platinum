import { useState } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../api';
import { registerAuth } from '../../store/Auth';

const Login = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [credential, setCredential] = useState({ email: '', password: '' });
    
  const loginToServer = async () => {
    try {
      setIsError(false);

      const response = await api.loginAdmin(credential);
      const { data } = response;
      
      dispatch(registerAuth(data));
    } catch (error) {
      setIsError(true);
    }
  };
  
  return (
    <>
      <div className="p-5 d-flex flex-column">
        {
          isError && (
            <div
              data-testid="alert-login"
              className="mb-5 p-5 d-flex flex-row rounded-5 bg-danger"
            >
                This is Error
            </div>
          )
        }
        <input
          data-testid="email-input"
          placeholder="Enter email"
          className="mb-5"
          onChange={(ev) =>
            setCredential((prevState) => ({
              ...prevState,
              email: ev.target.value
            }))
          }
        />
        <input
          data-testid="password-input"
          placeholder="Enter password"
          className="mb-5"
          onChange={(ev) =>
            setCredential((prevState) => ({
              ...prevState,
              password: ev.target.value
            }))
          }
        />
        <button
          data-testid="login-button"
          className="btn btn-success"
          onClick={loginToServer}
        >
            Login
        </button>
      </div>
    </>
  );
};

export default Login;