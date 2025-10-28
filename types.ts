// FIX: Import React to resolve 'Cannot find namespace "React"' error.
import React from 'react';

export interface Platform {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  promptSuffix: string;
  charLimit?: number;
}

export interface GeneratedPost {
  platformId: string;
  caption: string;
  hashtags: string[];
  imagePrompt: string;
}
