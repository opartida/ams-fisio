import * as React from "react";
import { Link } from "gatsby";

const ArticleList = ({ posts }) => {
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
};

export default ArticleList;
