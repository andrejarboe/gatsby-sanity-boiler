import { Link, graphql } from 'gatsby';
import React from 'react';
import RecipesList from '../components/RecipesList';
import MainLayout from '../components/Layouts/MainLayout';

export default function Contact({
  data: {
    allSanityRecipes: { nodes: recipes },
  },
}) {
  return (
    <MainLayout>
      <main className="pb-20">
        <div className="py-20 bg-green-200">
          <section className="container mx-auto max-w-6xl flex flex-col px-4 md:flex-row space-y-4">
            <article className="md:w-1/2 p-10 flex flex-col space-y-3 font-semibold text-gray-500">
              <h3 className="text-xl font-bold kerning tracking-widest">
                Want to get in touch?
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                vitae laboriosam rem a vel odio facere, quas iste ullam quae,
                officia illo maiores aliquid?
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                vitae laboriosam rem a vel odio facere, quas iste ullam quae,
                officia illo maiores aliquid?
              </p>
            </article>
            <article className="md:w-1/2">
              <div className="bg-white rounded p-10 shadow">
                <form action>
                  <div className="flex items-center mb-5">
                    <label
                      htmlFor="name"
                      className="inline-block text-right mr-6 w-20 text-gray-500 font-bold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="border-b-2 border-gray-400 focus:border-green-400 w-full flex-1 py-2 placeholder-gray-300 outline-none"
                    />
                  </div>
                  <div className="flex items-center mb-10">
                    <label
                      htmlFor="email"
                      className="inline-block text-right mr-6 w-20 text-gray-500 font-bold"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="youremail@example.com"
                      className="border-b-2 border-gray-400 focus:border-green-400 outline-none w-full flex-1 py-2 placeholder-gray-300"
                    />
                  </div>
                  <div className="flex items-center mb-10">
                    <label
                      htmlFor="message"
                      className="inline-block text-right mr-6 w-20 text-gray-500 font-bold"
                    >
                      Massage
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      placeholder=""
                      className="border-b-2 border-gray-400 focus:border-green-400 outline-none w-full flex-1 py-2 placeholder-gray-300"
                    />
                  </div>
                  <div className="text-right">
                    <button className="py-3 px-8 bg-green-500 text-white font-bold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </article>
          </section>
        </div>

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
