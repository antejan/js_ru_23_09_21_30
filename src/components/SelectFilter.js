import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'

class SelectFilter extends Component {
    static propTypes = {
        // connect
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = selected => this.setState({ selected })

    render() {
        const { articles } = this.props
        const { selected } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.articles
}))(SelectFilter)