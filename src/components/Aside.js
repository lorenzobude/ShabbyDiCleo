import React from "react"
import { Link } from "gatsby"

import imgCleo from "../images/layout/cleo.png"
import imgIcoFacebook from "../images/layout/ico-facebook.svg"
import imgIcoInstagram from "../images/layout/ico-instagram.svg"
import imgIcoPinterest from "../images/layout/ico-pinterest.svg"

export default function Aside() {
  return (
    <aside>
      <div className="profile">
        <h3>Ciao, sono Cleopatra!</h3>
        <img className="profile-img" src={imgCleo} alt="Cleopatra di Shabby di Cleo" />
        <p>Sono stata sempre “innamorata” dell’Handmade, del Recupero e della Creatività.</p>
        <p>Spero di riuscire a trasmettervi la mia passione, a portarvi nel mio mondo, tra Handmade e Shabby,  perché in ogni oggetto, in ogni pezzo che passa tra le mie mani, rimane anche un po’ del mio cuore!</p>
        <Link to="/chi-sono" className="read-all">A proposito di me...</Link>
      </div>

      <div className="widget contact">
        <a href="mailto:">Scrivimi una mail</a>
      </div>

      <div className="widget social">
        <a href="#" target="_blank"><img src={imgIcoFacebook} alt="Facebook" /></a>
        <a href="#" target="_blank"><img src={imgIcoInstagram} alt="Instagram" /></a>
        <a href="#" target="_blank"><img src={imgIcoPinterest} alt="Pinterest" /></a>
      </div>
    </aside>
  )
}