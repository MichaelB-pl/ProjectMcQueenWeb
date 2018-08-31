import './spell-bar.css';
import React from 'react';
import { connect } from 'react-redux';

import getAlphabet from '../../models/alphabet';

const mapStateToProps = ({ selectedLetterIndex, selectedLetterImageIndex }) => {
    return {
        selectedLetterIndex,
        selectedLetterImageIndex
    };
};

function SpellBar({ selectedLetterIndex, selectedLetterImageIndex }) {
    const letter = getAlphabet()[selectedLetterIndex];
    const imageName = letter.names[selectedLetterImageIndex];
    
    return (
        <div className="spell-bar">
            {imageName}
        </div>
    );
}

export default connect(mapStateToProps)(SpellBar);