import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default function Page({data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return(
    <Layout>
      <SEO
        title={`${frontmatter.title} – ${data.site.siteMetadata.title}`}
        description={frontmatter.summary}
      />

      <h1>{frontmatter.title}</h1>
      <Img fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.title} className="teaser-img" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`