import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './ValidationComponent';
import Input from './renderInput';

const FormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Semester</label>
          <Field name="sem" component={Input} label='sem' placeholder='Current semester' />
      </div>
      <div>
        <label>Section</label>
          <Field name="sec" component={Input} label='sec' placeholder='example - A' />
      </div>
      <div>
        <label>Roll Number</label>
          <Field name="roll" component={Input} label='roll' placeholder='Class Roll Number' />
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" className="next" style={{margin:'10px', padding: "3px", color:'white', background:'#2b7de9'}}>Next</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'UserForm',  //Form name is same
  destroyOnUnmount: false,
  validate
})(FormSecondPage)