import './menu-list-item.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPageIndex } from '../../app/actions/app-actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setPageIndex: index => dispatch(setPageIndex(index))
    };
};

class MenuListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="menu-list-item"
                onClick={this.goToPage.bind(this)}>
                {this.props.pageName}
            </li>
        );
    }

    goToPage() {
        this.props.preparePage();
        this.props.setPageIndex(this.props.pageIndex);
    }
}


export default connect(null, mapDispatchToProps)(MenuListItem);
