import './letters-bar.css';
import React from 'react';
import { connect } from 'react-redux';

import getAlphabet from '../../models/alphabet';

import LetterListItem from './list-item/letter-list-item';

function mapStateToProps({ selectedLetterIndex }) {
    return {
        selectedLetterIndex
    };
}

function LettersBar(props) {
    const alphabet = getAlphabet();

    return (
        <ul className="letters-bar">
            {alphabet.map((letter, index) =>
                <LetterListItem letter={letter} key={`letter_list_item_${index}`} />)}
        </ul>
    );
}

export default connect(mapStateToProps)(LettersBar);