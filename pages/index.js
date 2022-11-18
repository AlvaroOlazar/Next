import Link from 'next/link'
import { Cabecalho } from './api/component/cabecalho'
import { Carousel } from './api/component/carousel'
import { Footer } from './api/component/footer'

export default function Home() {
  return (
    <header>
      <Cabecalho></Cabecalho>
      <section className="barramenu">
            <div className="creatina">
              <Link href="/teste">Creatina</Link>
            </div>
            <div className="wheyprotein">
              <Link href="/teste" >Whey Protein</Link>
            </div>
        </section>
        <Carousel></Carousel>
        <Footer></Footer>
        
      </header>
  )
}
