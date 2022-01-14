import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/Layouts/MainLayout"
import Gallery from "../components/Gallery"

export default function Testing({ data }) {
  // const author = data.site.info.author

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <Gallery />
      </div>
    </MainLayout>
  )
}

// export const data = graphql`
//   {
//     site {
//       info: siteMetadata {
//         author
//         description
//         simpleData
//         title
//         complexData {
//           age
//           name
//         }
//         person {
//           age
//           name
//         }
//       }
//     }
//   }
// `
