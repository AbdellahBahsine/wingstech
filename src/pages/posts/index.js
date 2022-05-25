import {useState, useEffect} from 'react';
import './posts.styles.css';

import axios from 'axios';

const PostsPage = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data))
    }, [])

    return (
        <div className="posts-page">
            {
                posts ?
                <>
                    <h1>Posts</h1>
                    <div className="posts">
                        {
                            posts?.map(post => {
                                return (
                                    <div key={post.id} className="post">
                                        <h3 className="post__title">{post.title}</h3>
                                        <p className="post__body">{post.body}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
                :
                <div class="lds-dual-ring"></div>
            }
        </div>
    )
}

export default PostsPage;