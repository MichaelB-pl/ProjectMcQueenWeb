import './app.css';
import React from 'react';
import { connect } from 'react-redux';
import { Actions as Pages } from './reducers/app-reducer';

import MenuPage from '../menu/menu';
import AlphabetPage from '../alphabet/alphabet';


const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

function getDesiredPage(page) {
    switch (page) {
        case Pages.MENU_PAGE:
            return (<MenuPage />);
        case Pages.ALPHABET_PAGE:
            return (<AlphabetPage />);
        default:
            return null;
    }
}

function App(props) {
    return (
        <div className="app">
            {getDesiredPage(props.page)}
        </div>
    );
}

export default connect(mapStateToProps)(App);