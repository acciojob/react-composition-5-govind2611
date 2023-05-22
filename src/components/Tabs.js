import React, { useState } from 'react';

const Tabs=({tabs,key})=>{
    const [activeTab,setActiveTab]=useState(0);

    const handleTabClick=(index)=>{
        setActiveTab(index);
    }

    return(
        <div className='tabs'>
            <ul className='tab-list'>
                {tabs.map((tab,index)=>(
                    <li key={`tab-${key}-${index}`}
                    className={`tab-item ${activeTab===index?'active':''}`}
                    onClick={()=>handleTabClick(index)}
                    >{tab.title}</li>
                ))}
            </ul>
            <div className="tab-content">
                {tabs[activeTab] && <p>{tabs[activeTab].content}</p>}
            </div>
        </div>
    )

}

export default Tabs;