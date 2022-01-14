import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: TRACED_SVG
            width: 200
          )
        }
      }
    }
  }
`

export default function Gallery() {
  const data = useStaticQuery(query)
  console.log("***********")
  console.log(data)
  console.log("***********")

  const nodes = data.allFile.nodes

  
  return (
      <div>
      <h2 className="text-2xl">Simple Image Gallery</h2>
      <div className="container py-4 flex flex-wrap justify-evenly ">
        {nodes.map((image, index) => {
            const { name } = image 
            const imagePath = getImage(image)
          return (
            <article key={index} className="my-4">
              <GatsbyImage image={imagePath} alt={name} className="rounded-2xl" />
              <p>{name}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
