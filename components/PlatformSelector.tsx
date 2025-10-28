import React from 'react';
import { PLATFORMS } from '../constants';

interface PlatformSelectorProps {
    selectedPlatforms: Set<string>;
    onPlatformToggle: (platformId: string) => void;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ selectedPlatforms, onPlatformToggle }) => {
    return (
        <div className="mb-6">
            <label className="block text-lg font-semibold text-brand-text dark:text-gray-200 mb-3">Select Platforms</label>
            <div className="flex flex-wrap gap-3">
                {PLATFORMS.map((platform) => (
                    <button
                        key={platform.id}
                        onClick={() => onPlatformToggle(platform.id)}
                        className={`flex items-center px-4 py-2 rounded-full border-2 transition-all duration-200 text-sm font-medium ${
                            selectedPlatforms.has(platform.id)
                                ? 'bg-brand-primary-end border-brand-primary-end text-white'
                                : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-brand-text-light dark:text-gray-300 hover:border-brand-primary-start hover:text-brand-primary-start dark:hover:border-brand-primary-end'
                        }`}
                    >
                        <platform.icon className="w-5 h-5 mr-2" />
                        {platform.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PlatformSelector;
