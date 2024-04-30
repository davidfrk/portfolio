import { useRef, useEffect, useState } from 'react'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import buttonImg from '/images/button.png'
import path from '/images/svg/path.svg'

import styles from './AnimationShowcase.module.css'
import AnimationManager from './AnimationManager';

function AnimationShowcase({ items, customClass }) {
  const container = useRef(null)
  const [firstElement, setFirstElement] = useState()
  const [firstItem, setFirstItem] = useState(items[0])

  useEffect(() => {
    const first = container.current.firstElementChild
    first.classList.add(styles.firstElement)
    setFirstElement(first)
  }, [])

  useEffect(() => {
    if (!firstElement) return

    const title = firstElement.querySelector("h1").textContent
    const item = items.find(e => (e.title === title))

    setFirstItem(item)
  }, [firstElement])

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

  function handleCardOnClick(e) {
    firstElement.classList.remove(styles.firstElement)
    container.current.append(firstElement)

    const target = e.target.closest(".card")
    container.current.prepend(target)
    target.classList.add(styles.firstElement)
    setFirstElement(target)
  }

  return (
    <div className={customClass}>
    <div className={`${styles.skew}`}>
      <div className={`w-full flex justify-center items-center`}>
        <div className={styles.main}>
          <div ref={container} className={styles.container}>
            {items && items.map((item, index) => (
              <div className={`card select-none ${styles.item}`} key={index} onClick={handleCardOnClick}>
                <img src={item.image} alt={item.alt} className="w-full h-full object-cover"/>
                {item.logo && <img src={item.logo} alt={item.alt} className={styles.logo}/>}
                <div className={styles.textContainer}>
                  <h1>{item.title}</h1>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttonsContainer}>
            <button
              className="rounded-full text-[64px] text-[var(--background-color)] hover:text-[var(--accent-color)]"
              type="button" onClick={prev} aria-label="Ir para item anterior"
            >
              <img src={buttonImg} alt="Prev" className='h-full'/>
              <p>Prev</p>
            </button>
            <button
              className="rounded-full text-[64px] text-[var(--background-color)] hover:text-[var(--accent-color)]" 
              type="button" onClick={next} aria-label="Ir para próximo item"
            >
              <img src={buttonImg} alt="Next" className='h-full'/>
              <p>Next</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <AnimationManager Animation={firstItem.animation} container={container}/>
    <div className={styles.mainDescription}>
      <div className='relative skew-y-[-30deg] rotate-[45deg] select-none'>
        <div className='absolute left-[32%] bottom-0'>
          <img src={path} alt="caminho curvado" width="400px" height="400px" draggable={false}/>
        </div>
      </div>
      <h1 className='text-[4rem] skew-y-[-30deg] rotate-[45deg] mb-12 text-center'>{firstItem.title}</h1>
      <h2 className='text-3xl skew-y-[-15deg] rotate-[25deg] mb-12 text-center'>{firstItem.description}</h2>
      <div className='text-xl skew-y-[-5deg] rotate-[10deg] mb-28 text-center'><span>{firstItem.technologies}</span></div>
    </div>
    </div>
  )
}

export default AnimationShowcase
