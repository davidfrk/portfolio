import ItemShowcase from '../display/ItemShowcase'

const items = [
  {image: "/src/images/image0.jpg", alt:"showcase", title:"Sítio - Igarapé", description:"R$680.000"},
  {image: "/src/images/image1.jpg", alt:"showcase", title:"Sítio - Belo Horizonte", description:"R$680.000"},
  {image: "/src/images/image2.jpg", alt:"showcase", title:"Sítio - Igarapé", description:"R$680.000"},
  {image: "/src/images/image3.jpg", alt:"showcase", title:"Sítio - Igarapé", description:"R$680.000"},
  {image: "/src/images/image4.jpg", alt:"showcase", title:"Sítio - Igarapé", description:"R$680.000"},
  {image: "/src/images/image5.jpg", alt:"showcase", title:"Sítio - Igarapé", description:"R$680.000"},
]

function Home() {
  return (
    <div className='w-full overflow-hidden bg-slate-800'>
      <div className='w-full h-full flex justify-center items-center'>
        <ItemShowcase items={items} />
      </div>
    </div>
  )
}

export default Home
