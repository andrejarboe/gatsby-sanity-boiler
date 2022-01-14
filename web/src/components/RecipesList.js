import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function RecipesList({ recipes = [] }) {
  return (
    <div className="">
      <div className="grid grid-cols-3 space-x-4 space-y-4 m-4">
        {/* <div className="py-4 flex flex-wrap justify-evenly"> */}
        {recipes.map((recipe) => {
          const { id, title, mainImage, prepTime, cookTime, slug } = recipe;
          const pathToImage = getImage(mainImage.asset.gatsbyImageData);
          return (
            // <Link key={id} to={`/${slug.current}`} className="">
            //   <GatsbyImage
            //     image={pathToImage}
            //     className="rounded-xl object-cover"
            //     alt={mainImage.alt}
            //   />
            //   <h5>{title}</h5>
            //   <p>
            //     Prep : {prepTime} min | Cook : {cookTime} min
            //   </p>
            // </Link>

            <div class="overflow-hidden text-center bg-black ">
              <div class="px-5 py-20 md:px-5 md:py-5">
                <img
                  src="https://cdn.devdojo.com/images/april2021/apple-tv-large.png"
                  class="w-auto h-10 mx-auto mt-8 mb-7"
                />
                <p class="text-xl text-gray-100">
                  Get 1 year of Apple TV+ free <br />
                  when you buy a Mac
                </p>
                <div class="flex flex-col items-center justify-center my-7 sm:flex-row sm:space-x-5">
                  <a
                    href="#_"
                    class="flex items-center w-auto mx-auto text-xl leading-tight text-center text-blue-500 hover:underline sm:mx-0"
                  >
                    <span>Try it free</span>
                    <svg
                      class="w-4 transform -rotate-45 h-4 ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#_"
                    class="flex items-center w-auto mx-auto text-xl leading-tight text-center text-blue-500 hover:underline sm:mx-0"
                  >
                    <span>Learn more</span>
                    <svg
                      class="w-4 h-4 ml-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://cdn.devdojo.com/images/april2021/apple-tv-cards.jpg" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
