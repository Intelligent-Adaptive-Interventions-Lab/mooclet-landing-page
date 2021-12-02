import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Video Walkthroughs</h2>
          <p>
            The following are some real-time demonstrations of a Mooclet integrated with various other platforms for A/B testing
          </p>
        </div>
        <div className='row'>
        <iframe width="1200" height="700" src="https://www.youtube.com/embed/Q2rvRxtkL2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
