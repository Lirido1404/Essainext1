import React from 'react'

function layout({children}:{
    children: React.ReactNode;
}) {
  return (
    <div>
        <h2>
            Inner layout
        </h2>
        {children}
    </div>
  )
}

export default layout