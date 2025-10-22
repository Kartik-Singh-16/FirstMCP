import config from "dotenv";
import { TwitterApi } from "twitter-api-v2";

config.config();

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

export async function createPost(status) {
    try {

        console.log("Creating post with status:", status);
        const { data } = await twitterClient.v2.tweet(status);

        return {
            content: [
                {
                    type: "text",
                    text: `Tweeted: "${status}"\nTweet ID: ${data.id}`
                }
            ]
        };
    } catch (error) {
        console.error("Error creating post:", error);
        // Log specific error details from Twitter API if available
        if (error.data && error.data.errors) {
            console.error("Twitter API errors:", error.data.errors);
        }
        throw error; // Re-throw or handle as needed
    }
}
