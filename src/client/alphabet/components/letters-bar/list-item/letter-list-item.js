import './letter-list-item.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLetterIndex } from '../../../actions/alphabet-actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setLetterIndex: index => dispatch(setLetterIndex(index))
    };
};

class LetterListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const letter = this.props.letter;

        return (
            <li className={this.getClasses()} onClick={this.setIndex.bind(this)}>
                {letter}
            </li>
        );
    }

    getClasses() {
        let classes = 'letter-list-item';
        if (this.props.isSelected)
            classes += ' selected-letter';
        return classes;
    }

    setIndex() {
        this.props.setLetterIndex(this.props.index);
    }
}

export default connect(null, mapDispatchToProps)(LetterListItem);