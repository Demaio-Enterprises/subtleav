import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import SvgSubtleAvLogo from '@/components/Subtle_AV_Logo'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Register() {
  return (
    <>
      <Head>
        <title>Quote - Subtle AV</title>
      </Head>
      <Header/>
      <AuthLayout>
        <div className="flex flex-col">
          <div className='flex justify-center'>
          <Link href="/" aria-label="Home">
            <SvgSubtleAvLogo className="w-40 h-40" />
          </Link>
          </div>
          <div className="mt-20 flex justify-center">
            <h2 className="text-lg font-semibold text-gray-900">
              Get A Quote
            </h2>
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Phone number"
            id="phone_number"
            name="phone_number"
            type="phone number"
            autoComplete="phone number"
            required
          />
          
          <div className='col-span-full'>
              <label for="comment" class="block text-sm font-medium text-gray-700">Enter Event Details</label>
            <div class="mt-1">
              <textarea rows="4" name="comment" id="comment" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
          </div>
          <div className='text-xs italic max-w-full'>
          We never share your information with anyone (not even for money)
          </div>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Get Quote <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
