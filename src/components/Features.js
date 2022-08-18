import * as React from "react";
import PropTypes from "prop-types";
import Course from "./Course";
import { CourseTypes } from "./CourseTypes";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <Course type='TwoColumn' courseInfo={item} />
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
