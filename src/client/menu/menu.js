import './menu.css';
import React from 'react';

import ListItem from './list-item/menu-list-tem';
import { getAllPagesWithoutMenuPage } from '../app/actions/app-actions';

export default function Menu() {
    const pages = getAllPagesWithoutMenuPage();

    return (
        <div className="menu-container">
            <ul className="menu-list noselect">
                {pages.map((page, index) => {
                    return (<ListItem
                        pageName={page.name}
                        pageIndex={page.index}
                        preparePage={page.prepare}
                        key={`menu_item_${index}`}
                    />);
                })}
            </ul>
        </div>
    );
}
