import React from 'react'
import DocumentTitle from 'react-document-title'
import './demo.css'
class Demo extends React.Component {
  render() {
    return (
      <DocumentTitle title="demo">
        <div className="demo">demo</div>
      </DocumentTitle>
      )
  }
}

export default Demo