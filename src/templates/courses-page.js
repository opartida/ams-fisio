import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import FullWidthImage from '../components/FullWidthImage'
import CourseList from '../components/CourseList'

// eslint-disable-next-line
export const CoursesPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">                  
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <CourseList courses={intro.courses} />
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
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
  )
}

CoursesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    courses: PropTypes.array,
  }),
}

const CoursesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CoursesPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

CoursesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CoursesPage

export const pageQuery = graphql`
  query CoursesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "courses-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          courses {
            image {
              childImageSharp {
                gatsbyImageData(width: 340, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            title
            place
            dates
            duration
          }
          heading
          description
        }
      }
    }
  }
`
