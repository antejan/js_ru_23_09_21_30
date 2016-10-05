import React, { Component, PropTypes } from 'react'
import SelectComponent from './SelectComponent'
import DateRangePicker from './DateRangePicker'

import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        selectedArticle: null,
        selectedDaysRangeFrom: null,
        selectedDaysRangeTo: null
    };

    handleSelectChange = selectedArticle => this.setState({ selectedArticle });

    handleDaysRangeChange = selectedDays => {
        const { from, to } = selectedDays;
        this.setState({
            selectedDaysRangeFrom: from,
            selectedDaysRangeTo: to
        });
    };

    render() {
        const selectOptions = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <SelectComponent
                    options = {selectOptions}
                    value = {this.state.selectedArticle}
                    onChange = {this.handleSelectChange}
                    multi={true}
                />
                <DateRangePicker
                  handleDaysRangeChange = { this.handleDaysRangeChange }
                  from = { this.state.selectedDaysRangeFrom }
                  to = { this.state.selectedDaysRangeTo }
                />
            </div>
        )
    }
}

export default Filters