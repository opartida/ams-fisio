import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Course from "../components/Course";
import FullWidthImage from "../components/FullWidthImage"; 
import { getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const CoursePageTemplate = ({
  description,
  dates,
  place,
  duration,
  tags,
  title,
  featuredimage,
  helmet,
}) => {
  const courseInfo = { description, dates, place, duration };
  const heroImage = getImage(featuredimage) || featuredimage;

  return (
    <>
      <FullWidthImage img={heroImage} title={title} subheading="" />
      <section className="section">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">              
              <Course {...courseInfo} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

CoursePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  place: PropTypes.string,
  dates: PropTypes.string,
  duration: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.object,
};

const CoursePage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <CoursePageTemplate
        content={post.html}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        place={post.frontmatter.place}
        dates={post.frontmatter.dates}
        duration={post.frontmatter.duration}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

CoursePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CoursePage;

export const pageQuery = graphql`
  query CoursePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        title
        description
        place
        dates
        duration
        tags
      }
    }
  }
`;
