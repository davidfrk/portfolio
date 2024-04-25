import ItemShowcase from '../display/ItemShowcase'

import image0 from '/images/image0.jpg'
import image1 from '/images/image1.jpg'
import image2 from '/images/image2.jpg'
import image3 from '/images/image3.jpg'
import image4 from '/images/image4.jpg'
import image5 from '/images/image5.jpg'

const items = [
  {image: image0, alt:"showcase", title:"Sítio - Igarapé", description:"R$680.000"},
  {image: image1, alt:"showcase", title:"Casa - Betim", description:"R$990.000"},
  {image: image2, alt:"showcase", title:"Apartamento - Contagem", description:"R$1.500.000"},
  {image: image3, alt:"showcase", title:"Sítio - Igarapé", description:"R$550.000"},
  {image: image4, alt:"showcase", title:"Apartamento - Belo Horizonte", description:"R$1.880.000"},
  {image: image5, alt:"showcase", title:"Fazenda - Igarapé", description:"R$900.000"},
]

function Home() {
  return (
    <div className='w-full h-full bg-slate-800'>
      <ItemShowcase items={items} />
    </div>
  )
}

export default Home
