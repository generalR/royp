import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div className="container">
          <div className="row start-sm start-md start-lg hero_text">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-10">
              <h1>Projekt.</h1>
              <h2>
                På den här sidan hittar du en blandning av de webbplatser jag
                byggt tillsammans med projekt jag genomfört till några av de
                texter jag skrivit som används i undervisningen på Karlstad
                universitet.
              </h2>
            </div>
          </div>
          <div className="hero_arrow">
            <div className="hero_arrow_wrap">
              <svg
                data-v-262420ea=""
                width="46"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.102 4l-2.444-2.445.009-1.405 4.325 4.325-4.38 4.38.01-1.423L44.101 5H.002V4z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <section className="post-list">
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <article className="" key={node.fields.slug}>
                  <Link className="row post-lab" to={node.fields.slug}>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="card-content2">
                        <span>{node.frontmatter.case}</span>
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: title,
                          }}
                        />
                        <h4>{node.frontmatter.subtitle}</h4>
                      </div>
                    </div>

                    <div className="first-xs last-sm last-lg col-xs-12 col-sm-8 col-md-8 col-lg-8">
                      <Img
                        className="eq"
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
                    </div>
                  </Link>
                </article>
              )
            })}
          </section>
        </div>
        {/*
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div className="" key={node.fields.slug}>
              <section className="recent-posts ">
                <article className="">
                  <Link to={node.fields.slug}>
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                  </Link>

                  <div className="card">
                    <h3>
                      <Link to={node.fields.slug}>{title}</Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
                </article>
              </section>
            </div>
          ) 
        })}*/}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 10)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            subtitle
            case
            image {
              childImageSharp {
                fluid(maxWidth: 1280) {
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
