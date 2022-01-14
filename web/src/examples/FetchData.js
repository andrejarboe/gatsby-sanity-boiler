import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    query FirstQuery{
      site {
        info: siteMetadata {
          author
          description
          simpleData
          title
          complexData {
            age
            name
          }
          person {
            age
            name
          }
        }
      }
    }
  `)
  return (
      <div>
          <h2>{data.site.info.person.name}</h2>
          <div>
            {data.site.info.complexData.map((item, index) =>(
                <p
                    key={index}
                >
                    {item.name}:{item.age}
                </p>
            )

            )}
          </div>
      </div>
  )
}

export default ComponentName
