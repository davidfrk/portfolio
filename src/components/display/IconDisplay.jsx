import { useState } from "react"
import Popup from "./Popup"

function IconDisplay({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  function openPopup(){
    setIsOpen(true)
  }

  function closePopup(){
    setIsOpen(false)
  }

  return (
    <div
      className="relative p-2 hover:bg-[var(--background-color)] hover:text-[var(--accent-color)] rounded-sm transition"
      onMouseEnter={openPopup}
      onMouseLeave={closePopup}
    >
      <Popup isOpen={isOpen} text={title}/>
      {children}
    </div>
  )
}

export default IconDisplay
