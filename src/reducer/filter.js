import { ARTICLE_FILTER_SELECT, ARTICLE_FILTER_DATE_RANGE } from '../constants'

const defaultArticleFilter = {
  selected: [],
  dateRange: {from: null, to: null}
};

export default (articleFilter = defaultArticleFilter, action) => {
    let { type, payload } = action;

    switch (type) {
        case ARTICLE_FILTER_SELECT:
            const { selected } = payload;
            return Object.assign({}, articleFilter, { selected });

        case ARTICLE_FILTER_DATE_RANGE:
            const { dateRange } = payload;
            return Object.assign({}, articleFilter, { dateRange });
    }
    return articleFilter
}