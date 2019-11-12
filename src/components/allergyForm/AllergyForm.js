import React from 'react'
import './allergy-form.css';
//TODO: in the real world I would have done validation of dates/inputs
function AllergyForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit} id="form">
            Allergy:
            <div id="form-inputs">
                <input
                    type="text"
                    value={props.description}
                    onChange={props.handleChange}
                    id={"description"}
                    className={"input-field"}
                />
                <input
                    type="text"
                    value={props.observationDate}
                    onChange={props.handleChange}
                    id="observationDate"
                    className={"input-field"}
                />
                <input
                    type="text"
                    value={props.severity}
                    onChange={props.handleChange}
                    id="severity"
                    className={"input-field"}
                />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AllergyForm