import { useRef, useEffect, useState } from 'react'

function Popup({ isOpen, text }) {
  const popup = useRef(null)
  const [alignRight, setAlignRight] = useState(false)

  useEffect(() => {
    if (!isOpen || !popup.current) return

    const rightDistance = window.innerWidth - popup.current.parentElement.getBoundingClientRect().right
    const length = popup.current.getBoundingClientRect().width

    setAlignRight(rightDistance < length)
  }, [isOpen])

  return (
    <dialog 
      ref={popup}
      open={isOpen} 
      className={`
        absolute -top-[2em] left-[50%] p-2 bg-[var(--background-color)]
        rounded-sm text-[var(--accent-color)] 
        ${alignRight ? 'translate-x-[-100%]' : ''}
      `}
    >
      {text}
    </dialog>
  )
}

export default Popup
