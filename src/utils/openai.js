import OpenAI from 'openai';
import { GPT_API } from './constants';

const openai = new OpenAI({
  apiKey: GPT_API,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;