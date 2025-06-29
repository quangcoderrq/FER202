import React from "react";
import { Link } from "react-router-dom";
const Post = () => {
    return(
        <div>
            <h1>Post List</h1>
            <ul>
                <li><Link to="/post/1">bài viết 1</Link></li>
                <li><Link to="/post/2">bai viet 2</Link></li>
                <li> <Link to="/post/3">bai viet 3</Link></li>
            </ul>
        </div>

    );   
};

export default Post;