import './main-list-item.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { goToPage } from '../../app/actions/app-actions';

const mapDispatchToProps = (dispatch) => {
    return {
        goToPage: page => dispatch(goToPage(page))
    };
};

class MainListItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="main-list-item" onClick={() => this.props.goToPage(this.props.action)}>
                {this.props.pageName}
            </div>
        );
    }
}


export default connect(null, mapDispatchToProps)(MainListItem);
