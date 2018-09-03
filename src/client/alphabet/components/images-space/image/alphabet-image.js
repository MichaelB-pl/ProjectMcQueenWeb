import './alphabet-image.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { setImageIndex } from '../../../actions/alphabet-actions';

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

        const { uri, index, setImageIndex } = this.props;

        if (uri)
            setImageIndex(index);
    }
}

export default connect(null, mapDispatchToProps)(AlphabetImage);