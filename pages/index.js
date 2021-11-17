import Head from 'next/head'

function About() {

  const skillsFront = ['HTML','SCSS','JS','NextJS','Styled Components','Wordpress']

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
    link: 'http://ligm.u-pem.fr/'
  }]

  const education = [{
    title: 'Bachelor Web developer',
    school: '@CYU',
    startDate: 'Sept 2020',
    endDate: 'Jun 2021',
    link: 'http://lp-dw.fr'
  },{
    title: '2 years University degree in Multimedia and Internet ',
    school: '@UnivGustaveEiffel',
    startDate: 'Sept 2018',
    endDate: 'Apr 2020',
    link: 'https://www.dut-mmi-champs.fr/'
  }]

 return (
  <div className="pd-screen py-4 h-all screen">

    <Head>
      <title>Alan Akra | Web developer</title>
      <meta name="description" content="Alan Akra on the web"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>

    <style global jsx>{`
      html,
      body,
      screen {
        height: 100%;
      }

      body {
        min-height: 100%;
      }
    `}</style>

    <div className="flex justify-center mb-5">
      <img
        src="/pp.jpg"
        className="rounded-full"
        alt="This is me"
        width={200}
        height={200}
      />
    </div>

    <p className="text-xl mb-4">Hi 👋 I’m <a href="https://www.linkedin.com/in/alanakra/" className="link-color">Alan Akra</a>, a fullstack web developer based in the Greater Paris. I’m a emphatic person and I love code and manage digital projects. I also like Bo Bun and Phở 🍜. Recently graduated from <a href="http://cyu.fr" className="link-color">@CYU</a> on <a href="http://lp-dw.fr" className="link-color">Bachelor Web Development</a> , i’m looking opportunities for a permanent contract in web development.
I am also available for <a href="https://www.malt.fr/profile/alanakra" className="link-color">freelance</a> assignments.</p>

    <p className="text-xl mb-6">You can reach me with my <a href="mailto:alanakra@hotmail.fr" className="link-color">email</a>, my <a href="/cv.pdf" className="link-color">CV</a> (in french) and my <a href="https://github.com/alanakra" className="link-color">GitHub</a>.</p>

    <hr/>

    <h2 className="subtitle-page">Skills</h2>
    <div className="flex flex-col sm:justify-between sm:flex-row text-lg">
      <div className="item mb-4">
        <p className="font-bold mb-2">Front-End</p>
          <ul>
            <li>HTML</li>
            <li>SCSS</li>
            <li>JS</li>
            <li>NextJS</li>
            <li>Styled Components</li>
            <li>Wordpress</li>
            <li>GSAP</li>
          </ul>
      </div>

      <div className="item mb-4">
      <p className="font-bold mb-2">Back-End</p>
          <ul>
            <li>PHP</li>
            <li>Symfony</li>
            <li>NodeJS</li>
            <li>Wordpress (Headless)</li>
          </ul>
      </div>

      <div className="item mb-4">
      <p className="font-bold mb-2">Mobile</p>
          <ul>
            <li>React Native</li>
          </ul>
      </div>
    </div>

    <hr/>

    <h2 className="subtitle-page">Experiences</h2>

    <div className="text-lg text-roboto">
      {experience.map((experience) => (
        <>
          <h3>{experience.title} <a href={experience.link} className="link-color">{experience.company}</a></h3>
          <h4>From {experience.startDate} to {experience.endDate}</h4>
          <br/>
        </>
      ))}
    </div>
    <hr/>

    <h2 className="subtitle-page">Éducation</h2>
    <div className="text-lg text-roboto">
      {education.map((education) => (
        <>
          <h3>{education.title} <a href={education.link} className="link-color">{education.school}</a></h3>
          <h4>From {education.startDate} to {education.endDate}</h4>
          <br/>
        </>
      ))}
    </div>

  </div>
 );
}

export default About;