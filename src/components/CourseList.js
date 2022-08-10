import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const CourseList = ({ courses }) => (
  <div className="columns is-multiline">
    {courses.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
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
          <p>{item.text}</p>
          <div class="buttons is-centered">
            <button class="button is-primary">Mas info</button>
            <button class="button is-primary">Inscríbete</button>
          </div>
        </section>
      </div>
    ))}
  </div>
);

CourseList.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default CourseList;
