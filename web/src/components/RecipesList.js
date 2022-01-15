import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function RecipesList({ recipes = [] }) {
  return (
    <div className="container mx-auto">
      {/* <div className="grid grid-cols-3 space-x-4 space-y-4 m-4"> */}
      {/* <div className="grid grid-cols-3 gap-4"> */}
      {/* <div className="py-4 flex flex-wrap justify-between"> */}
      <div className="grid grid-cols-6 gap-10 space-y-0">
        {recipes.map((recipe) => {
          const { id, title, mainImage, prepTime, cookTime, slug } = recipe;
          const pathToImage = getImage(mainImage.asset.gatsbyImageData);
          return (
            <Link
              key={id}
              to={`/${slug.current}`}
              className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col rounded-lg"
            >
              <GatsbyImage
                image={pathToImage}
                className="rounded-xl object-cover w-full h-48"
                alt={mainImage.alt}
              />
              <h5>{title}</h5>
              <p>
                Prep : {prepTime} min | Cook : {cookTime} min
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
