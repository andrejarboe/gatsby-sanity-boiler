import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function RecipesList({ recipes = [] }) {
  return (
    <div className="container mx-auto">
      {/* <div className="grid grid-cols-3 space-x-4 space-y-4 m-4"> */}
      {/* <div className="grid grid-cols-3 gap-4"> */}
        <div className="py-4 flex flex-wrap justify-between">
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

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <GatsbyImage
                image={pathToImage}
                className="rounded-xl w-full h-48"
                alt={mainImage.alt}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                  Photo by
                </div>
                {/* <ul>
                  <li>
                    <strong>Views: </strong>
                    {image.views}
                  </li>
                  <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                  </li>
                  <li>
                    <strong>Likes: </strong>
                    {image.likes}
                  </li>
                </ul> */}
              </div>
              {/* <div className="px-6 py-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
