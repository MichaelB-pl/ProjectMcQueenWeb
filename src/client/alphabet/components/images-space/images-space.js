import './images-space.css';
import React from 'react';
import { connect } from 'react-redux';

import getAlphabet from '../../models/alphabet';

import AlphabetImage from './image/alphabet-image';

const mapStateToProps = ({ selectedLetterIndex }) => {
    return {
        selectedLetterIndex
    };
};

function ImagesSpace(props) {
    const index = props.selectedLetterIndex;
    const { uris } = getAlphabet()[index];
    return (
        <div className="images-space">
            {uris.map((uri, index) => {
                return (
                    <AlphabetImage uri={uri} index={index} key={`alphabet_image_${index}`} />
                );
            })}
        </div>
    );
}

export default connect(mapStateToProps)(ImagesSpace);