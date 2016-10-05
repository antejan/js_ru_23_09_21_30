import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {

    state = {
        name: '',
        comment: ''
    };

    handleNameChange = ev => {
        this.setState({
            name: ev.target.value
        })
    };

    handleCommentChange = ev => {
      this.setState({
        comment: ev.target.value
      })
    };

    handleAddButtonClick = ev => {
      const {name, comment} = this.state;
      console.log({name, comment});
    };

    isFormValid = () => {
      const {name, comment} = this.state;
      return Boolean(name && comment);
    };

    render() {
        return (
            <fieldset label="New Comment">
              <p>
                <label htmlFor="name">Name</label><br/>
                <input type="text" name="name" value = {this.state.title} onChange = {this.handleNameChange} />
              </p>
              <p>
                <label htmlFor="comment">Comment</label><br/>
                <textarea name="comments" onChange = {this.handleCommentChange} value = { this.state.comment } />
              </p>
              <button onClick = {this.handleAddButtonClick} disabled = { !this.isFormValid() }>Add Comment</button>
            </fieldset>
        )
    }
}

export default NewCommentForm