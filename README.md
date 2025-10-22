# MCP AI Agent

An AI agent using Model Context Protocol (MCP) that connects Google Gemini with external tools like Twitter posting and calculations.

## Features

- Natural language interaction with Gemini AI
- Tweet posting through conversational commands
- Mathematical operations
- Easy tool extension via MCP

## Quick Start

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create `.env`:

```env
GENAI_API_KEY=your_google_ai_api_key
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret
```

### Run

```bash
# Terminal 1 - Start server
node server/index.js

# Terminal 2 - Start client
node client/index.js
```

## Usage

```
You: What is 25 plus 17?
AI: The sum of 25 and 17 is 42.

You: Tweet "Hello from my AI agent!"
AI: Successfully posted! Tweet ID: 1234567890
```

## Project Structure

```
├── client/index.js       # MCP Client + Gemini
├── server/index.js       # MCP Server + Tools
└── server/mcp.tool.js    # Twitter integration
```

## Adding Tools

```javascript
server.tool("toolName", "Description", { param: z.string() }, async (args) => {
    // Your logic here
    return { content: [{ type: "text", text: "Result" }] };
});
```
