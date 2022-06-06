import {useAtom} from "jotai"
import Head from "next/head"
import Link from "next/link"
import React, {FC, Fragment} from "react"

import Cart from "~components/icons/cart"
import navItems from "~data/nav-items.json"
import {cartAtom} from "~state/cart"

const CartBox = () => {
  const [value] = useAtom(cartAtom)
  return (
    <div className="cart flex items-center gap-2 min-w-[7rem] justify-center">
      <span role="image">
        <Cart />
      </span>
      <span>${value.total.toFixed(2)}</span>
    </div>
  )
}

interface LayoutTitleProps {
  styles?: string
}
const LayoutTitle = ({styles = ""}: LayoutTitleProps) => (
  <Link href="/">
    <a
      className={`text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-blue-500 block hover:scale-105 transition-all ease-out ${styles}`}
    >
      Masiu&apos;s Sick images
    </a>
  </Link>
)

const Header = () => {
  return (
    <header className="h-[10vh] mb-2 bg-blue-100 flex items-center text-slate-800 shadow-md">
      <div className="w-[90%] md:w-[80%] m-auto  flex justify-between">
        <LayoutTitle />
        <nav className="flex flex-1">
          <ul className="px-2  hidden sm:flex sm:w-[60%] md:w-[50%] justify-evenly m-auto">
            {navItems.map(({name, path}) => (
              <li key={name} className="hover:text-blue-600 capitalize">
                <Link href={path}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CartBox />
      </div>
    </header>
  )
}

const Footer = () => {
  const date = new Date()
  return (
    <footer className="h-[10vh] shadow-md bg-blue-100 flex items-center text-slate-800">
      <div className="w-[90%] md:w-[80%] m-auto py-2 flex flex-col items-center justify-center ">
        <LayoutTitle styles="pb-1" />
        <small>&copy; Masiu&apos;s Sick images {date.getFullYear()} </small>
      </div>
    </footer>
  )
}

type Props = {
  children: React.ReactNode
  title?: string
}

const Layout: FC<Props> = ({children, title = "Sick imags"}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

const InnerLayout: FC<Props> = ({children}) => (
  <main className="min-h-[calc(100vh-20vh)] m-auto max-w-[90%] md:max-w-[80%] mb-2 ">
    {children}
  </main>
)
export {Layout, InnerLayout}
