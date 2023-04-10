import React from 'react'
import Games from './games/Games'
import Carrousel from './feed/Carrousel'
import Pagination from './dashboard/Pagination'

function Feed() {
  return (
    <div>
    <Carrousel/>
    <Games/>
    </div>
  )
}

export default Feed
