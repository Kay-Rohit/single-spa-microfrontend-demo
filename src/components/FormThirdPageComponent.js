import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './ValidationComponent';
import Input from './renderInput';

const FormThirdPage = (props) => {
  const { handleSubmit, previousPage} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" id="email" component={Input} type="text" placeholder="example@gmail.com" />
        </div>
      </div>
      <div>
        <label>Contact</label>
        <div>
          <Field name="phone" id="phone" component={Input} type="text" placeholder="enter your mob. No." />
        </div>
      </div>
      <div>
        <label>City</label>
        <div>
          <Field name="city" component={Input} label='city' placeholder='Enter your current city' />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" style={{margin:'10px', padding: "3px", color:'white', background:'#2b7de9'}}>Next</button>
      </div>
    </form>
  );
}
export default reduxForm({
  form: 'UserForm', //Form name is same
  destroyOnUnmount: false,
  validate
})(FormThirdPage)