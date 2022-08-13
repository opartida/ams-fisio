import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { graphql, Link, StaticQuery } from "gatsby";

class ArticleListTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts.map((item) => {
          return (
            <div key={item.node.frontmatter.text}>
              <section className="section">
                <div>
                  <Link to={item.node.fields.slug}>
                    <h3>{item.node.frontmatter.title}</h3>
                  </Link>
                </div>
                <p>{item.node.frontmatter.description}</p>
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}

ArticleList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function ArticleList() {
  return (
    <StaticQuery
      query={graphql`
        query ArticleListQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "article-page" } } }
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
        <ArticleListTemplate data={data} count={count} />
      )}
    />
  );
}
