import { useRef, useEffect, useState } from 'react'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import styles from './ItemShowcase.module.css'

function ItemShowcase({ items, customClass }) {
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
    <div className={`w-full flex flex-col justify-center items-center ${customClass}`}>
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
        <div className='w-1/2 flex gap-4 mt-4 justify-center z-10'>
          <button
            className="rounded-full text-[64px] text-[var(--background-color)] hover:text-[var(--accent-color)]"
            type="button" onClick={prev} aria-label="Ir para item anterior"
          >
            <IoIosArrowDropleft className='shadow-drop-md opacity-70 hover:opacity-100'/>
            </button>
          <button
            className="rounded-full text-[64px] text-[var(--background-color)] hover:text-[var(--accent-color)]" 
            type="button" onClick={next} aria-label="Ir para próximo item"
          >
            <IoIosArrowDropright className='shadow-drop-md opacity-70 hover:opacity-100'/>
          </button>
        </div>
      </div>

      <div className={styles.mainDescription}>
        <h1 className='mb-12 text-[4rem] text-center'>{firstItem.title}</h1>
        <h2 className='text-3xl mb-12 text-center'>{firstItem.description}</h2>
        <div className='text-xl mb-28 text-center'><span>{firstItem.technologies}</span></div>
        <div className='text-justify text-xl text'>
          <p>
              Lorem ipsum dolor sit amet. Ex dolorum fugiat ut omnis molestiae non molestiae autem!
              Ab animi voluptatum ut consequatur eligendi qui voluptatum dolor?
          </p>
          <p>
              Et accusantium harum eum quasi inventore est necessitatibus accusamus?
              At quod accusantium non pariatur voluptatem rem fugiat voluptatibus ea esse dolorem.
          </p>
          <p>
            Vel consequatur harum ea doloremque optio est distinctio incidunt non temporibus asperiores aut 
            aperiam labore qui necessitatibus quam. Est delectus saepe qui natus eius ut quia illum sed voluptatem 
            commodi vel omnis animi ut numquam repellat? Ut omnis nesciunt ea quam cupiditate est optio laudantium qui sunt consequatur 
            qui architecto ratione sed maxime voluptatem nam voluptas eaque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ItemShowcase
