import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import PlatformSelector from './components/PlatformSelector';
import GeneratedContentCard from './components/GeneratedContentCard';
import { MagicWandIcon } from './components/IconComponents';
import { generateSocialMediaPost } from './services/geminiService';
import { PLATFORMS } from './constants';
import type { GeneratedPost } from './types';

const App: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(new Set(['instagram', 'x']));
    const [generatedPosts, setGeneratedPosts] = useState<GeneratedPost[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePlatformToggle = useCallback((platformId: string) => {
        setSelectedPlatforms(prev => {
            const newSet = new Set(prev);
            if (newSet.has(platformId)) {
                newSet.delete(platformId);
            } else {
                newSet.add(platformId);
            }
            return newSet;
        });
    }, []);

    const handleGenerateContent = async () => {
        if (!prompt.trim() || selectedPlatforms.size === 0) {
            setError('Please enter a prompt and select at least one platform.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setGeneratedPosts([]);

        try {
            const platformArray = Array.from(selectedPlatforms)
                .map(id => PLATFORMS.find(p => p.id === id))
                .filter(Boolean);

            const promises = platformArray.map(platform =>
                generateSocialMediaPost(prompt, platform!)
            );
            
            const results = await Promise.all(promises);
            setGeneratedPosts(results);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const EmptyState: React.FC = () => (
        <div className="text-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-brand-primary-start to-brand-primary-end rounded-full text-white">
                <MagicWandIcon className="w-8 h-8"/>
            </div>
            <h3 className="text-xl font-semibold text-brand-text dark:text-white">Your AI-Generated Content Will Appear Here</h3>
            <p className="mt-2 text-brand-text-light">Enter an idea, select your platforms, and let the magic happen!</p>
        </div>
    );
    
    const LoadingState: React.FC = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Array.from(selectedPlatforms).map(id => (
                 <div key={id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 animate-pulse">
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-24 h-6 bg-gray-300 dark:bg-gray-600 rounded-md ml-3"></div>
                    </div>
                    <div className="w-full h-24 bg-gray-300 dark:bg-gray-600 rounded-md mb-4"></div>
                    <div className="flex gap-2">
                        <div className="w-20 h-5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-24 h-5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    </div>
                 </div>
            ))}
        </div>
    );


    return (
        <div className="flex bg-brand-light dark:bg-brand-dark min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-16 lg:ml-64 transition-all duration-300">
                <Header />
                <div className="p-4 sm:p-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm">
                            <PromptInput
                                prompt={prompt}
                                setPrompt={setPrompt}
                                onGenerate={handleGenerateContent}
                                isLoading={isLoading}
                            />
                            <PlatformSelector
                                selectedPlatforms={selectedPlatforms}
                                onPlatformToggle={handlePlatformToggle}
                            />
                        </div>

                        <div className="mt-8">
                            {error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
                                    <strong className="font-bold">Oops! </strong>
                                    <span className="block sm:inline">{error}</span>
                                </div>
                            )}

                            <div className="mt-6">
                                {isLoading ? (
                                    <LoadingState />
                                ) : generatedPosts.length > 0 ? (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {generatedPosts.map((post) => (
                                            <GeneratedContentCard key={post.platformId} post={post} />
                                        ))}
                                    </div>
                                ) : (
                                    !error && <EmptyState />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
