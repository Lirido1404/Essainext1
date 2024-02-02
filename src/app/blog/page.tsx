import React from 'react'
import { Metadata } from 'next';


export const metadata:Metadata = {
  title: {
    absolute: "Blog",
  }
}
function page() {
  return (
    <div>
        <h1>My blog</h1>
    </div>
  )
}

export default page