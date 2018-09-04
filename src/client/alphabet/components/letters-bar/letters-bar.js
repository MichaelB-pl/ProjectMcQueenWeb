import './letters-bar.css';
import React from 'react';
import { connect } from 'react-redux';

import getAlphabet from '../../models/alphabet';

import LetterListItem from './list-item/letter-list-item';

const mapStateToProps = ({ selectedLetterIndex }) => {
    return {
        selectedLetterIndex
    };
};

function LettersBar(props) {
    const alphabet = getAlphabet();

    return (
        <div className="letters-bar">
            <ul className="letters-list">
                {/* <li className="letter-list-item">
                &larr;
            </li> */}
                {alphabet.map((letter, index) =>
                    <LetterListItem
                        letter={letter.letter}
                        index={index}
                        isSelected={index === props.selectedLetterIndex}
                        key={`letter_list_item_${index}`} />)}
            </ul>
        </div>
    );
}

export default connect(mapStateToProps)(LettersBar);