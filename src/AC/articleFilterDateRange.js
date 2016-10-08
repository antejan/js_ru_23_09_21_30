import { ARTICLE_FILTER_DATE_RANGE } from '../constants'

export function articleFilterDateRange (dateRange) {
    return {
        type: ARTICLE_FILTER_DATE_RANGE,
        payload: { dateRange }
    }
}