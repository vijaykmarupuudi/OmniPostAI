import React from 'react';
import { MagicWandIcon } from './IconComponents';

interface PromptInputProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onGenerate: () => void;
    isLoading: boolean;
}

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onGenerate, isLoading }) => {
    return (
        <div className="mb-8">
            <label htmlFor="prompt-input" className="block text-lg font-semibold text-brand-text dark:text-gray-200 mb-3">
                What's on your mind?
            </label>
            <div className="relative">
                <textarea
                    id="prompt-input"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A motivational post about starting a new week..."
                    className="w-full h-32 p-4 text-base border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-brand-text dark:text-gray-200 focus:ring-2 focus:ring-brand-primary-start focus:border-transparent transition"
                    disabled={isLoading}
                />
                <button
                    onClick={onGenerate}
                    disabled={isLoading || !prompt.trim()}
                    className="absolute bottom-4 right-4 flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-brand-primary-start to-brand-primary-end rounded-lg shadow-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                    {isLoading ? <LoadingSpinner /> : <MagicWandIcon className="w-5 h-5 mr-2" />}
                    {isLoading ? 'Generating...' : 'Generate Content'}
                </button>
            </div>
        </div>
    );
};

export default PromptInput;
