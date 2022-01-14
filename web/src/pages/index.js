import React from 'react';
import AllRecipes from '../components/AllRecipes';
import Hero2 from '../components/Hero/Hero2';
import MainLayout from '../components/Layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      {/* <head>
        <title>Simply Recipes | Home</title>
      </head> */}
      <main className="">
        <Hero2 />
        <AllRecipes />
      </main>
    </MainLayout>
  );
}
