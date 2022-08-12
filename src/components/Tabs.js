import React from "react";

const Tab = (props) => {
  const { name } = props.tab;
  const { activeTab, changeActiveTab } = props;

  return (
    <li
      className={name === activeTab && "is-active"}
      onClick={() => changeActiveTab(name)}
    >
      <a>
        {/* <span className="icon is-small"><i className="fa fa-image"></i></span> */}
        <span>{name}</span>
      </a>
    </li>
  );
};



class Tabs extends React.Component {
  render() {
    return (
      <div className="tabs">
        <ul>
          {this.props.tabList.map((tab) => (
            <Tab
              tab={tab}
              key={tab.name}
              activeTab={this.props.activeTab}
              changeActiveTab={this.props.changeActiveTab}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default Tabs;