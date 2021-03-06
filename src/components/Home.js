import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from '../logo.png'
class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            this.setState(
                {
                    posts: res.data.slice(0, 10)
                }
            )
        })

    }


    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                <div className="post card" key={post.id}>
                    
                    <div className="card-content  overflow-hidden padding_left 20px">
                        <Link to={'/Post/' + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>

                        <p>{post.body}</p>
                    </div>
                </div>)
            })
        ) :
            (
                <div className="center">No Data</div>

            )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;