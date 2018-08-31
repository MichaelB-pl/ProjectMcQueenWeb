import './alphabet-image.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { basename } from 'path';

export default class AlphabetImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="alphabet-image">
                <img src={this.props.uri} />
            </div>
        );
    }
}