export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61cbd853901303536c7d4031',
                  title: 'Sanity Studio',
                  name: 'gatsby-sanity-boiler-studio',
                  apiId: '552624a0-03b5-47c3-8a7d-bc0e45f1aa9b'
                },
                {
                  buildHookId: '61cbd85486686a4ae32e661d',
                  title: 'Portfolio Website',
                  name: 'gatsby-sanity-boiler',
                  apiId: '3dc52b1f-eea9-43a2-9b05-cdc914ec56db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrejarboe/gatsby-sanity-boiler',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-sanity-boiler.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
