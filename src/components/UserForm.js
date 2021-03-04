import React from 'react';
function UserForm (props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        debugger;
        submit();
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Please Enter Your Infomation</h3>
            
            <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
            <div className='inputs'>
                <label>Username:
                    <input
                        name='username'
                        value='text'
                        onChange={onChange}
                        value={values.username}
                        placeholder='Please enter your usename in lower case'
                    />
                </label>
                <label>Email:
                    <input
                        name='email'
                        value='text'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        value='password'
                        onChange={onChange}
                        value={values.password}
                    />
                </label>
            </div>
            <button disabled={disabled}>Submit</button>
        </form>
    )
}
export default UserForm;