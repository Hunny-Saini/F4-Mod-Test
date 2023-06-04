import { Link } from "react-router-dom"


const Card = ({post}) =>{
    // console.log(post);
    return(
        <Link to={`/item/${post.id}`} key={post.id}>
            <div className="item">
                <img src={post.image} alt="img"/>
                <p>User ID: {post.userId}</p>
                <p>Title : {post.title.slice(0,20)}...</p>
                <p>Body : {post.body.slice(0,90)} Read More...</p>
            </div>
        </Link>
                            
    )
}

export default Card;