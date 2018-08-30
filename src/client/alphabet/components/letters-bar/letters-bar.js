import './letters-bar.css';
import React from 'react';
import { connect } from 'react-redux';

function LettersBar(props) {
    return (
        <ul className="letters-bar">
        </ul>
    );
}

export default connect()(LettersBar);