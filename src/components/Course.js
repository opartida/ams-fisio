import React from "react";
import Tabs from "./Tabs";
import { useState } from "react";
import { HTMLContent } from "../components/Content";
import Collapsible from "react-collapsible";
import "../styles/index.css";
import { getImage } from "gatsby-plugin-image";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { CourseTypes } from "./CourseTypes";
import { Link } from "gatsby";

const RenderCourse = ({ type, courseInfo }) => {
  switch (type) {
    case CourseTypes.Card:
      return <CourseCard courseInfo={courseInfo} />;
    case CourseTypes.TwoColumn:
      return <CourseTwoColumn courseInfo={courseInfo} />;
    case CourseTypes.Tabs:
      return <CourseTabs courseInfo={courseInfo} />;
    default:
      return <CourseCard courseInfo={courseInfo} />;
  }
};
const Course = ({ type, courseInfo }) => {
  return (
    <div className="content">
      <section className="section">
        <div className="container">
          <RenderCourse type={type} courseInfo={courseInfo} />
        </div>
      </section>
    </div>
  );
};

const CourseTwoColumn = ({ courseInfo }) => {
  return (
    <>
      <div class="card is-hidden-mobile columns is-variable is-8">
        <div class="column">
          <h1>{courseInfo.title}</h1>
          <div>{courseInfo.text}</div>
          <div className="mt-5">
            <Link className="button is-primary p-4" to={courseInfo.url}>
              Mas Info →
            </Link>
          </div>
        </div>
        <div class="column">
          <PreviewCompatibleImage imageInfo={courseInfo.image} />
        </div>
      </div>
      <div class="is-hidden-desktop columns is-variable is-8">
        <div class="column">
          <PreviewCompatibleImage imageInfo={courseInfo.image} />
        </div>
        <div class="column">
          <h1>{courseInfo.title}</h1>
          <div>{courseInfo.text}</div>
          <div className="mt-5">
            <Link className="button is-primary p-4" to={courseInfo.url}>
              Mas Info →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const CourseTabs = (courseInfo) => {
  const [activeTab, setActiveTab] = useState("Información general");
  const heroImage =
    getImage(courseInfo.featuredimage) || courseInfo.featuredimage;
  const ActiveTabContent = ({ content }) => <HTMLContent content={content} />;

  // eslint-disable-next-line
  const tabList = [
    {
      name: "Información general",
      icon: "",
      contentfield: "informaciongeneral",
    },
    {
      name: "Programa",
      icon: "",
      contentfield: "programa",
    },
    {
      name: "Profesores",
      icon: "",
      contentfield: "profesores",
    },
    {
      name: "Objetivos",
      icon: "",
      content: "objetivos",
    },
    {
      name: "Metodología docente",
      icon: "",
      contentfieldcontent: "metodologiadocente",
    },
    {
      name: "Acreditación y/o certificado",
      icon: "",
      contentfield: "certificado",
    },
  ];

  const activeTabContent = () => {
    const activeIndex = tabList.findIndex((tab) => {
      return tab.name === activeTab;
    });
    return courseInfo[tabList[activeIndex].contentfield];
  };
  return (
    <>
      <PreviewCompatibleImage imageInfo={courseInfo.featuredimage} />
      <div className="is-hidden-mobile">
        <Tabs
          tabList={tabList}
          activeTab={activeTab}
          changeActiveTab={(tab) => setActiveTab(tab)}
        />

        <ActiveTabContent key={activeTab} content={activeTabContent()} />
      </div>
      <div className="is-hidden-desktop">
        {tabList.map((tab) => (
          <Collapsible trigger={tab.name}>
            <HTMLContent content={courseInfo[tab.contentfield]} />
          </Collapsible>
        ))}
      </div>
    </>
  );
};

const CourseCard = (courseInfo) => {
  return (
    <section className="section box" style={{ minHeight: "612px" }}>
      <div className="has-text-centered">
        <div
          style={{
            width: "100%",
            display: "inline-block",
          }}
        >
          <PreviewCompatibleImage imageInfo={courseInfo.item} />
        </div>
      </div>
      <p>{courseInfo.item.text}</p>
      <Link className="button is-primary" to={courseInfo.item.url}>
        Mas Info →
      </Link>
    </section>
  );
};
export default Course;
