import React from 'react'
import _ from 'lodash'
import "./allergy-grid.css"

function AllergyGrid(props) {
    return (
        <div>
            <table id="allergic-reactions">
                <tbody>
                    {renderTableData(
                        props.allergicReactions,
                        props.handleClick,
                        props.descriptionClicked
                    )}
                </tbody>
            </table>
        </div>
    )
}

function renderTablePerReactionDescription(
    allergicReactions,
    handleClick,
    descriptionClicked
) {
    return _.map(allergicReactions, (allergy, key) => {
        return (
            <table id={key}>
                <tbody>
                    <tr>
                        <th onClick={handleClick}>{key}</th>
                    </tr>
                    {descriptionClicked[key] && (
                        <tr>
                            <td>date</td>
                            <td>severity</td>
                        </tr>
                    )}

                    {descriptionClicked[key] &&
                        allergy.map(reactionData => {
                            return (
                                <tr>
                                    <td>{reactionData.observationDate}</td>
                                    <td>{reactionData.severity}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        )
    })
}

function renderTableData(allergicReactions, handleClick, descriptionClicked) {
    return (
        <tr>
            <td>
                {renderTablePerReactionDescription(
                    allergicReactions,
                    handleClick,
                    descriptionClicked
                )}
            </td>
        </tr>
    )
}

export default AllergyGrid
