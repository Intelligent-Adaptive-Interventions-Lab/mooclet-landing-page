export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>About the Team</h2>
        </div>
        <div className='row'>
          {
            <><p><b>City/Location:</b> Raleigh, NC; Toronto, ON; Pittsburgh, PA.</p><p>Our team comprises professors <a href="https://people.engr.ncsu.edu/twprice/website/">Thomas Price</a> from North Carolina State, <a href="http://www.josephjaywilliams.com/">Joseph Jay Williams</a> from University of Toronto, <a href="https://oli.cmu.edu/norman-bier/">Norman Bier</a> and <a href="http://dev.stamper.org/">John Stamper</a> from Carnegie Mellon.We integrate expertise in education research, experimental psychology, human-computer interaction, software development, data mining, statistics and machine learning, and have collectively deployed over 150 field experiments with more than 300 000 learners from 2012 to 2021, working with over 50 teachers and 40 researchers at North Carolina State, Carnegie Mellon, UToronto, Berkeley, Stanford, NU Singapore, and Harvard.Our infrastructure enables both traditional experiments, and adaptive experiments that enable more rapid use of data to enhance and personalize learning for future students, using both human decision making and statistical machine learning algorithms.</p></>
            // <iframe width="1200" height="650" src="https://www.youtube.com/embed/gePW63HtV40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          /* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'} */}
        </div>
      </div>
    </div>
  )
}
