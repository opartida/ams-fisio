import * as React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { graphql, Link, StaticQuery } from 'gatsby'
import { FaCalendarAlt, FaClock, FaHome } from 'react-icons/fa'

class CourseListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts.map((item) => {
          return (
            <div key={item.node.frontmatter.text} className="column is-6">
              <section className="section box">
                <div className="has-text-centered">
                  <h3>{item.node.frontmatter.longtitle}</h3>
                  <div
                    className="mb-4  mt-4"
                    style={{
                      width: '100%',
                      display: 'inline-block',
                    }}
                  >
                    <PreviewCompatibleImage
                      imageInfo={item.node.frontmatter.featuredimage}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <p>{item.node.frontmatter.description}</p>
                </div>
                <div className="panel-block">
                  <div className="list">
                    <div className="list-item mb-4 mt-4">
                      <span class="icon-text is-flex-wrap-nowrap">
                        <span class="icon  mr-4">
                          <FaHome />
                        </span>
                        <span className="has-text-weight-semibold">
                          {item.node.frontmatter.place}
                        </span>
                      </span>
                    </div>
                    <div className="list-item mb-4">
                      <span class="icon-text is-flex-wrap-nowrap">
                        <span class="icon  mr-4">
                          <FaCalendarAlt />
                        </span>
                        <span className="has-text-weight-semibold">
                          {item.node.frontmatter.dates}
                        </span>
                      </span>
                    </div>
                    <div className="list-item mb-4">
                      <span class="icon-text is-flex-wrap-nowrap">
                        <span class="icon mr-4">
                          <FaClock />
                        </span>
                        <span className="has-text-weight-semibold">
                          {item.node.frontmatter.duration}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="buttons is-centered mt-5">
                  <Link
                    className="button is-primary"
                    to={item.node.fields.slug}
                  >
                    Mas Info →
                  </Link>
                  <Link
                    className="button is-primary"
                    to={item.node.fields.slug}
                  >
                    Inscríbete
                  </Link>
                </div>
              </section>
            </div>
          )
        })}
      </div>
    )
  }
}

CourseList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function CourseList() {
  return (
    <StaticQuery
      query={graphql`
        query CoursePageQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "course-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  longtitle
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 440
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                  description
                  place
                  dates
                  duration
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <CourseListTemplate data={data} count={count} />}
    />
  )
}
