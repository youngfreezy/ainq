import React from 'react'
import _ from 'lodash'
import './allergy-grid.css'

function AllergyGrid(props) {
    return (
        <div>
            <table id="allergic-reactions">
                <tbody>{renderTableData(props)}</tbody>
            </table>
        </div>
    )
}

function renderTablePerReactionDescription(props) {
    return _.map(props.allergicReactions, (allergy, key, idx) => {
        return (
            <table key={allergy[0].id}>
                <tbody>
                    <tr>
                        <th onClick={props.handleClick}>{key}</th>
                    </tr>
                    {props.descriptionClicked[key] && (
                        <tr>
                            <td>date</td>
                            <td>severity</td>
                        </tr>
                    )}

                    {props.descriptionClicked[key] &&
                        allergy.map(reactionData => {
                            return (
                                <tr key={reactionData.id}>
                                    {/* TODO: implement sort by date and sort by severity */}
                                    <td onClick={props.sortByColumn}>
                                        {reactionData.observationDate}
                                    </td>
                                    <td onClick={props.sortByColumn}>
                                        {reactionData.severity}
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        )
    })
}

function renderTableData(props) {
    return (
        <tr>
            <td>{renderTablePerReactionDescription(props)}</td>
        </tr>
    )
}

export default AllergyGrid
