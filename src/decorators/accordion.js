import React from 'react'

export default function accordion(Component) {
    return class AccordionDecorator extends React.Component {
        state = {
            openArticleId: null
        };

        toggleArticle = id => ev => {
            this.setState({
                openArticleId: id
            })
        };

        render() {
            return <Component {...this.props} {...this.state} toggleArticle = {this.toggleArticle}/>
        }
    }
}