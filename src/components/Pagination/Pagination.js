import React from 'react';
import classes from './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {

        pageNumbers.push(index);
    }

    return (
        <div className="paginationContainer">
            <ul>
                {
                    pageNumbers.map(number => {
                        return (<li key={number}>
                            <a onClick={() => paginate(number)}>{number}</a>
                        </li>)
                    })
                }
            </ul>
        </div>
    );
}

export default Pagination;