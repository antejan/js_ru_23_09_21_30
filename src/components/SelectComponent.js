import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectComponent extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        multi: PropTypes.bool
    };

    render() {
        return (
            <Select {...this.props} />
        )
    }
}

export default SelectComponent