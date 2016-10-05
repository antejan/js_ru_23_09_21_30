import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'

class DateRangePicker extends Component {
    static propTypes = {
    };

    handleDayClick = (e, day) => {
        let {from, to} = this.props;
        if (from && to) {
            from = null;
            to = null;
        }
        const range = DateUtils.addDayToRange(day, {from, to});
        this.props.handleDaysRangeChange(range);
    };

    handleResetClick = (e) => {
        e.preventDefault();
        this.props.handleDaysRangeChange({
            from: null,
            to: null
        });
    };

    render() {
        const { from, to } = this.props;
        return (
            <div>
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    You chose from { from.toLocaleDateString() } to { to.toLocaleDateString() }.
                    { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
                <DayPicker
                  onDayClick={ this.handleDayClick }
                  selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                />
            </div>
        )
    }
}

export default DateRangePicker