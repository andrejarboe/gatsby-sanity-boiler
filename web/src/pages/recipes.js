import { Link } from "gatsby"
import React from "react"
import AllRecipes from "../components/AllRecipes"
import MainLayout from "../components/Layouts/MainLayout"

export default function Recipes() {
  return (
    <MainLayout>
      <section>
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative overflow-hidden shadow-lg cursor-pointer">
            <img
              className="object-cover w-full h-[500px]"
              src="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Flower and sky"
            />

            <div className="absolute top-1/4 px-6 py-4 w-full text-center">
              <h4 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white">
                Recipes
              </h4>
              <Link to="/contact">
                <button className="text-accent bg-white bg-white px-10 py-4 shadow-sm rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto relative overflow-hidden  p-4">
        <AllRecipes />
      </div>
    </MainLayout>
  );
}
