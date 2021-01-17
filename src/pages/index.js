import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

export default function Home({data}) {
  return (
    <Layout>
      <SEO
        title={`${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.description}
      />

      <h1 className="home-h1">{`${data.site.siteMetadata.title} – ${data.site.siteMetadata.description}`}</h1>

      {data.allMarkdownRemark.edges.map(({node}) => (

        <article key={node.id} className="preview">
          <div className="preview-img">
            <Link to={node.frontmatter.slug} className="teaser-img">
              <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} />
            </Link>
          </div>
          <div className="preview-txt">
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.summary}</p>
              <Link to={node.frontmatter.slug} className="read-all">Leggi tutto</Link>
          </div>
        </article>

      ))}
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            summary
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
    }
  }
`