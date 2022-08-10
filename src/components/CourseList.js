import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const CourseList = ({ courses }) => (
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
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
      place: PropTypes.string,
      dates: PropTypes.string,
      duration: PropTypes.string,
    })
  ),
};

export default CourseList;
