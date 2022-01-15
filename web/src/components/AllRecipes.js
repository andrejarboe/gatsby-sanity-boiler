import React from 'react';
import RecipesList from './RecipesList';
import TagsList from './TagsList';
import { useStaticQuery, graphql } from 'gatsby';

   const query = graphql`
     {
       allSanityRecipes(sort: { order: ASC, fields: title }) {
         nodes {
           title
           cookTime
           prepTime
           id
           slug {
             current
           }
           images {
             alt
             asset {
               gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
             }
           }
           mainImage {
             alt
             asset {
               gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
             }
           }
         }
       }
     }
   `;

export default function AllRecipes() {
    const data = useStaticQuery(query)
    const recipes = data.allSanityRecipes.nodes;

    console.log(recipes);

  return (
    <section className="container mx-auto p-4">
      {/* <h4 className="text-2xl">All Recipes</h4> */}
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}
