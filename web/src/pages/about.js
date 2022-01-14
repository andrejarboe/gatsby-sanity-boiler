import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import MainLayout from "../components/Layouts/MainLayout"

export default function about() {
  return (
    <MainLayout>
      <main className="mt-4 px-4">
        <section className="container mx-auto md:grid md:grid-cols-2">
          <article className="text-lg">
            <div className="md:w-10/12 space-y-6">
              <h2 className="text-4xl">
                I'm baby coloring book poke taxidermy
              </h2>
              <p>
                Taxidermy forage glossier letterpress heirloom before they sold
                out you probably haven't heard of them banh mi biodiesel chia.
              </p>
              <p className="pb-6">
                Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
                retro.
              </p>
              <Link to="/contact" className="py-2 px-4 bg-purple-200 text-purple-600">
                Contact
              </Link>
            </div>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Fusion Cuisine on a Plate"
            className="mt-6 md:mt-0"
            placeholder="blurred"
          />
        </section>
      </main>
    </MainLayout>
  )
}
