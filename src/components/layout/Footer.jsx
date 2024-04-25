import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="p-4">
      <div className="w-full flex justify-center gap-4 items-center text-2xl mb-2">
        <Link
          to="https://www.linkedin.com/in/david-andrade-dk/"
          target="_blank"
          className="hover:text-[var(--accent-color)]"
        >
          <FaLinkedin/>
        </Link>
        <Link
          to="https://github.com/davidfrk"
          target="_blank"
          className="hover:text-[var(--accent-color)]"
        >
          <FaGithub/>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center">David &copy; 2024</div>
    </footer>
  )
}

export default Footer
