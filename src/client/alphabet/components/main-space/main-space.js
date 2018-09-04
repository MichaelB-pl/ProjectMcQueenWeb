import './main-space.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import getAlphabet from '../../models/alphabet';
import { setDefaultImageIndex } from '../../actions/alphabet-actions';
import { mainMenu } from '../../../app/actions/app-actions';

const mapStateToProps = ({ selectedLetterIndex, selectedLetterImageIndex }) => {
    return {
        selectedLetterIndex,
        selectedLetterImageIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDefaultImageIndex: () => dispatch(setDefaultImageIndex()),
        mainMenu: () => dispatch(mainMenu())
    };
};

class MainSpace extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-space">
                <div className="alphabeth-back-button" onClick={this.mainMenu.bind(this)}>
                    &larr;
                </div>
                <div className="letter-background">
                    {this.getDisplayerLetter()}
                </div>
                <img src={this.getImageUri()} onClick={this.setDefaultImageIndex.bind(this)} />
            </div>
        );
    }

    mainMenu() {
        const { mainMenu } = this.props;
        mainMenu();
    }

    getImageUri() {
        const { selectedLetterIndex, selectedLetterImageIndex } = this.props;
        const letterData = getAlphabet()[selectedLetterIndex];
        return letterData.uris[selectedLetterImageIndex];
    }

    getDisplayerLetter() {
        const { selectedLetterIndex, selectedLetterImageIndex } = this.props;
        const letterData = getAlphabet()[selectedLetterIndex];

        if (selectedLetterImageIndex === -1) {
            const letter = letterData.letter;
            return `${letter}${letter.toLowerCase()}`;
        }
        return '';
    }

    setDefaultImageIndex() {
        const { setDefaultImageIndex } = this.props;
        setDefaultImageIndex();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSpace);