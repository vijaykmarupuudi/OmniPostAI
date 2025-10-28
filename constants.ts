import { Platform } from './types';
import { InstagramIcon, FacebookIcon, XIcon, PinterestIcon, YouTubeIcon, ThreadsIcon } from './components/IconComponents';

export const PLATFORMS: Platform[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: InstagramIcon,
    promptSuffix: 'You are a world-class social media strategist. Generate a compelling Instagram post. The caption should start with a strong hook to grab attention, be visually descriptive, and use relevant emojis to increase engagement. End with a clear call-to-action or a question to encourage comments. Provide 5-7 highly relevant and trending hashtags. The tone must be inspiring, authentic, and friendly. Ensure the caption is well-formatted with line breaks for readability.',
    charLimit: 2200,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: FacebookIcon,
    promptSuffix: 'You are a community engagement expert. Generate a thoughtful Facebook post. The caption should be structured to encourage discussion and sharing. Start with a relatable story or a surprising statistic. Include a clear call-to-action, like asking a question or directing users to a link (use a placeholder). The tone should be informative, trustworthy, and community-oriented.',
    charLimit: 63206,
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    icon: XIcon,
    promptSuffix: 'You are a savvy digital marketer. Generate a viral-worthy tweet for X. The content must be concise, witty, and impactful, designed for high retweets and replies. Use 2-3 strategic hashtags. The tone should be bold, timely, and conversational. Ask a provocative question or state a strong opinion.',
    charLimit: 280,
  },
    {
    id: 'threads',
    name: 'Threads',
    icon: ThreadsIcon,
    promptSuffix: 'You are a master of online conversation. Generate a Threads post designed to start a meaningful discussion. It can be more nuanced and longer than a tweet. Share a personal insight or ask a multi-part question. The tone should be friendly, curious, and authentic, encouraging a back-and-forth dialogue.',
    charLimit: 500,
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    icon: PinterestIcon,
    promptSuffix: 'You are an SEO and e-commerce specialist. Generate a Pinterest Pin description. The text must be highly descriptive and rich with relevant keywords for Pinterest search. Structure it as a helpful tip, a mini-guide, or an enticing product description. The tone should be helpful, aspirational, and actionable.',
    charLimit: 500,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: YouTubeIcon,
    promptSuffix: 'You are a YouTube growth hacker. Generate a YouTube video title and description. The title must be catchy, clickable, and SEO-optimized (under 70 characters). The description should provide a compelling summary in the first three lines, include a clear value proposition, add relevant links (use placeholders for now), and list 10-15 relevant keywords/tags for discoverability.',
    charLimit: 5000,
  },
];