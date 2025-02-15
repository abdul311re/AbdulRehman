import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import axios from "axios";
import "../../App.css";

function Login() {
  const [anchorEl, setAnchorEl] = useState([null]);

  const handleClick = (index) => (event) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = event.currentTarget;
    setAnchorEl(newAnchorEl);
  };

  const handleClose = (index) => () => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = null;
    setAnchorEl(newAnchorEl);
  };
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
     if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    console.log(values);
    axios
      .post("http://192.168.100.23:3004/api/register",{
        username: values.username,
        password: values.password,
        
      },{ withCredentials: true })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
    
  return (
    <>
    <div>
      <div>
    <button
            className="flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6  text-white font-semibold bg-purple"
            onClick={handleClick(0)} 
          >
            Log in <span aria-hidden="true">&rarr;</span>
    </button>
    </div>
        <Popover
          className="relative"
          open={Boolean(anchorEl[0])}
          anchorEl={anchorEl[0]}
          onClose={handleClose(0)}
          disableAutoFocus
          disableEnforceFocus
        >
          <Typography
            transition
            className="flex items-center justify-center fixed top-0 left-1/2 z-10 w-full h-full backdrop-blur-md bg-cover shadow-lg ring-1 ring-gray-900/5 transition -translate-x-1/2 data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <button onClick={handleClose(0)} className='absolute lg:top-10  top-20 right-5 md:right-20 lg:right-20'> {/* Pass the index here */}
              <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"22px"}} />
            </button>
            <div className='bg-black w-5/6 md:w-2/3 lg:w-1/4 rounded-2xl p-8'>
            <h3 className='text-purple font-bold text-5xl dynapuff-uniquifier text-center'>Login</h3>
            <div className='flex flex-col items-center justify-center'>
              <form onSubmit={handleSubmit} className='pt-5 pb-5'>
              <div><p className='text-white'>Admin</p></div>
              <div><input type="text"
                  id="username"
                  onChange={(e) =>
                    setValues({ ...values, username: e.target.value })
                  }  placeholder='Admin' className='rounded px-2 py-1  'required autoComplete="off"/> {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}</div>
              <div  className='mt-5'><p className='text-white'>Password</p></div>
              <div><input  type="password"
                  id="password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  } placeholder='Password' className='rounded px-2 py-1'required autoComplete="off"/> {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}</div>
              <div className='flex items-center justify-center mt-5'>
              <Button  type="submit" className='!bg-purple !text-white !px-5'><p className=''>Submit</p></Button></div>
           
              </form>
              </div>
            </div>
          </Typography>
        </Popover>
        </div>
    </>
  );
}

export default Login;