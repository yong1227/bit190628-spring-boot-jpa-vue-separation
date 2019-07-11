import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import { prototype } from 'events';

export default function Nav({categories}){
    const to = users => `/user/${users.id}`;
    return (
        <ul>
            {
                categories.map(users => {
                    <li key={`nav-item-${users.id}`}>
                        <Link to={to(users)}>
                            {users.name}
                        </Link>
                    </li>
                })
            }
        </ul>
    )
}

Nav.propTypes = {
    categories: PropTypes.arraryOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }
        )
    ).isRequired
}