import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
//require('typeface-open-sans')

//import '../styles/global.scss'
//import '../styles/normalize.css'
//import '../styles/flexboxgrid.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
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
      <section className="hero">
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={siteTitle}
          />

          <div className="container">
            <div className="row start-sm start-md start-lg hero_text">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 ">
                <h1>Digital designer.</h1>

                <h2>
                  Hej, mitt namn är Roy. <br />
                  Jag har en examen i Interaktionsdesign från Karlstad
                  universitet och designar och bygger webbplatser med html, Css
                  och Javascript. Den du surfar på nu är byggd med Gatsby JS
                  Sedan Juni har jag också varit pappaledig till min 6 månaders
                  dotter.
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </section>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
