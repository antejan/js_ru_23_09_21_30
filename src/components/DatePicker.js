import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { articleFilterDateRange } from '../AC/articleFilterDateRange'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css';

class DatePicker extends Component {

    static propTypes = {
        // connect
        articleFilter: PropTypes.object.isRequired,
        articleFilterDateRange: PropTypes.func
    };

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.props.articleFilter.dateRange);
        this.props.articleFilterDateRange(range)
    };

    render() {
        const { from, to } = this.props.articleFilter.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    articleFilter: state.articleFilter
}), { articleFilterDateRange })(DatePicker)