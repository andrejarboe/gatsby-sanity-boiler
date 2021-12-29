import React from "react"

export default function MainLayout(props) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-blue-900 border border-red-500">
        <div>nav</div>
        {props.children}
        <div className="mt-auto">footer</div>
      </div>
    </>
  )
}
