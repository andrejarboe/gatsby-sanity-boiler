import React from 'react'
import setupTags from '../utils/setupTags';

export default function TagsList({recipes}) {
  const newTags = setupTags(recipes)


    return (
      <div>
          <h4 className="text-2xl">Recipes</h4>
        </div>
    
    );
}

