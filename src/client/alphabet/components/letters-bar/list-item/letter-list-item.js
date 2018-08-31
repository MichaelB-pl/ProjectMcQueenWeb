import './letter-list-item.css';
import React, { Component } from 'react';

export default class LetterListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.letter);
        const letter = this.props.letter.letter;
        
        return (
            <li className="letter-list-item">
                {letter}
            </li>
        );
    }
}