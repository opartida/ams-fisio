import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import FullWidthImage from '../components/FullWidthImage'
import Carousel from '../components/Carousel'
import { CookieConsent, OPTIONS } from "react-cookie-consent";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  carousel,
}) => {
  const heroImage = getImage(image) || image
  const getSlides = (carousel) => {
    return carousel.map((elem) => {
      const image = getImage(elem.image) || elem.image
      return (
        <FullWidthImage
          img={image}
          title={elem.title}
          subheading={elem.subheading}
        />
      )
    })
  }
  return (
    <>
      <div>
        <div className="is-hidden-desktop">
          <FullWidthImage img={heroImage} />
        </div>
        <div className="is-hidden-mobile">
          <Carousel slides={getSlides(carousel)} />
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="content">
                      <div className="tile">
                        <h1 className="title">
                          <span className=" is-primary">{mainpitch.title}</span>
                        </h1>
                      </div>
                      <div className="tile">
                        <h3 className="subtitle">{mainpitch.description}</h3>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-12">
                        <h3 className="has-text-weight-semibold is-size-2">
                          {heading}
                        </h3>
                        <p>{description}</p>
                      </div>
                    </div>
                    <Features gridItems={intro.blurbs} />

                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Últimos posts
                      </h3>
                      <BlogRoll />
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                          Leer más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <CookieConsent
          location="bottom"
          cookieName="cookiedisclaimer"
          expires={999}
          overlay
        >
          Este sitio usa cookies para mejorar la experiencia de usuario.
        </CookieConsent>
      </div>
    </>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  carousel: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        carousel={frontmatter.carousel}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        carousel {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
          title
          subheading
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            text
            title
            url
          }
          heading
          description
        }
      }
    }
  }
`
