import React from 'react';
import {Col} from 'antd';


function GridCard(props) {

    if(props.landingPage){
        return (
            <Col  md={6} sm={8} xs={24}>
            <div style={{position: 'relative'}}>
                <a href={`/movie/${props.movieId}`}>
                    <img style={{width:'100%', height: ''}} src={props.image} alt={props.movieName}/>
                </a>
            </div>
           </Col>
        )
    } else{
        return (
            <Col  md={6} sm={8} xs={24}>
            <div style={{position: 'relative'}}>
                 <img style={{width:'100%', height: ''}} src={props.image} alt={props.characterName}/>
            </div>
           </Col>
        )
    }



   
}

export default GridCard
