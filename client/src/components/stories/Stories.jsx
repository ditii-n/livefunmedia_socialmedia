import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Story from "../story/Story";

const Stories = ({userId}) => {
  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories?userId="+userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="stories">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((story) => <Story story={story} key={story.id} />)}
    </div>
  );
};


  /*const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );

  //TODO Add story using react-query mutations and use upload function.

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilepic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  );*/

  /*const {currentUser}=useContext(AuthContext);
  
  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );



  const storiesuser=[
    {
        id:1,
        name:"Aditi Naithani",
        img:"https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg"
    }
  ]
  const stories=[
    {
        id:1,
        name:"Aditi Naithani",
        img:"https://images.pexels.com/photos/15895540/pexels-photo-15895540.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" 
    },
    {
        id:2,
        name:"Aditi Naithani",
        img:"https://images.pexels.com/photos/10384486/pexels-photo-10384486.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
    },
    {
        id:3,
        name:"Aditi Naithani",
        img:"https://images.pexels.com/photos/12329780/pexels-photo-12329780.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
    },
    {
        id:4,
        name:"Aditi Naithani",
        img:"https://images.pexels.com/photos/16356380/pexels-photo-16356380.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
    },

  ]    

  return (
    <div className='stories'>
    
         <div className="story">
                <img src={"/upload/" + currentUser.profilepic} alt=""/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div> 
        
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt=""/>
                <span>{story.name}</span>
                
            </div>
        ))}
    </div>
    /*<div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilepic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
    </div>

  )*/
//};

export default Stories;
