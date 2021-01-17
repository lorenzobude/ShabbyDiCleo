import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

export default function NotFound({data}) {
  return(
    <Layout>
      <SEO
        title={`${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.description}
      />

      <h1>Pagina non trovata</h1>
      <div>
        Mi spiace, ma la pagina che stavi cercando potrebbe essere stata spostata o eliminata.
      </div>
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