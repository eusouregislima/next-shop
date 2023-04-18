import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home"

import eu from '../assets/eu.jpg'
import pizza from '../assets/pizza.jpg'
import post from '../assets/post.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={eu} width={520} height={480} alt="" />

        <footer>
          <strong>
            Exemplo 1
          </strong>
          <span>
            R$ 1997,00
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={pizza} width={520} height={480} alt="" />

        <footer>
          <strong>
            Exemplo 2
          </strong>
          <span>
            R$ 997,00
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={post} width={520} height={480} alt="" />

        <footer>
          <strong>
            Exemplo 1
          </strong>
          <span>
            R$ 1997,00
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={post} width={520} height={480} alt="" />

        <footer>
          <strong>
            Exemplo 1
          </strong>
          <span>
            R$ 1997,00
          </span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
