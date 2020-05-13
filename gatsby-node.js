const _ = require('lodash')
const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')
const {fmImagesToRelative} = require('gatsby-remark-relative-images')

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: {fileAbsolutePath: {regex: "/(pages)/"}}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              date(formatString: "YYYY")
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    let years = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
      if (_.get(edge, `node.frontmatter.date`)) {
        years = years.concat(edge.node.frontmatter.date)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)
    years = _.uniq(years)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/blog/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

    years.forEach(year => {
      const yearPath = `/blog/years/${year}/`
      createPage({
        path: yearPath,
        component: path.resolve(`src/templates/years-page.js`),
        context: {
          year,
          yearGlob: `*${year}`,
        },
      })
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    const date = node.frontmatter.date || null
    createNodeField({
      name: `year`,
      node,
      value: `year-${new Date(date).getFullYear()}`,
      //if value is date-like, it will be turned into a date instance,
      //hence we add "year-" above to prevent the conversion
    })
  }
}

exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions
  // we need this in order to be able to support an empty list of events
  createTypes(`
    type Event {
      title: String!
      date: Date!
      time: String
      description: String
    }

    type Frontmatter {
      events: [Event!]
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
  `)
}
