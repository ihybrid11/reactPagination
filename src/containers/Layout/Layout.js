import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';

import classes from './Layout.css';
import Posts from '../../components/Posts/Posts';

class Layout extends Component {
    state = {
        posts: [],
        currentPage: 1,
        postsPerPage: 5,
    }

    componentDidMount() {

        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);

                this.setState({ posts: response.data });
            });

    }

    paginate = (number) => {
        this.setState({ currentPage: number });
    }


    render() {
        const { posts } = this.state;
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


        const postList = currentPosts.length ? (<Posts currentPosts={currentPosts} />) :
            (<h1>No Posts</h1>);


        return (
            <div className="header">
                {postList}
                <Pagination postsPerPage={this.state.postsPerPage} totalPosts={posts.length} paginate={this.paginate} />
            </div>
        );
    }
}

export default Layout;