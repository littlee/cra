import React from 'react'
import DocumentTitle from 'react-document-title'
import './home.css'
class Home extends React.Component {
  render() {
    return (
      <DocumentTitle title="首页">
        <div className="home">HOME</div>
      </DocumentTitle>
      )
  }
}

export default Home