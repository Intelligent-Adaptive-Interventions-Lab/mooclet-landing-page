export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container-fluid'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>About the Team</h2>
          <p>
            The people behind building, developing and maintaining the MOOClet engine.
          </p>
          <p><b>City/Location:</b> Raleigh, NC; Toronto, ON; Pittsburgh, PA.</p><p>Our team comprises professors <a href="https://people.engr.ncsu.edu/twprice/website/">Thomas Price</a> from North Carolina State, <a href="http://www.josephjaywilliams.com/">Joseph Jay Williams</a> from University of Toronto, <a href="https://oli.cmu.edu/norman-bier/">Norman Bier</a> and <a href="http://dev.stamper.org/">John Stamper</a> from Carnegie Mellon.We integrate expertise in education research, experimental psychology, human-computer interaction, software development, data mining, statistics and machine learning, and have collectively deployed over 150 field experiments with more than 300 000 learners from 2012 to 2021, working with over 50 teachers and 40 researchers at North Carolina State, Carnegie Mellon, UToronto, Berkeley, Stanford, NU Singapore, and Harvard.Our infrastructure enables both traditional experiments, and adaptive experiments that enable more rapid use of data to enhance and personalize learning for future students, using both human decision making and statistical machine learning algorithms.</p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 mx-auto team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' width='240px' height='240px' />
                  </div>
                  <div className='caption col-sm-9 col-md-11 col-lg-12'>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
