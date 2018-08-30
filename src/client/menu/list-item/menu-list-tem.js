import './menu-list-item.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { goToPage } from '../../app/actions/app-actions';

const mapDispatchToProps = (dispatch) => {
    return {
        goToPage: page => dispatch(goToPage(page))
    };
};

class MenuListItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li className="menu-list-item" onClick={() => this.props.goToPage(this.props.action)}>
                {this.props.pageName}
            </li>
        );
    }
}


export default connect(null, mapDispatchToProps)(MenuListItem);
