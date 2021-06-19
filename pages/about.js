import Footer from '../components/Footer'

function About(props) {

  const experience = [{
    title: 'Web developer',
    company: '@SopraBankingSoftware',
    startDate: 'Nov 2020',
    endDate: 'Sep 2021',
    link: 'https://soprabanking.com'
  },{
    title: 'Web Developer',
    company: '@LIGM',
    startDate: 'Apr 2020',
    endDate: 'Jul 2020',
    link: 'https://igm.univ-gustave-eiffel.fr/'
  }]

  const education = [{
    title: 'Bachelor Web developer',
    school: '@CYU',
    startDate: 'Sept 2020',
    endDate: 'Jun 2021',
    link: 'http://lp-dw.fr'
  },{
    title: '2 year University degree in Multimedia and Internet ',
    school: '@UnivGustaveEiffel',
    startDate: 'Sept 2018',
    endDate: 'Apr 2020',
    link: 'https://www.dut-mmi-champs.fr/'
  }]

 return (
  <div className="h-full dark:bg-black dark:text-white pd-screen py-4">
    <h1 className="important-title-page">About me</h1>
    <p className="dark:text-dlink">Hi 👋 I’m Alan, a web developer based in the Great Paris. I’m a emphatic person and I love code and manage digital projects. I also like Bo Bun and Phở 🍜. Currently @CYU on Bachelor Web Development , i’m joining a Master of Web & Mobile engineering @IIM and I’m looking opportunities for an apprenticeship in web development.</p>

    <hr/>

    <h2 className="subtitle-page">Experience</h2>

    <div>
      {experience.map((experience) => (
        <>
          <h3>{experience.title} <a href={experience.link} className="link-color" target="_blank">{experience.company}</a></h3>
          <h4>From {experience.startDate} to {experience.endDate}</h4>
          <br/>
        </>
      ))}
    </div>
    <hr/>

    <h2 className="subtitle-page">Education</h2>
    <div>
      {education.map((education) => (
        <>
          <h3>{education.title} <a href={education.link} className="link-color" target="_blank">{education.school}</a></h3>
          <h4>From {education.startDate} to {education.endDate}</h4>
          <br/>
        </>
      ))}
    </div>

    <Footer />

  </div>
 );
}

export default About;