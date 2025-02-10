import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, Form } from '../components/index';

const Register = () => {
    return(
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Register</h4>
                <div className="form-row">
                    <Form htmlFor="name" labelClassName="form-label" label="Name" inputType="text" inputId="name" inputName="name" inputClassName="form-input" />
                    <Form htmlFor="lastName" labelClassName="form-label" label="Last Name" inputType="text" inputId="lastname" inputName="lastname" inputClassName="form-input" />
                    <Form htmlFor="location" labelClassName="form-label" label="Location" inputType="text" inputId="location" inputName="location" inputClassName="form-input" />
                    <Form htmlFor="email" labelClassName="form-label" label="Email" inputType="email" inputId="email" inputName="email" inputClassName="form-input" />
                    <Form htmlFor="password" labelClassName="form-label" label="Password" inputType="password" inputId="password" inputName="password" inputClassName="form-input" />
                    
                </div>
                <div>
                    <button type="submit" className="btn btn-block">Submit</button>
                    <p>
                        Already a member?
                        <Link to='/Login' className="member-btn">Login</Link>
                    </p>
                </div>
            </form>
        </Wrapper>
    );
};

export default Register;