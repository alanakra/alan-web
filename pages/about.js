
function About(props) {
 return (
  <div className="h-full dark:bg-black dark:text-white pd-screen py-4">
    <h1 className="important-title-page">About</h1>
    <p className="dark:text-dlink">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusantium eligendi quas eveniet, blanditiis ut alias facere, vitae deserunt fugiat dignissimos distinctio a eaque veritatis. Doloribus fugit, cum maxime dignissimos nobis blanditiis modi perspiciatis delectus? Maxime quasi ad adipisci tempore, quibusdam esse autem! Error velit sed similique ipsum eum voluptatibus temporibus corrupti voluptatum, placeat incidunt nemo rem sint aliquid modi consectetur neque beatae maxime assumenda magni architecto. At, quidem ab!</p>

    <hr/>

    <h2 className="subtitle-page">Experience</h2>
    <div>
      <h3>Web developer <a href="https://soprabanking.com" className="link-color" target="_blank">@SopraBankingSoftware</a></h3>
      <h4>From Nov 2020 to Sep 2021</h4>
      <br/>
      <h3>Web developer <a href="https://igm.univ-gustave-eiffel.fr/" className="link-color" target="_blank">@LIGM</a></h3>
      <h4>From Apr 2020 to Jul 2020</h4>
    </div>

    <hr/>

    <h2 className="subtitle-page">Education</h2>
    <div>
      <h3>Bachelor Web developer <a href="http://lp-dw.fr" className="link-color" target="_blank">@CYU</a></h3>
      <h4>From Sept 2020 to Jun 2021</h4>
      <br/>
      <h3>2 year University degree in Multimedia and Internet <a href="https://www.dut-mmi-champs.fr/" className="link-color" target="_blank">@UnivGustaveEiffel</a></h3>
      <h4>From Sept 2018 to Apr 2020</h4>
    </div>

  </div>
 );
}

export default About;