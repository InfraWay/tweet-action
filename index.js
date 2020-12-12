const { TwitterClient } = require('twitter-api-client');

const {
  INPUT_STATUS,
  INPUT_API_KEY,
  INPUT_API_KEY_SECRET,
  INPUT_ACCESS_TOKEN,
  INPUT_ACCESS_TOKEN_SECRET,
} = process.env;

(async () => {
  try {
    const twitterClient = new TwitterClient({
      apiKey: INPUT_API_KEY,
      apiSecret: INPUT_API_KEY_SECRET,
      accessToken: INPUT_ACCESS_TOKEN,
      accessTokenSecret: INPUT_ACCESS_TOKEN_SECRET,
    });
    const { id } = await twitterClient.tweets.statusesUpdate({
      status: INPUT_STATUS,
    });
    console.log(`::set-output name=id::${id}`);
    process.exit(0);
  } catch (err) {
    console.log(err);
    console.log(`::error ::${err.data}`);
    process.exit(1);
  }
})();
