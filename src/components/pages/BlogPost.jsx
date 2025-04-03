import { Link, useParams } from "react-router-dom"
import { blogPosts } from "../../data/blogPosts"
import styles from "./BlogPost.module.css"

export default function BlogPost() {
  const { id } = useParams();

  return <div className={`text-[var(--text-color-2)] p-12 md:max-w-[1000px] mx-auto ${styles.container}`}>
    {blogPosts.find(post => post.link.split("/")[2] === id).content()}
    <div className="mt-8 py-2 border-t-2 text-right"><Link to="/blog">← Voltar ao Blog</Link></div>
  </div>;
}