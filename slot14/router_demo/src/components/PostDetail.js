import React from "react";

import { useParams } from "react-router-dom";
function PostDetail() {


   const {id}=useParams(); 
    return (
        <div>
            <h2>chi tiết bài viết {id}</h2>
            <p>đây là thông tin chi tiết bài viết {id}</p>
        </div>
    );
};


export default PostDetail;