import BlogPostDisplay from "../display/BlogPostDisplay.jsx"
import { blogPosts } from "../../data/blogPosts.jsx"

function Blog() {
  return (
    <div className='text-[var(--text-color-2)] w-full min-h-[80vh] p-12 md:max-w-[1200px] mx-auto'>
      <h1 className="mb-12">Posts</h1>
      <div className="flex flex-col gap-8">
        {blogPosts.map((postData, index) => <BlogPostDisplay postData={postData} key={index}/>)}
      </div>
    </div>
  )
}

export default Blog
