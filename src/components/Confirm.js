import React from 'react';
import {connect} from 'react-redux';
import '../Css/confirm.css';

function Confirm(props) {

    return (
        <>
        <div>
            <h1>Confirm</h1>
            <div className="restaurant-card">
            <div className="restaurant-details">
                <div className="info-row">
                    <div className="field-name">Name:</div>
                    <div className="field-value">{props.formdata.firstName} {props.formdata.lastName}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Roll Number:</div>
                    <div className="field-value">{props.formdata.roll}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Section:</div>
                    <div className="field-value">{props.formdata.sec}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">sem:</div>
                    <div className="field-value">{props.formdata.sem}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Email:</div>
                    <div className="field-value">{props.formdata.email}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Contact:</div>
                    <div className="field-value">{props.formdata.phone}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">City:</div>
                    <div className="field-value">{props.formdata.city}</div>
                </div>
            </div>
            </div>
        </div>
        <div>
            <button type="button" className="previous" onClick={props.previousPage}>Previous</button>
            <button type='submit' style={{margin:'10px', padding: "3px", color:'white', background:'#2b7de9'}}>Confirm and Submit</button>
        </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        formdata: state.form.UserForm.values
    }   
}

export default connect(mapStateToProps)(Confirm); 