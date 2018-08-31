import './alphabet.css';
import React from 'react';
import { connect } from 'react-redux';

import LettersBar from './components/letters-bar/letters-bar';
import MainSpace from './components/main-space/main-space';
import SpellBar from './components/spell-bar/spell-bar';
import ImagesSpace from './components/images-space/images-space';

function Alphabet(props) {
    return (
        <div className="alphabet-container noselect">
            <LettersBar />
            <MainSpace />
            <SpellBar />
            <ImagesSpace />
        </div>
    );
}

export default connect()(Alphabet);