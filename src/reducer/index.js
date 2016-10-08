import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
import articleFilter from './filter'

export default combineReducers({
    count, articles, articleFilter
})


/*
export default combineReducers({
    count: counterReducer,
    articles: articleReducer
})
*/
