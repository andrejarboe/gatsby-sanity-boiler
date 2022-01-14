import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"

export default function MainLayout(props) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {props.children}
        {/* put mt-auto on the footer class */}
        <Footer />
      </div>
    </>
  )
}
