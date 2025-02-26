import Wrapper from '../assets/wrappers/LogoutContainer'
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

const LogoutContainer = () => {
    const [showLogout, setShowLogout] = useState(false);
    const {user, logoutUser} = useDashboardContext();

    console.log(user, logoutUser);
    console.log(showLogout,setShowLogout);

    return(
        <Wrapper>
            <button type='button' className='btn logout-btn' onClick={() => {setShowLogout(!showLogout)}}><FaUserCircle />{user?.name}</button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}><button type='button' className='dropdown-btn' onClick={logoutUser}>logout</button></div>
        </Wrapper>
    );
}

export default LogoutContainer;