import Post from "./Post";
import './Post.css'

const Posts = (props) => {

    console.log("Inside Posts");

    const post = props.posts.map(p => {
        return <div className="post">
            <Post
            id={p.id}
            title={p.title}
            author={p.author}
        />
        </div>
    });
    return post;

}

export default Posts;



