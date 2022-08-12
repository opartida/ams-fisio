import React from 'react'
import Tabs from './Tabs'
import { useState } from 'react'

const Course = () => {
  const [activeTab, setActiveTab] = useState('Información general')

  const ActiveTabContent = (props) => <div>{props.content}</div>

  // eslint-disable-next-line
  const tabList = [
    {
      name: 'Información general',
      icon: '',
      content: 'Stuff 1',
    },
    {
      name: 'Programa',
      icon: '',
      content: 'Stuff 2',
    },
    {
      name: 'Profesores',
      icon: '',
      content: 'Stuff 3',
    },
    {
      name: 'Objetivos',
      icon: '',
      content: 'Stuff 4',
    },
    {
      name: 'Metodología docente',
      icon: '',
      content: 'Stuff 5',
    },
    {
      name: 'Acreditación y/o certificado',
      icon: '',
      content: 'Stuff 6',
    },
  ]

  const activeTabContent = () => {
    const activeIndex = tabList.findIndex((tab) => {
      return tab.name === activeTab
    })
    return tabList[activeIndex].content
  }

  return (
    <div className="content">
      <section className="section">
        <div className="container">
          <Tabs
            tabList={tabList}
            activeTab={activeTab}
            changeActiveTab={(tab) => setActiveTab(tab)}
          />

          <ActiveTabContent key={activeTab} content={activeTabContent()} />
        </div>
      </section>
    </div>
  )
}

export default Course
