import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '../components/Container'
import backgroundImage from '../images/background-features.jpg'

const features = [
  {
    title: 'Corporate Events',
    description:
      "",
    image: 'https://s3.us-east-2.amazonaws.com/subtleav.com/edited_event_pics/IMG_5940.webp',
  },
  {
    title: 'Weddings',
    description:
      "",
    image: 'https://s3.us-east-2.amazonaws.com/subtleav.com/edited_event_pics/IMG_5920.webp',
  },
  {
    title: 'Fundraisers',
    description:
      "",
    image: 'https://s3.us-east-2.amazonaws.com/subtleav.com/edited_event_pics/IMG_0096.webp',
  },
  {
    title: 'Music Venues',
    description:
      '',
    image: 'https://s3.us-east-2.amazonaws.com/subtleav.com/edited_event_pics/IMG_0341.webp',
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="services"
      aria-label="Primary Events we service"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        priority
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center sm:text-center xs:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl flex justify-center">
            Events We Service
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100 flex justify-center">
            {/* make a lasting impression  */}
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
                              <>
                   <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                    <Tab.List className="relative z-10 flex flex-wrap gap-x-4 gap-y-1 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                      {features.map((feature, featureIndex) => (
                        <div
                          key={feature.title}
                          className={clsx(
                            'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                            selectedIndex === featureIndex
                              ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                              : 'hover:bg-white/10 lg:hover:bg-white/5'
                          )}
                        >
                          <h3>
                            <Tab
                              className={clsx(
                                'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                                selectedIndex === featureIndex
                                  ? 'text-blue-600 lg:text-white'
                                  : 'text-blue-100 hover:text-white lg:text-white'
                              )}
                            >
                              <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                              {feature.title}
                            </Tab>
                          </h3>
                          <p
                            className={clsx(
                              'mt-2 hidden text-sm lg:block',
                              selectedIndex === featureIndex
                                ? 'text-white'
                                : 'text-blue-100 group-hover:text-white'
                            )}
                          >
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </Tab.List>
                  </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                   <Tab.Panel key={feature.title} unmount={false}>
                   <div className="relative sm:px-6 lg:hidden">
                     <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center max-w-screen-sm max-w-sm">
                       {feature.description}
                     </p>
                   </div>
                   <div className="mt-10 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 max-w-full sm:w-auto">
                     <Image
                       className="w-full"
                       src={feature.image}
                       alt={feature.title}
                       width={1024}
                       height={768}
                     />
                   </div>
                 </Tab.Panel>
                
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
