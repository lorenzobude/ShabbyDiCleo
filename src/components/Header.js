import React from "react"
import { Link } from "gatsby"

import imgLogo from "../images/layout/logo.svg"

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="site-logo">
            <img src={imgLogo} alt="Shabby di Cleo"/>
        </Link>

        <p className="site-desc">Handmade, Vintage e Recupero come stile di vita.</p>
      </div>
    </header>
  )
}