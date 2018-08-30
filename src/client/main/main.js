import './main.css';
import React from 'react';

import ListItem from './list-item/main-list-tem';
import { getAllPagesWithoutMainPage } from '../app/actions/app-actions';

export default function Main() {
    const pages = getAllPagesWithoutMainPage();

    return (
        <div>
            {pages.map((page, index) => (<ListItem pageName={page.name} action={page.action} key={index} />))}
        </div>
    );
}
