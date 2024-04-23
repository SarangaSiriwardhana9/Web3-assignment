import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from '../redux/user/userSlice';
import { useDispatch } from "react-redux";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Logout() {
    const dispatch = useDispatch();
  const handleSignOut = async () => {

    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/users/logout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      window.location.href = '/login';
    } catch (error) {
      const data = error.response.data;
      dispatch(deleteUserFailure(data.message));
    }
  };


  return (
    <div className='flex flex-row'>
      
      <button onClick={handleSignOut} className='text-slate-500 text-xl ml-3 underline flex flex-row gap-x-2 '><RiLogoutCircleLine className='text-slate-500 text-2xl mt-1' />logout</button>

  </div>
)
}