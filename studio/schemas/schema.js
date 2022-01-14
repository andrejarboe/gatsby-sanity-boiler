// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import category from './documents/category';
import page from './documents/page';
import projects from './documents/projects';
import social from './documents/social';


// Object types
import feature from './objects/feature'
import openGraph from './objects/openGraph';

// Plug Types
import features from './plugs/features';
import hero from './plugs/hero';
import socialCallout from './plugs/socialCallout';
import recipes from './documents/recipes';
import mainImage from './objects/mainImage';



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    //plugs
    features,
    hero,
    socialCallout,
    openGraph,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    feature,
    mainImage,

    // The following are document types which will appear
    // in the studio.
    category,
    projects,
    page,
    social,
    recipes
  ]),
});
