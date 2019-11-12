import React from 'react'
import './App.css'
import AllergyGrid from './components/AllergyGrid'
import AllergyForm from './components/AllergyForm'
import uuid from 'uuid'
import _ from 'lodash'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            observationDate: '',
            severity: '',
            allergicReactions: [],
            descriptionClicked: {},
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    clearForm() {
        this.setState({
            description: '',
            observationDate: '',
            severity: '',
        })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        const allergicReactions = this.state.allergicReactions.concat([
            {
                id: uuid(),
                description: this.state.description,
                observationDate: this.state.observationDate,
                severity: parseInt(this.state.severity, 10),
            },
        ])

        const groupedAllergicReactions = this.groupAllergicReactions(
            allergicReactions
        )
        this.setState({ allergicReactions, groupedAllergicReactions }, () => {
            this.clearForm()
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    //this is happening on every render it doesn't need to.
    groupAllergicReactions(reactions) {
        // first, group by descriptor
        //get the unique descriptions as an array of strings
        let reactionGroups = _.map(
            _.uniqBy(reactions, 'description'),
            'description'
        )
        //convert it to a grouped object
        reactionGroups = reactionGroups.reduce((current, item) => {
            current[item] = []
            return current
        }, {})

        for (let key in reactions) {
            const allergy = reactions[key]
            let description = allergy['description']
            if (reactionGroups[description]) {
                reactionGroups[description].push({
                    observationDate: allergy['observationDate'],
                    severity: allergy['severity'],
                    id: allergy['id'],
                })
            }
        }

        //then sort ascending by severity
        for (let key in reactionGroups) {
            reactionGroups[key] = _.sortBy(
                reactionGroups[key],
                'severity'
            ).reverse()
        }

        return reactionGroups
    }
    handleClick(e) {
        e.persist()
        let rowClicked = e.target.innerHTML
        let newDescriptionsClickedHash = this.state.descriptionClicked
        newDescriptionsClickedHash[rowClicked] = !newDescriptionsClickedHash[
            rowClicked
        ]
        this.setState({ descriptionClicked: newDescriptionsClickedHash })
    }
    render() {
        return (
            <div>
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
                <AllergyForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleChange={this.handleChange}
                    description={this.state.description}
                    observationDate={this.state.observationDate}
                    severity={this.state.severity}
                />
                <AllergyGrid
                    allergicReactions={this.state.groupedAllergicReactions}
                    handleClick={this.handleClick.bind(this)}
                    descriptionClicked={this.state.descriptionClicked}
                />
            </div>
        )
    }
}

export default App
