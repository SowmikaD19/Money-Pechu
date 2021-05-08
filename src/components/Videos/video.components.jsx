import React from 'react';
import data from './res';
import './assests/css/video.css';
import ReactPlayer from 'react-player'
// const uri ='https://core-qc-dev.herokuapp.com/add-on/api/swagger-ui.html#/qc-main-ws-controller-version-1/getLatestYouTubeVideoListUsingGET';

console.log(data.Videos);

// let header= new Headers();
// header.append('channel_id','UC7fQFl37yAOaPaoxQm-TqSA');
// header.append('video_count',2);
// let req = new Request(uri,{
//     method:'GET',
//     headers: header,
//     mode:'cors'
// });


// fetch(req).then((response)=>{
//     if(response.ok){
//         return response.json()
//     }
//     else{
//         throw new Error('BAD RESPONSE');
//     }

// }).then((jsonData)=>{
//     console.log(jsonData.Videos)

// }).catch((err)=>{
//     console.log("Error",err.message);
// })


export default function Video()
{
    
   
    return (
        
        <div className="video">
            <p className="name">Video Library From our Media</p>
        
            <ReactPlayer className="image"  width="550px" height="350px"
    url={data.Videos[0].VideoURL}
    
/>  


            <ReactPlayer className="image1" width="550px" height="350px"
    url={data.Videos[1].VideoURL}
/>
            
    
        </div>

    );
}