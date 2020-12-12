# tweet-action

Github Action for posting a twitter tweet

## Getting started
1. Register as a twitter app developer in [here](https://developer.twitter.com/en/apply-for-access)
2. Create new twitter application in [here](https://developer.twitter.com/en/portal/apps/new)
3. Use app's credentials in github actions.

## Inputs

### `api_key`

**Required** Twitter api key

### `api_key_secret`

**Required** Twitter api key secret

### `api_key_secret`

**Required** Twitter Consumer access token.

### `api_key_secret`

**Required** Twitter Consumer access token secret.

### `status`

**Required** Status to be published to twitter.

## Outputs

### `id`

ID of the created tweet.

## Example usage

```yaml
name: publish-to-twitter
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: infraway/tweet-action@v1
        with:
          status: Tweeted from Github Actions
          api_key: ${{ secrets.TWITTER_API_KEY }}
          api_key_secret: ${{ secrets.TWITTER_API_KEY_SECRET }}
          access_token: ${{ secrets.TWITTER_ACCESS_TOKEN }}
          access_token_secret: ${{ secrets.TWITTER_ACCESS_TOKEN_SECRET }}
```
