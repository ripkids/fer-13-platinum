import { useDispatch } from 'react-redux';

import { registerAuth, logout } from '../../store/Auth';
import api from '../../api';

const Landing = () => {
  const dispatch = useDispatch();
  const login = async () => {
    try {
      const { data } = await api.loginAdmin({
        email: 'admin@bcr.io',
        password: '123456'
      });

      dispatch(registerAuth(data));
    } catch (error) {}
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="p-5 d-flex d-flex-column">
        <button
          className="mb-5 w-100 btn btn-primary"
          onClick={() => login()}
        >
          Login
        </button>

        <button
          className="mt-5 w-100 btn btn-danger"
          onClick={() => handleLogout()}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Landing;