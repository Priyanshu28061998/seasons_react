import './SeasonDisplay.css';
import React from 'react';

const SeasonDisplay =(props)=>{

    const seasonConfig={
        winter:{
            text:"Blur! It is chiilly",
            iconName:"snowflake"
        },
        summer:{
            text:"Let's hit the beach",
            iconName:"sun"
        }
    }

    const getSeason =(lat,month)=>{
        if(month>2&&month<9){
            return lat>0 ? 'summer' : 'winter';
        }else{
            return lat>0 ? 'winter' : 'summer';
        }
    }

    const season=getSeason(props.lat,new Date().getMonth());
    const {text,iconName}=seasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
           <i className={`icon-left massive icon ${iconName}`}/>
           <h1>{text}</h1>
           <i className={`icon-right massive icon ${iconName}`}/>
        </div>
    );

};

export default SeasonDisplay;