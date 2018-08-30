import './app.css';
import React from 'react';
import { connect } from 'react-redux';
import { Actions as Pages } from './reducers/app-reducer';

import MenuPage from '../menu/menu';
import AlphabetPage from '../alphabet/alphabet';


const mapStateToProps = (state) => {
    return {
        pageIndex: state.pageIndex
    };
};

function getDesiredPage(index) {
    switch (index) {
        case 0:
            return (<MenuPage />);
        case 1:
            return (<AlphabetPage />);
        default:
            return null;
    }
}

function App(props) {
    return (
        <div className="app">
            {getDesiredPage(props.pageIndex)}
        </div>
    );
}

export default connect(mapStateToProps)(App);