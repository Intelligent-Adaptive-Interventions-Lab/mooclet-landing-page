// eslint-disable-next-line
import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Interactive Demonstration</h2>
          <p>
            The following are the links to the demo portal, alongwith a video walkthrough of the demo and the corresponding published work regarding the portal
          </p>
          <h4> Click <a href="http://adaptive-mooclet-lti.canadacentral.cloudapp.azure.com:8000/engine/2/">here</a> to start the interactive demonstration</h4>
          <p>
            We recommend you to interact with the demo in conjunction with watching the video below to get a complete understanding of the system.
          </p>
        </div>
        <div className='row'>
        <iframe width="1200" height="700" src="https://www.youtube.com/embed/Q2rvRxtkL2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4>Link to paper: <a href="https://tiny.cc/icepdf" rel="noreferrer" target="_blank">tiny.cc/icepdf</a></h4>
        </div>
      </div>
    </div>
  )
}
