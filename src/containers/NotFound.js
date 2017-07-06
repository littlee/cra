import React from 'react'
import DocumentTitle from 'react-document-title'
class NotFound extends React.Component {
  render() {
    return (
      <DocumentTitle title="404">
        <div className="NotFound">404</div>
      </DocumentTitle>
      )
  }
}

export default NotFound