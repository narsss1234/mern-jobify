import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './logo';
import { useDashboardContext } from '../pages/DashboardLayout'; 

const BigSideBar = () => {
    const {showSidebar, toggleSidebar} = useDashboardContext();

    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className='content'>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks isBigSidebar />
                </div>
            </div>
        </Wrapper>
    );
}

export default BigSideBar;