import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import { connect } from 'react-redux'

const articlesBySelected = selected => article => selected.length ? selected.map(s => s.value).includes(article.id) : true;
const articlesByDateRange = dateRange => article => {
    const d = new Date(article.date);
    return !(dateRange.from && d < new Date(dateRange.from)) && !(dateRange.to && d > new Date(dateRange.to));
};


class ArticleList extends Component {
    static propTypes = {
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };

    render() {
        const { articles, toggleItem, isItemOpen, articleFilter } = this.props

        const articleComponents = articles
            .filter(articlesBySelected(articleFilter.selected))
            .filter(articlesByDateRange(articleFilter.dateRange))
            .map(article => (
                <li key={article.id} >
                    <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
                </li>));

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    articleFilter: state.articleFilter
}))(accordion(ArticleList))