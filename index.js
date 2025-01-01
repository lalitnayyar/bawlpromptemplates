import { ChatOpenAI } from "langchain/chat_models/openai"
import { PromptTemplate } from "langchain/prompts"
import fs from 'fs'

const openAIApiKey = process.env.OPENAI_API_KEY

const llm = new ChatOpenAI({ openAIApiKey })

const tweetTemplate = 'Generate a promotional tweet for a product, from this product description: {productDesc}'

const tweetPrompt = PromptTemplate.fromTemplate(tweetTemplate)

// Print tweetPrompt output in Vite console terminal
console.log('Tweet Prompt:', tweetPrompt)

// Display tweetPrompt output on the web page in JSON format
document.getElementById('tweetPromptContainer').innerText = `Tweet Prompt: ${JSON.stringify(tweetPrompt, null, 2)}`