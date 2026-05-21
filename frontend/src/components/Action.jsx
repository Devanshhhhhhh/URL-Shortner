import {useState} from "react";
import './Action.css'

const Action = ({onTabChange}) => {

    const [activeTab, setActiveTab] = useState('shorten');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if(onTabChange){
            onTabChange(tab);
        }
    }

    return (
        <>
            <div className="action-buttons">
                <button 
                    onClick={() => handleTabClick('shorten')}
                    className={
                    `tab-button ${activeTab === 'shorten' ? 'active' : ''}`
                }
                > Shorten </button>

                <button
                    onClick={() => handleTabClick('QR Generator')}
                    className={
                        `tab-button ${activeTab === 'QR Generator' ? 'active' : ''}`
                    }
                > QR Generator </button>

                <button
                    onClick={() => handleTabClick('analytics')}
                    className={
                        `tab-button ${activeTab === 'analytics' ? 'active' : ''}`
                    }
                    
                > Analytics </button>
            </div>
        </>
    )
}

export default Action;