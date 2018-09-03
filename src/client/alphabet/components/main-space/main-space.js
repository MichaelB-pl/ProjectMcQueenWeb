import './main-space.css';
import React from 'react';
import { connect } from 'react-redux';

import getAlphabet from '../../models/alphabet';

const mapStateToProps = ({ selectedLetterIndex, selectedLetterImageIndex }) => {
    return {
        selectedLetterIndex,
        selectedLetterImageIndex
    };
};

function MainSpace({ selectedLetterIndex, selectedLetterImageIndex }) {
    const letter = getAlphabet()[selectedLetterIndex];
    const uri = letter.uris[selectedLetterImageIndex];
    return (
        <div className="main-space">
            <img src={uri} />
        </div>
    );
}

export default connect(mapStateToProps)(MainSpace);