import React from 'react';
import {Col} from 'antd';


function GridCard(props) {
    return (
        <Col  md={6} sm={8} xs={24}>
        <div style={{position: 'relative'}}>
            <a href={`/movie/${props.movieId}`}>
                <img style={{width:'100%', height: ''}} src={props.image} alt={props.movieName}/>
            </a>
        </div>
       </Col>
    )
}

export default GridCard
