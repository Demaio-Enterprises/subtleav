import Link from 'next/link'

import { Container } from '../components/Container'
// import { Logo } from '@/components/Logo'
import { NavLink } from '../components/NavLink'
import SvgSubtleAvLogo from '../components/Subtle_AV_Logo'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-5">
          <div className="flex justify-center">
            <SvgSubtleAvLogo className="mx-auto h-10 w-auto" />
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="mailto:sibleym@subtleav.com">Contact</NavLink>
              <NavLink href="#services">Gallery</NavLink>
              <NavLink href="#testimonials">About</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0 justify-center">
            Copyright &copy; {new Date().getFullYear()} Subtle AV. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
