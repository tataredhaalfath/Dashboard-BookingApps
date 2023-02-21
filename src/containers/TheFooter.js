import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.linkedin.com/in/redhaaf?" target="_blank" rel="noopener noreferrer">Redha</a>
        <span className="ml-1">&copy; Booking Apps</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">Booking Apps</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
