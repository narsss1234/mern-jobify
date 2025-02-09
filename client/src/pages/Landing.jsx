import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components/index';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>Job <span>Tracking</span> App</h1>
                    <p>
                    I'm baby 3 wolf moon pok pok JOMO fixie copper mug heirloom fam cupping franzen tumblr. Migas prism bespoke try-hard, marfa cold-pressed yr chambray. Vibecession farm-to-table PBR&B shaman cupping plaid. Intelligentsia pabst deep v semiotics activated charcoal fit gentrify. Vexillologist fanny pack glossier gluten-free XOXO prism solarpunk. Vexillologist vinyl beard, DIY VHS cronut austin fit. YOLO austin helvetica, quinoa mustache pour-over banh mi vexillologist hell of.
                    </p>
                    <Link to='/register' className='btn register-link'>Register</Link>
                    <Link to='/login' className='btn '>Login / Demo User</Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;