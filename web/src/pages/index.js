import React from "react"
import Hero2 from "../components/Hero/Hero2"
import MainLayout from "../components/Layouts/MainLayout"
import FetchData from "../examples/FetchData"

export default function Home() {
  return (
    <MainLayout>
      {/* <head>
        <title>Simply Recipes | Home</title>
      </head> */}
      <main className="">
        <Hero2 />
      </main>
      {/* <FetchData /> */}
    </MainLayout>
  )
}
