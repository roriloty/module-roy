import React, { useState } from 'react';
import '../styles/features/Tabs.css';

const TabsPanel = ({ tabs, defaultStart = 0 }) => {
    const [activeTab, setActiveTab] = useState(tabs[defaultStart].id);

    const activeContent = tabs.find(t => t.id === activeTab)?.content;

    return (
        <div className="tabs-container anim-fade-in">
            <div className="tabs-header">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                        {tab.label}
                        {activeTab === tab.id && <div className="active-indicator" />}
                    </button>
                ))}
            </div>
            <div className="tab-content-area">
                <div key={activeTab} className="anim-fade-in">
                    {activeContent}
                </div>
            </div>
        </div>
    );
};

export default TabsPanel;
