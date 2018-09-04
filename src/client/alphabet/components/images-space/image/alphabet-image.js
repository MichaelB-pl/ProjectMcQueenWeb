import './alphabet-image.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { setImageIndex } from '../../../actions/alphabet-actions';
import { playAudio, getLettersAudioUri } from '../../../../../res/audio/player';

const mapDispatchToProps = (dispatch) => {
    return {
        setImageIndex: index => dispatch(setImageIndex(index))
    };
};

class AlphabetImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { uri } = this.props;
        return (
            <div className="alphabet-image" onClick={this.setImageIndex.bind(this)}>
                <img src={uri} />
            </div>
        );
    }

    setImageIndex() {
        const { letter, names, uri, index, setImageIndex } = this.props;

        const audioUri = getLettersAudioUri(letter, names[index]);
        playAudio(audioUri);

        if (uri)
            setImageIndex(index);
    }
}

export default connect(null, mapDispatchToProps)(AlphabetImage);