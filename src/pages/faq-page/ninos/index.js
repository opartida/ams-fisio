import * as React from "react";
import Layout from "../../../components/Layout";
import ArticleList from "../../../components/ArticleList";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

class PreguntasFrecuentesNinoIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                "rgb(255, 128, 0) 0.5rem 0px 0px, rgb(255, 128, 0) -0.5rem 0px 0px",
              backgroundColor: "rgb(255, 128, 0)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            Preguntas Frecuentes Niños
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ArticleList posts={posts} />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

PreguntasFrecuentesNino.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function PreguntasFrecuentesNino() {
  return (
    <StaticQuery
      query={graphql`
        query PreguntasFrecuentesNinoQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: {
              frontmatter: {
                templateKey: { eq: "article-page" }
                tipo: { eq: "faq-niño" }
              }
            }
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
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <PreguntasFrecuentesNinoIndexPage data={data} count={count} />
      )}
    />
  );
}
