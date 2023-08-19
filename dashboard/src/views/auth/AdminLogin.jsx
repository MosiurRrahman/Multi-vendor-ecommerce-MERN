import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { ScaleLoader} from "react-spinners"
import {toast} from 'react-hot-toast'
const AdminLogin = () => {
  const navigate  =useNavigate()
  const dispatch = useDispatch();
  const {loader,errorMessage,successMessage}  = useSelector(state=>state.auth)
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const inputeHandle = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    
    dispatch(admin_login(state))
  };
  const overrideStyle = {
    display:"flex",
    margin:"0 auto",
    height:"24px",
    justifyContent:"center",
    alignItems:"center"
  }
  useEffect(()=>{
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear())
    } 
    if(successMessage){
      toast.success(successMessage);
      dispatch(messageClear())
      navigate("/")
    }
  },[errorMessage,successMessage])
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] py-5 px-3 rounded hover:rounded-lg">
        <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
                <img  className = "h-full w-full"  src="http://localhost:3000/images/logo.png" alt="img" />
            </div>
        </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] foucs:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                value={state.value}
                onChange={inputeHandle}
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] foucs:border-indigo-500 overflow-hidden"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
                value={state.value}
                onChange={inputeHandle}
              />
            </div>

            <button disabled = {loader? true:false}  className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white- rounded-md px-7 py-2 md-5">
             {
              loader? <ScaleLoader
              color="#fff" cssOverride={overrideStyle} />:"Login"
             }
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
