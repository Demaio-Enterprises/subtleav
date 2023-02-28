import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import SvgSubtleAvLogo from '@/components/Subtle_AV_Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Quote - Subtle AV</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <div className='flex justify-center'>
          <Link href="/" aria-label="Home">
            <SvgSubtleAvLogo className="h-10 w-auto" />
          </Link>
          </div>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get A Quote
            </h2>
            {/* <p className="mt-2 text-sm text-gray-700">
              Already a client?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p> */}
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
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          {/* <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option>Google</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>Word of Mouth</option>
          </SelectField> */}
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
