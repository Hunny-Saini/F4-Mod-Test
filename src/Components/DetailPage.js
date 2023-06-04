import React from "react";
import { useParams } from "react-router-dom";


const DetailPage = ({data}) => {

    const {id} = useParams();
    const post = data.find((item)=>item.id == id)

    console.log(post);

    return(
        <div className="detail-container">
            <p className="detail-p">Details Page For Post With ID {id}</p>
            <div className="detail-post">
                <img src={post.image} alt="img"/>
                <p>User ID: {post.userId}</p>
                <p>Title : {post.title}</p>
                <p>Body : {post.body}</p>
            </div>
        </div>
    )
}

export default DetailPage;