import React from "react"
import Header from "../components/Header"
import Aside from "../components/Aside"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="it" />
      </Helmet>

      <Header />

      <section className="page">
        <div className="container">
          <main>
            {children}
          </main>

          <Aside />
        </div>
      </section>

      <Footer />
    </>
  )
}