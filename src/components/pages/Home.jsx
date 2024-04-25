import ItemShowcase from '../display/ItemShowcase'

const items = [
  {image: "/src/images/image0.jpg", alt:"showcase", title:"Sítio - Igarapé", description:"R$680.000"},
  {image: "/src/images/image1.jpg", alt:"showcase", title:"Casa - Betim", description:"R$990.000"},
  {image: "/src/images/image2.jpg", alt:"showcase", title:"Apartamento - Contagem", description:"R$1.500.000"},
  {image: "/src/images/image3.jpg", alt:"showcase", title:"Sítio - Igarapé", description:"R$550.000"},
  {image: "/src/images/image4.jpg", alt:"showcase", title:"Apartamento - Belo Horizonte", description:"R$1.880.000"},
  {image: "/src/images/image5.jpg", alt:"showcase", title:"Fazenda - Igarapé", description:"R$900.000"},
]

function Home() {
  return (
    <div className='w-full h-full bg-slate-800'>
      <ItemShowcase items={items} />
    </div>
  )
}

export default Home
