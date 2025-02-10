import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, Form } from '../components/index';

const Login = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <div className="form-row">
                    <Form htmlFor="email" labelClassName="form-label" label="Email" inputType="email" inputId="email" inputName="email" inputClassName="form-input" />
                    <Form htmlFor="password" labelClassName="form-label" label="Password" inputType="password" inputId="password" inputName="password" inputClassName="form-input" />
                </div>
                <div>
                    <button type="submit" className="btn btn-block">Login</button>
                    <p>
                        New to Jobify? 
                        <Link to="/register"> Signup</Link>
                    </p>
                </div>
            </form>
        </Wrapper>
    );
};

export default Login;