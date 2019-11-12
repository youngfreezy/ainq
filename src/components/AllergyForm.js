import React from 'react'
import "./allergy-form.css"

//TODO: in the real world I would have done validation of dates/inputs
function AllergyForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit} id="form">
            Allergy:
            <div id="form-inputs">
                Description
                <input
                    type="text"
                    value={props.description}
                    onChange={props.handleChange}
                    id={"description"}
                    className="text-input"
                />
                Observation Date
                <input
                    type="text"
                    value={props.observationDate}
                    onChange={props.handleChange}
                    id="observationDate"
                    className="text-input"
                />
                Severity (1-10)
                <input
                    type="text"
                    value={props.severity}
                    onChange={props.handleChange}
                    id="severity"
                    className="text-input"
                />
            </div>
            <div id="submit-button-div">
                <input type="submit" value="Submit" />
            </div>
            
        </form>
    )
}

export default AllergyForm