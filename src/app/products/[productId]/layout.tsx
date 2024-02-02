import React from 'react'

function layout({children}:{
    children: {
       children : React.ReactNode;
    }
}) {
  return (
   <>
    {children}
    <h2>Features products</h2>
   </>
  )
}

export default layout