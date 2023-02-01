import { useState } from "react";
import Posts from "../Component/Posts";

function Dashboard(){


    // const {postsState, setPostsState} = useState([
    //     {id: 1, title:'OOP', author:'Pooja Kumari'},
    //     {id: 2, title:'WAA', author:'Pooja Kumari'},
    //     {id: 3, title:'EA',  author:'Pooja Kumari'}
    // ]);

    const postsState= [
        {id: 1, title:'OOP', author:'Pooja Kumari'},
        {id: 2, title:'WAA', author:'Pooja Kumari'},
        {id: 3, title:'EA',  author:'Pooja Kumari'}
    ];


   const changeName  = ()=> {
    console.log("change name");
    // postsState[0] =  {id: 1, title:'Object oriented', author:'Pooja Kumari'};
   }

    
    return (
        <div>
         <h1>Dashboard</h1>   
         <div className="posts">
         <Posts posts={postsState}  />
         </div>

         <input  type="text" />
         <button onClick={changeName} >Change Name </button>
        </div>
    );
}

export default Dashboard;
