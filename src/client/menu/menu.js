import './menu.css';
import React from 'react';

import ListItem from './list-item/menu-list-tem';
import { getAllPagesWithoutMenuPage } from '../app/actions/app-actions';

export default function Menu() {
    const pages = getAllPagesWithoutMenuPage();

    return (
        <ul className="menu-list">
            {pages.map((page, index) => (<ListItem pageName={page.name} action={page.action} key={index} />))}
        </ul>
    );
}
