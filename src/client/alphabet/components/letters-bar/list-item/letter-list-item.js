import './letter-list-item.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLetterIndex, setDefaultImageIndex } from '../../../actions/alphabet-actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setLetterIndex: index => dispatch(setLetterIndex(index)),
        setDefaultImageIndex: () => dispatch(setDefaultImageIndex())
    };
};

class LetterListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const letter = this.props.letter;

        return (
            <li className="letter-list-item" onClick={this.setIndex.bind(this)}>
                {letter}
            </li>
        );
    }

    setIndex() {
        const { setDefaultImageIndex, setLetterIndex } = this.props;
        setDefaultImageIndex();
        setLetterIndex(this.props.index);
    }
}

export default connect(null, mapDispatchToProps)(LetterListItem);