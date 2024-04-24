import { useRef, useEffect, useState } from 'react'

import styles from './ImageShowcase.module.css'

function ImageShowcase({ images }) {
  const container = useRef(null)
  const [firstImage, setFirstImage] = useState(images[0])

  function next() {
    container.current.append(container.current.firstElementChild)

    const lastElement = container.current.lastElementChild
    setFirstImage(lastElement.src)
    lastElement.classList.add(styles.slide_to_last)
    setTimeout(() => {
      lastElement.classList.remove(styles.slide_to_last)
    }, 800);
  }

  function prev() {
    container.current.prepend(container.current.lastElementChild)
  }

  useEffect(() => {

  }, [])

  return (
    <div className='flex flex-col pb-[150px]'>
      <div ref={container} className={styles.container} style={{}}>
        {images && images.map((image, index) => (
          <img src={image} alt="Showcase" key={index}/>
        ))}
      </div>
      <div className='w-1/2 flex gap-4 mt-4 justify-center pr-4 z-10'>
        <button className="bg-[var(--accent-color)] py-2 px-8 rounded-full" type="button" onClick={prev} > Prev </button>
        <button className="bg-[var(--accent-color)] py-2 px-8 rounded-full" type="button" onClick={next} > Next </button>
      </div>
      
    </div>
  )
}

export default ImageShowcase
