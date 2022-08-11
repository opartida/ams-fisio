import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import {StaticQuery} from "gatsby"

const CourseListTemplate = ({ courses }) => (
  <div className="columns is-multiline">
    {courses.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section box">
          <div className="has-text-centered">
            <h3>{item.title}</h3>
            <div
              className="mb-4"
              style={{
                width: "100%",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="panel-block">
            <p>{item.text}</p>
          </div>
          <div className="panel-block">
            <div className="list">
              <div className="list-item">
                <span className="has-text-weight-bold">Lugar: </span>
                {item.place}
              </div>
              <div className="list-item">
                <span className="has-text-weight-bold">Fechas: </span>
                {item.dates}
              </div>
              <div className="list-item">
                <span className="has-text-weight-bold">Duración: </span>
                {item.duration}
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

CourseList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};


export default function CourseList() {
  return (
    <StaticQuery
      query={graphql`
        query CoursePageQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
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
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <CourseListTemplate data={data} count={count} />}
    />
  );
}




