import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import ShareStory from "../../components/shareStory/ShareStory"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
       <ShareStory/> 
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home