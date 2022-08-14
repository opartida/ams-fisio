import React from "react";
import Tabs from "./Tabs";
import { useState } from "react";
import Content, { HTMLContent } from "../components/Content";
import Collapsibles from "./Collapsibles";

const Course = (courseInfo) => {
  const [activeTab, setActiveTab] = useState("Información general");

  const ActiveTabContent = ({content}) => <HTMLContent content={content} />;

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
      content: "Stuff 4",
    },
    {
      name: "Metodología docente",
      icon: "",
      content: "Stuff 5",
    },
    {
      name: "Acreditación y/o certificado",
      icon: "",
      content: "Stuff 6",
    },
  ];

  const activeTabContent = () => {
    const activeIndex = tabList.findIndex((tab) => {
      return tab.name === activeTab;
    });
    return courseInfo[tabList[activeIndex].contentfield];
  };

  return (
    <div className="content">
      <section className="section">
        <div className="container">
          <div className="is-hidden-mobile">
            <Tabs
              tabList={tabList}
              activeTab={activeTab}
              changeActiveTab={(tab) => setActiveTab(tab)}
            />

            <ActiveTabContent key={activeTab} content={activeTabContent()} />
          </div>
          <div className="is-hidden-desktop">
            <Collapsibles/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
