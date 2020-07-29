import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './ValidationComponent';
import Input from './renderInput';


const FormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
          <Field name="firstName" component = {Input} label='firstName' placeholder='Enter your first name'/>
      </div>
     <div>
        <label>Last Name</label>
          <Field name="lastName" component = {Input} label='lastName' placeholder='enter your Last name' />
      </div>
      <div>
        <button type="submit" className="next" style={{margin:'10px', padding: "3px", color:'white', background:'#2b7de9'}}>Next</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'UserForm',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate
})(FormFirstPage)