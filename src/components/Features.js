import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section box" style={{ minHeight: "612px" }}>
          <div className="has-text-centered">
            <div
              style={{
                width: "100%",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
          <Link className="button is-primary" to={item.url}>
            Mas Info →
          </Link>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
