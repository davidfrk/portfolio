import { useParams } from "react-router-dom"
import { blogPosts } from "../../data/blogPosts"
import styles from "./BlogPost.module.css"

export default function BlogPost() {
  const { id } = useParams();

  return <div className={`text-[var(--text-color-2)] p-12 md:max-w-[1000px] mx-auto ${styles.container}`}>
    {blogPosts.find(post => post.link.split("/")[2] === id).content()}
  </div>;
}