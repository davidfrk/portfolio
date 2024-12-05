import { Link } from "react-router-dom";
import { imageRouter } from "../../utils/router";

export default function BlogPostDisplay({postData}) {
  return <Link to={postData.link} alt={postData.title}><div className="w-full h-full flex items-center gap-4 rounded-lg hover:cursor-pointer hover:bg-gray-200">
    <img
      className="rounded-lg w-[300px] h-[210px] object-cover min-w-[300px] min-h-[210px]"
      width="300px" height="210px" alt={postData.thumbnailAlt} src={imageRouter(postData.thumbnail)}
    />
    <div className="flex flex-col gap-4">
      <h1>{postData.title}</h1>
      <p className="text-gray-500">
        {postData.publishDate} | {postData.techList}
      </p>
      <p>
        {postData.description}
      </p>
    </div>
  </div>
  </Link>
}