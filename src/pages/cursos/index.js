import * as React from 'react'

import Layout from '../../components/Layout'
import CourseList from '../../components/CourseList'

export default class CourseIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                'rgb(255, 128, 0) 0.5rem 0px 0px, rgb(255, 128, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 128, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            Cursos Propios
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <CourseList />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
