import React from 'react'
import TopNav from '../interface/TopNav/TopNav'
type Props = {}

const page = (props: Props) => {
  return (
    <main>
      <TopNav current='/contact'/>
    </main>
  )
}

export default page