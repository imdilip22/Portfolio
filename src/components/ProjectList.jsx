import React from 'react';

const ProjectList = (props) => {
  return (
    <div className="project-list" style={{ display: 'flex', flexDirection: 'column', margin: '20px', padding: '10px' }}>
      <div className='desctitle' style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
        <h2 className='projecttitle' style={{ textAlign: 'start', marginBottom: '20px', width: '100%' }}>{props.name}</h2>
        <div className="content" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <p className='projectdescription' style={{ flex: 1, marginRight: '20px', textAlign: 'left', border: '1px solid #000', padding: '10px',borderRadius:"10px" }}>{props.description}</p>
          <div className="videos" style={{ flex: 2 }}>
            <div className="video-container" style={{ width: '100%', height: 'auto' }}>
              <video src={props.src} autoPlay muted controls style={{ width: '100%', height: 'auto', border: 'none',borderRadius:"10px" }}></video>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
