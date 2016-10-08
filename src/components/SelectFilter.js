import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { articleFilterSelect } from '../AC/articleFilterSelect'

class SelectFilter extends Component {
    static propTypes = {
        // connect
        articles: PropTypes.array.isRequired,
        articleFilterSelect: PropTypes.func.isRequired,
        selectValue: PropTypes.object
    };

    handleChange = (selected = []) => this.props.articleFilterSelect(selected)

    render() {
        const { articles, articleFilter } = this.props;
        const selectValue = articleFilter.selected
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return <Select
            options = { options }
            value = { selectValue }
            multi = { true }
            onChange = { this.handleChange }
        />
    }
}

export default connect(state => ({
    articles: state.articles,
    articleFilter: state.articleFilter
}), { articleFilterSelect })(SelectFilter)