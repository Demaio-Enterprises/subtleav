import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import ImageSlider, { ImgCarousel } from '@/components/Carousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Subtle AV</title>
        <meta
          name="description"
          content="Subtle Installation. Brilliant Inspiration"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        <ImageSlider/>
        {/* <Testimonials /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
