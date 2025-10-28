import React from 'react';
import { DashboardIcon, ContentIcon, CalendarIcon, AnalyticsIcon, LibraryIcon, SettingsIcon, MagicWandIcon } from './IconComponents';

const Sidebar: React.FC = () => {
    const navItems = [
        { icon: DashboardIcon, label: 'Dashboard' },
        { icon: ContentIcon, label: 'Create Post', active: true },
        { icon: CalendarIcon, label: 'Calendar' },
        { icon: AnalyticsIcon, label: 'Analytics' },
        { icon: LibraryIcon, label: 'Content Library' },
    ];

    return (
        <aside className="w-16 lg:w-64 bg-white dark:bg-gray-800 text-brand-text-light flex flex-col h-screen fixed shadow-lg">
            <div className="flex items-center justify-center lg:justify-start lg:pl-6 h-20 border-b border-gray-200 dark:border-gray-700">
                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary-start to-brand-primary-end flex items-center justify-center">
                    <MagicWandIcon className="w-5 h-5 text-white" />
                </div>
                <h1 className="hidden lg:block ml-3 text-xl font-bold text-brand-text dark:text-white">OmniPost AI</h1>
            </div>
            <nav className="flex-grow mt-6">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className="px-3 lg:px-6 py-1">
                            <a
                                href="#"
                                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                                    item.active
                                        ? 'bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white shadow-md'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            >
                                <item.icon className="w-6 h-6" />
                                <span className="hidden lg:block ml-4 font-medium">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-3 lg:p-6 border-t border-gray-200 dark:border-gray-700">
                 <a href="#" className="flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SettingsIcon className="w-6 h-6" />
                    <span className="hidden lg:block ml-4 font-medium">Settings</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
