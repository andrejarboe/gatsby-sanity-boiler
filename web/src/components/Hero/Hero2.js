import React from "react"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


export default function Hero2() {
      const image = getImage("../assets/images/food2.jpeg")

  return (
    <header className="max-w-6xl mx-auto p-8 relative overflow-hidden">
      <StaticImage
        src="../../assets/images/food2.jpeg"
        alt="breakfest bowl"
        className="rounded-lg drop-shadow-lg h-[300px]"
        placeholder="tracedSVG"
        layout="fullWidth"
      />
      <div className="absolute top-1/4 px-6 py-4 w-full text-center">
        <h4 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white">
          Simply Recipes
        </h4>
        <Link to="/contact">
          <button className="text-accent bg-white px-10 py-4 shadow-sm rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            Get in touch
          </button>
        </Link>
      </div>
    </header>
  );
}
