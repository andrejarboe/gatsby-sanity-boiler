import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Images() {
  return (
    <div className="text-center grid md:grid-cols-3 w-[70vw] mx-auto md:space-x-2">
      <article className="mx-auto">
        <h4 className="text-xl capitalize my-4">constrained / tracedSVG</h4>
        <div className="container mx-auto">
          <StaticImage
            src="../assets/images/food1.jpg"
            alt="food"
            // height={400}
            layout="constrained"
            placeholder="tracedSVG"
            className="rounded-xl h-[300px] md:h[200px]"
            as="section"
          />
        </div>
      </article>
      <article className="mx-auto">
        <h4 className="text-xl capitalize my-4">Fixed / blurred</h4>
        <div className="container mx-auto">
          <StaticImage
            src="../assets/images/food1.jpg"
            alt="food"
            width={200}
            layout="fixed"
            placeholder="blurred"
            className="rounded-xl"
            as="div"
          />
        </div>
      </article>
      <article className="mx-auto">
        <h4 className="text-xl capitalize my-4">Full width / dominantColor</h4>
        <div className="container mx-auto">
          <StaticImage
            src="../assets/images/food1.jpg"
            alt="food"
            // height={400}
            layout="fullWidth"
            placeholder="dominantColor"
            className="rounded-xl h-[300px] md:h[200px]"
            as="article"
          />
        </div>
      </article>
    </div>
  )
}
