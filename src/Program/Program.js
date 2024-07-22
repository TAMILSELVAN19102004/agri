import React from 'react';
import './Program.css';
import Nav from '../Navpar/Nav';

const Program = () => {
  return (
    <div>
      <Nav/>
    <div className="video-container">
      <div className='header'> 
        
        <h1>TEACHING CLASSES</h1>
        
      </div>
  
      <div className="video-row">
        <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/Sou12pLJFCc?si=n7P6sam9J37R9zGO" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/PfAAU3hVu5U?si=Sej39uI4UepIUKDo" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/iMqj2R62CO8?si=vY-b9VvEsdqOTolr" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      <div className="video-row">
  <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/wTX5ya6zuYs?si=_YxXkDlYOE0qbM5q" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

  <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/-SwqeFpf26Y?si=fT5dXMYKC5kR4bTr" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

  <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/uBGYht2hSPU?si=I8q3eR7mG6xin4QP" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>


<div className="video-row">
  <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/G-Z9BXM9Gy0?si=b6gTV0ONZP-kKxIu" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

  <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/byo9adVQ0Ps?si=kV-wuOczAACk3kJk" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

  <iframe className='video' width="320" height="180" srcDoc={`<iframe src="https://www.youtube.com/embed/Xfwa_tR_a5c?si=vHIs5M79vi1zcsyU" allowfullscreen></iframe>`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>


      </div>
    </div>
  );
};

export default Program;

