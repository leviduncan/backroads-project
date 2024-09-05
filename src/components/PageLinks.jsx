import React from 'react'

const PageLinks = ({plinks, classy}) => {
  return (
    <li key={plinks.id}><a href={plinks.href} className={classy}> {plinks.text} </a></li>
  )
}

export default PageLinks