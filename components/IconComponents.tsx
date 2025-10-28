import React from 'react';

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export const PinterestIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.16 2c-5.23 0-9.16 3.94-9.16 8.71 0 3.32 1.74 6.22 4.29 7.66.33.22.46.04.52-.28.04-.2.16-1.03.22-1.28.1-.47.63-2.61.63-2.61.16-.38.09-.71-.21-.99-.33-.31-.55-.73-.55-1.57 0-1.47 1.1-2.58 2.45-2.58 1.18 0 1.75.88 1.75 1.93 0 1.17-.74 2.91-1.13 4.54-.31 1.32.66 2.39 1.97 2.39 2.36 0 3.9-2.98 3.9-6.39 0-2.68-1.89-4.82-5.02-4.82-3.41 0-5.49 2.5-5.49 5.1 0 .68.25 1.36.57 1.77.1.13.11.24.08.38-.08.38-.27 1.08-.31 1.23-.05.18-.18.23-.37.15-1.38-.59-2.24-2.52-2.24-4.25 0-3.32 2.95-6.71 7.6-6.71 4.02 0 7.02 2.87 7.02 6.2 0 4.07-2.53 7.1-6.02 7.1-1.21 0-2.35-.63-2.74-1.37l-.76 2.86c-.29 1.12-1.11 2.58-1.63 3.44.15-.05.3-.11.45-.18a10.4 10.4 0 005.9-4.32c1.23-2.14 1.8-4.88 1.8-7.85C22 6.26 17.7 2 12.16 2z"/>
    </svg>
);

export const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.582,6.186 C21.327,5.206 20.59,4.471 19.61,4.216 C17.892,3.75 12,3.75 12,3.75 C12,3.75 6.108,3.75 4.39,4.216 C3.41,4.471 2.673,5.206 2.418,6.186 C1.95,7.905 1.95,12 1.95,12 C1.95,12 1.95,16.095 2.418,17.814 C2.673,18.794 3.41,19.529 4.39,19.784 C6.108,20.25 12,20.25 12,20.25 C12,20.25 17.892,20.25 19.61,19.784 C20.59,19.529 21.327,18.794 21.582,17.814 C22.05,16.095 22.05,12 22.05,12 C22.05,12 22.05,7.905 21.582,6.186 Z M9.75,15.375 L9.75,8.625 L15.6,12 L9.75,15.375 Z"/>
    </svg>
);

export const ThreadsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 9a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3Zm0 12a9 9 0 0 0 9-9h-2a7 7 0 0 1-7 7v2Zm-6-9H4a9 9 0 0 1 9-9v2a7 7 0 0 0-7 7Z"/>
    </svg>
);

export const DashboardIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
);

export const ContentIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"/>
    </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
);

export const AnalyticsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
    </svg>
);

export const LibraryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
    </svg>
);

export const SettingsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
);

export const MagicWandIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.108 5.46a.75.75 0 01.912-.349l6.25 2.5a.75.75 0 01.43 1.253l-3.375 5.625a.75.75 0 01-1.253-.43L5.75 8.25 3.459 5.959a.75.75 0 01-.35-.499zM15.5 2.5a.5.5 0 00-.5.5v1.5a.5.5 0 001 0V3a.5.5 0 00-.5-.5zM17.5 5a.5.5 0 00-.5.5v1.5a.5.5 0 001 0V5.5a.5.5 0 00-.5-.5zM15 8.5a.5.5 0 00-.5.5v1.5a.5.5 0 001 0V9a.5.5 0 00-.5-.5z" clipRule="evenodd" />
        <path d="M4.35 9.25a.75.75 0 01.35.499l.25 1a.75.75 0 01-1.45.364l-.25-1a.75.75 0 011.1- .863zM12.35 3.25a.75.75 0 01.35.499l.25 1a.75.75 0 01-1.45.364l-.25-1a.75.75 0 011.1-.863z" />
    </svg>
);
