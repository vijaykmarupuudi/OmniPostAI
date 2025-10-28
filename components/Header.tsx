import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md sticky top-0 z-10 p-4 sm:p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-brand-text dark:text-white">Create Post</h1>
            <div className="flex items-center space-x-4">
                <button className="hidden sm:block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-primary-start to-brand-primary-end rounded-lg shadow-md hover:opacity-90 transition-opacity">
                    Upgrade Plan
                </button>
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600">
                    <img src="https://picsum.photos/100/100" alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
                </div>
            </div>
        </header>
    );
};

export default Header;
