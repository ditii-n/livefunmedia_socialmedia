import "./story.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Story = ({ story }) => {
  const { currentUser } = useContext(AuthContext);


  return (
    <div className="stories">
      <div className="story">
        <img src={"/uploadstories/" + story.img} alt="" />
        <span>{story.name}</span>
        {/* /<button>+</button> */}
      </div>
    </div>
  );
//   return (
//     <div className="post">
//       <div className="container">
//         <div className="user">
//           <div className="userInfo">
//             <img src={"/upload/"+post.profilepic} alt="" />
//             <div className="details">
//               <Link
//                 to={`/profile/${post.userId}`}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <span className="name">{post.name}</span>
//               </Link>
//               <span className="date">{moment(post.time).fromNow()}</span>
//             </div>
//           </div>
//           <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
//           {menuOpen && post.userId === currentUser.id && (
//             <button onClick={handleDelete}>delete</button>
//           )}
//         </div>
//         <div className="content">
//           <p>{post.desc}</p>
//           <img src={"/upload/" + post.img} alt="" />
//         </div>
//         <div className="info">
//           <div className="item">
//             {isLoading ? (
//               "loading"
//             ) : data.includes(currentUser.id) ? (
//               <FavoriteOutlinedIcon
//                 style={{ color: "red" }}
//                 onClick={handleLike}
//               />
//             ) : (
//               <FavoriteBorderOutlinedIcon onClick={handleLike} />
//             )}
//             {data?.length} Likes
//           </div>
//           <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
//             <TextsmsOutlinedIcon />
//             See Comments
//           </div>
//           <div className="item">
//             <ShareOutlinedIcon />
//             Share
//           </div>
//         </div>
//         {commentOpen && <Comments postId={post.id} />}
//       </div>
//     </div>
//   );
};

export default Story;
