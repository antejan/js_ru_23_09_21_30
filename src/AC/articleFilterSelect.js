import { ARTICLE_FILTER_SELECT } from '../constants'

export function articleFilterSelect(selected) {
    return {
        type: ARTICLE_FILTER_SELECT,
        payload: { selected }
    }
}