import React from './node_modules/react'

//TODO: in the real world I would have done validation of dates/inputs
function AllergyForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            Allergy:
            <label>
                <input
                    type="text"
                    value={props.description}
                    onChange={props.handleChange}
                    id={"description"}
                />
                <input
                    type="text"
                    value={props.observationDate}
                    onChange={props.handleChange}
                    id="observationDate"
                />
                <input
                    type="text"
                    value={props.severity}
                    onChange={props.handleChange}
                    id="severity"
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AllergyForm