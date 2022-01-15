import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import RecipesList from '../components/RecipesList';
import MainLayout from '../components/Layouts/MainLayout';

export default function about({
  data: {
    allSanityRecipes: { nodes: recipes },
  },
}) {
  return (
    <MainLayout>
      <main className="mt-4 max-w-6xl mx-auto px-8">
        <section className="container mx-auto px-4 md:grid md:grid-cols-2">
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
              <Link
                to="/contact"
                className="py-2 px-4 bg-purple-200 text-purple-600"
              >
                Contact
              </Link>
            </div>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Fusion Cuisine on a Plate"
            className="mt-6 md:mt-0 rounded-xl"
            placeholder="blurred"
          />
        </section>
        <section className="container mx-auto px-4 py-8">
          <h5 className="my-8 text-2xl text-center">Look at these Recipes</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </MainLayout>
  );
}

export const query = graphql`
  {
    allSanityRecipes(
      filter: { featured: { eq: true } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        _id
        title
        slug {
          current
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
