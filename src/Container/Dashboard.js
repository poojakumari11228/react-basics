import { useRef, useState } from "react";
import Posts from "../Component/Posts";

function Dashboard() {


    const [postsState, setPostsState] = useState([
        { id: 1, title: 'OOP', author: 'Pooja Kumari' },
        { id: 2, title: 'WAA', author: 'Pooja Kumari' },
        { id: 3, title: 'EA', author: 'Pooja Kumari' }
    ]);


    const inputRef = useRef();

    const changeName = () => {
        const val = inputRef.current.value;
        const newPosts = [...postsState];
        newPosts[0].title = val;
        setPostsState(newPosts);
    }


    return (
        <div>
            <h1>Dashboard</h1>
            <div className="posts">
                <Posts posts={postsState} />
            </div>

            <input type="text" ref={inputRef} />
            <button onClick={changeName} >Change Name </button>
        </div>
    );
}

export default Dashboard;
