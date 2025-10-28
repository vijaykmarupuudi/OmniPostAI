import React, { useEffect, useState } from 'react';
import { GeneratedPost } from '../types';
import { PLATFORMS } from '../constants';
import { generateImage } from '../services/geminiService';

interface GeneratedContentCardProps {
    post: GeneratedPost;
}

const ShimmerPlaceholder: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`${className} bg-gray-300 dark:bg-gray-600 rounded-lg`} style={{ background: 'linear-gradient(to right, #e2e8f0 4%, #f1f5f9 25%, #e2e8f0 36%)', backgroundSize: '1000px 100%' }}></div>
);

const GeneratedContentCard: React.FC<GeneratedContentCardProps> = ({ post }) => {
    const platform = PLATFORMS.find(p => p.id === post.platformId);
    
    // State for the image generation process
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(true);
    const [imageError, setImageError] = useState<string | null>(null);
    
    // State for the browser loading the generated image
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        let isCancelled = false;

        const fetchImage = async () => {
            if (!post.imagePrompt) {
                setIsGenerating(false);
                setImageError("No image prompt provided.");
                return;
            }

            // Reset states for regeneration
            setIsGenerating(true);
            setImageError(null);
            setImageUrl(null);
            setIsImageLoaded(false);

            try {
                const generatedUrl = await generateImage(post.imagePrompt);
                if (!isCancelled) {
                    setImageUrl(generatedUrl);
                }
            } catch (err) {
                if (!isCancelled) {
                    setImageError(err instanceof Error ? err.message : "Failed to generate image.");
                }
            } finally {
                if (!isCancelled) {
                    setIsGenerating(false);
                }
            }
        };

        fetchImage();

        return () => { isCancelled = true; };
    }, [post.imagePrompt]);

    if (!platform) return null;

    const showShimmer = isGenerating || (imageUrl && !isImageLoaded);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden animate-fade-in transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                    <platform.icon className="w-6 h-6 text-brand-text-light dark:text-gray-400" />
                    <h3 className="ml-3 text-lg font-bold text-brand-text dark:text-white">{platform.name}</h3>
                </div>
                <div className="flex space-x-2">
                     <button className="text-xs font-semibold text-brand-primary-end hover:underline">Copy</button>
                     <button className="text-xs font-semibold text-brand-primary-end hover:underline">Edit</button>
                </div>
            </div>

            <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3 relative bg-gray-200 dark:bg-gray-700 min-h-[200px]">
                    {showShimmer && <div className="absolute inset-0 w-full h-full animate-shimmer" style={{ background: 'linear-gradient(to right, #e2e8f0 4%, #f1f5f9 25%, #e2e8f0 36%)', backgroundSize: '1000px 100%' }}></div>}
                    {!isGenerating && imageError && (
                        <div className="absolute inset-0 flex items-center justify-center text-center p-4 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20">
                           <p className="text-sm font-medium">{imageError}</p>
                        </div>
                    )}
                    {imageUrl && (
                        <img
                            className={`w-full h-48 object-cover md:h-full transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            src={imageUrl}
                            alt={post.imagePrompt}
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    )}
                </div>
                <div className="p-5 md:w-2/3">
                    <p className="text-brand-text dark:text-gray-300 whitespace-pre-wrap">{post.caption}</p>
                    {post.hashtags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {post.hashtags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
             <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
                 <button className="px-4 py-2 text-sm font-semibold text-brand-text-light dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition">Save as Draft</button>
                 <button className="px-4 py-2 text-sm font-semibold text-white bg-brand-secondary rounded-lg hover:opacity-90 transition">Schedule Post</button>
            </div>
        </div>
    );
};

export default GeneratedContentCard;
