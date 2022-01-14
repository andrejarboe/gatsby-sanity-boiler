

npx gatsby new web https://github.com/gatsbyjs/gatsby-starter-hello-world

studio:

sanity deploy
sanity graphql deploy
sanity start


cd studio && sanity deploy && sanity graphql deploy -y && sanity start && cd .. && cd web && npm start