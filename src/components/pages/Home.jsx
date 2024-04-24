import ImageShowcase from '../display/ImageShowcase'

const images = [
  "/src/images/image0.jpg",
  "/src/images/image1.jpg",
  "/src/images/image2.jpg",
  "/src/images/image3.jpg",
  "/src/images/image4.jpg",
  "/src/images/image5.jpg"
]

function Home() {
  return (
    <div className='w-full overflow-hidden bg-slate-800'>
      <div className='w-full h-full flex justify-center items-center'>
        <ImageShowcase images={images} />
      </div>
    </div>
  )
}

export default Home
