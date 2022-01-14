// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       pages: allSanityPage {
//         nodes {
//           _id
//           title
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `)

//   //create pages
//   result.data.pages.node.forEach(page => {
//     const slug = page.slug ? page.slug.current : `/`

//     createPage({
//       path: slug,
//       component: path.resolve(`./src/templates/page.js`),
//       context: {
//         _id: page._id,
//       },
//     })
//   })
// }
