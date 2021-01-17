import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

export default function Home({data}) {
  return (
    <Layout>
      <SEO
        title={`Chi sono – ${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.description}
      />
      
      <h1>Chi Sono</h1>

      <p>Ciao, io sono Cleopatra. Sono stata sempre "innamorata" dell'handmade, del recupero e della creatività. L'ultima mia passione nasce semplicemente da un viaggionel web. La foto di un tavolo rivisitato in stile shabby chic è stato amore a prima vista, dopodiché il mio spirito autodidatta ha fatto il suo dovere! Spero di riuscire a trasmettervi la mia passione, a portarvi nel mio mondo, tra handmade e shabby, perché in ogni oggetto, in ogni pezzo che passa tra le mie mani, rimane anche un po' del mio cuore! Grazie a tutti coloro che vorranno condividere la mia anima, che passeranno un po' del loro tempo in mia compagnia!</p>
      <p>Sono una fan del riciclo e del riutilizzo di oggetti che per la maggior parte delle persone vengono considerati pattume. La trasformazione in sé dà tantissima soddisfazione, quando un progetto è vivo solo nella tua mente e poi diventa realtà, quando il lavoro è finito, allora sì che dà tanta contentezza. Ho iniziato, un po' per bisogno, un po' per mettermi in gioco, perché secondo me solo così una persona rende di più. Da sempre, tutto ciò che possono creare le mani, mi ha affascinato, quando trovo così per caso, nei giri per i mercatini, un oggetto, quando vedo la sua storia, so che sta a me aggiungere un altro po' di vita.</p>
      <p>Sono una persona autodidatta, ho trovato su internet la mia fonte, la mia scuola del mestiere. Ho sempre creduto che provare e cercare nelle proprie capacità la soluzione dei problemi, sia la strada giusta da percorere. E così nasce l'idea di questo blog. Avere uno spazio in cui poter condividere le mie esperienze.</p>
      <p>Circondarsi di passioni e riempire la vita con ciò che dia fellicità, trovo che sia il modo giusto per vivere. La mia "follia" è nata così per caso, quando davanti ad un altro nuovo trasloco dovevo creare un ambiente per la mia famiglia. Per me lo spazio dove vivi e dove passi il tempo che ti rimane dopo una giornata di lavoro è essenziale. Deve essere pieno di armonia, pieno di ciò che ti rende sereno.</p>
      <p>Nella mia ricerca di idee mi sono imbattuta nella foto di un tavolo rivisitato, da qui è nato l'amore, è scoccata la scintilla tra me e lo shabby. Lo so che di questo si potrebbe parlare tanto, che lo stile è ciò che dice uno o piuttosto ciò che afferma un altro. Per me è un connubio perfetto tra il recupero e lo stile romantico che amo tanto.</p>
      <p>Mi piacerebbe che questo diventi uno spazio dove posso dare voce ai miei progetti, dove crescere insieme a voi, da dove possiamo prendere spunto tutti. Io credo che lo scambio di idee, di prove riuscite o meno, può aiutare.</p>
      <p>Un altro mio obiettivo è quello di condividere con voi la mia teoria che si può creare non avendo tanto, che solo inseguendo i tuoi sogni puoi fare di tutto.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`