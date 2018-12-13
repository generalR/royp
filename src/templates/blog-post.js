import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    let post = this.props.data.markdownRemark

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <div className="container ">
          <div className="hero_text">
            <h1>{post.frontmatter.title}</h1>
            <ul className="row">
              <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <p className="type-of-case-label">Case</p>
                <p className="case-info-label">Test</p>
              </li>
              <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <p className="type-of-case-label">Service</p>
                <p className="case-info-label">Test</p>
              </li>
              <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <p className="type-of-case-label">Webbplatsen</p>
                <p className="case-info-label">Test</p>
              </li>
            </ul>
          </div>

          <section className="post">
            <div className="image-post">
              <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
            </div>
            <div className="container_post_page ">
              <div className="hero_arrow">
                <div className="hero_arrow_wrap" />
              </div>
              <article className="row center-xs end-md center-lg">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-offset-3">
                  <p className="article-intro">
                    {post.frontmatter.description}
                  </p>

                  <div className="post-container">
                    <div className="post-card">
                      <h1>{post.frontmatter.title}</h1>
                      <h3>{post.frontmatter.subtitle}</h3>
                    </div>
                    <div
                      className="post_content "
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
        {/*
        <ul style={{}}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            resize(width: 1280, height: 700) {
              src
            }
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
