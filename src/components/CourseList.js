import * as React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { graphql, StaticQuery } from "gatsby";

class CourseListTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    
    return (
      <div className="columns is-multiline">
        {posts.map((item) => (
          <div key={item.node.frontmatter.text} className="column is-6">
            <section className="section box">
              <div className="has-text-centered">
                <h3>{item.node.frontmatter.title}</h3>
                <div
                  className="mb-4"
                  style={{
                    width: "100%",
                    display: "inline-block",
                  }}
                >
                  <PreviewCompatibleImage imageInfo={item.node.frontmatter.featuredimage} />
                </div>
              </div>
              <div className="panel-block">
                <p>{item.node.frontmatter.description}</p>
              </div>
              <div className="panel-block">
                <div className="list">
                  <div className="list-item">
                    <span className="has-text-weight-bold">Lugar: </span>
                    {item.node.frontmatter.place}
                  </div>
                  <div className="list-item">
                    <span className="has-text-weight-bold">Fechas: </span>
                    {item.node.frontmatter.dates}
                  </div>
                  <div className="list-item">
                    <span className="has-text-weight-bold">Duración: </span>
                    {item.node.frontmatter.duration}
                  </div>
                </div>
              </div>
              <div class="buttons is-centered mt-5">
                <button class="button is-primary">Mas info</button>
                <button class="button is-primary">Inscríbete</button>
              </div>
            </section>
          </div>
        ))}
      </div>
    );
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
                  title
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
