import React, { Component } from 'react';

import { FormTitle } from '../formTitle';

import SigninForm from './signinForm';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className='sign-in__title' text='Login'/>
                <SigninForm/>
            </form>
        )
    }
}

export default Signin;