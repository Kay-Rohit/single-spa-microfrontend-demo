import React from 'react';

const FormInput = ({
    input,
    label,
    type,
    placeHolder,
    meta: {touched, error}
  }) => (
    <div>
      <input
        {...input}
        type={type}
        placeholder={placeHolder}
        autoComplete='on'
      />
      <div>
        {touched && error ? <span style={{fontSize: 13, color:'red' }}>{error}</span> : null}
      </div>
    </div>
  );

  export default FormInput;