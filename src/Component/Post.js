import './Post.css'
const Post = (props) => {
    console.log("----------inside post");
    return (
        <div >
            <label>ID: {props.id}</label><br />
            <label>TITLE: {props.title}</label><br />
            <label>AUTHOR: {props.author}</label><br />
        </div>
    );
}

export default Post;