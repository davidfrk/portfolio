import { useRef, useEffect, useState } from 'react'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import styles from './ItemShowcase.module.css'

function ItemShowcase({ items }) {
  const container = useRef(null)
  const [firstElement, setFirstElement] = useState()

  useEffect(() => {
    const first = container.current.firstElementChild
    first.classList.add(styles.firstElement)
    setFirstElement(first)
  }, [])

  function next() {
    container.current.append(container.current.firstElementChild)
    const lastElement = container.current.lastElementChild
    
    lastElement.classList.add(styles.slide_to_last)
    setTimeout(() => {
      lastElement.classList.remove(styles.slide_to_last)
    }, 800);

    updateFirstElement()
  }

  function prev() {
    container.current.prepend(container.current.lastElementChild)
    updateFirstElement()
  }

  function updateFirstElement() {
    firstElement.classList.remove(styles.firstElement)
    const new_first = container.current.firstElementChild
    new_first.classList.add(styles.firstElement)
    setFirstElement(new_first)
  }

  useEffect(() => {

  }, [])

  return (
    <div className='w-full h-full flex justify-center items-center overflow-hidden pb-[128px] pt-[60px]'>
      <div className='flex flex-col'>
        <div ref={container} className={styles.container} style={{}}>
          {items && items.map((item, index) => (
            <div className={styles.item} key={index}>
              <img src={item.image} alt={item.alt} className="w-full h-full object-cover"/>
              <div className={styles.textContainer}>
                <h1>{item.title}</h1>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-1/2 flex gap-4 mt-4 justify-center z-10'>
          <button
            className="rounded-full text-[64px] text-slate-300 hover:text-[var(--accent-color)]"
            type="button" onClick={prev} aria-label="Ir para item anterior"
          >
              <IoIosArrowDropleft />
            </button>
          <button
            className="rounded-full text-[64px] text-slate-300 hover:text-[var(--accent-color)]" 
            type="button" onClick={next} aria-label="Ir para próximo item"
          >
            <IoIosArrowDropright />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemShowcase
