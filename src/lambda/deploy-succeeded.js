import Twitter from 'twitter'
import dotenv from 'dotenv'

dotenv.config()

const {
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
} = process.env

const titlePrefixCondition = 'Create Blog '
const contextCondition = 'production'
const stateCondition = 'ready'
const urlPrefix = 'amandabrookfield.co.uk/blog'
const tweetCopy = 'I just wrote a new post on my blog, check it out here:'

const client = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
})

//eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  // This is triggered by deploy-succeeded event.  file must be called 'deploy-succeeded.js'
  // Then get data from JSON.parse(event.body).payload
  // Regular web-triggered functions get data from JSON.parse(event.body)
  try {
    const {payload} = JSON.parse(event.body)
    const {state, context, title} = payload
    console.log('PAYLOAD:', JSON.stringify(payload))
    console.log('STATE:', state)
    console.log('CONTEXT:', context)
    console.log('TITLE:', title)
    if (
      state === stateCondition &&
      context === contextCondition &&
      typeof title === 'string' &&
      title.startsWith(titlePrefixCondition)
    ) {
      console.log('New blogpost detected - Posting to twitter')
      const slug = title.substring(
        title.indexOf('“') + 1,
        title.lastIndexOf('”'),
      )
      const href = `${urlPrefix}/${slug}`
      await client.post('statuses/update', {
        status: `${tweetCopy} ${href}`,
      })
      return {
        statusCode: 200,
        body: `Tweeted Successfully`,
      }
    }
    console.log('No new blogpost detected')
    return {
      statusCode: 200,
      body: `Non blogpost-ready call complete`,
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}
