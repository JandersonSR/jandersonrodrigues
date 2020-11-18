import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div className="content-body">
        
        
      
        <div style={{width: '100%', height:'100%' ,margin: 'auto', overflow:'visible'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              /> */}

            <div className="banner-text" style={{  marginTop: '10%'}}>
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS/JavaScript | JAVA | C | React | AWS  | Docker | Performance | Testing | Express | Security</p>
          <p style={{ height: '35vh', width: '75%', margin: 'auto', paddingTop: '1em'}}>
               Olá meu nome é Janderson e sou estudante de Análise e Desenvolvimento de Sistemas
               na FATEC Sorocaba, estudo no período noturno, porém mesmo não tendo experiência empresarial 
               na área de T.I, tenho realizado diversos projetos pessoais, auxilei na melhora de Performance e criação
               de sites para a agência StarLeads e realizado trabalhos acadêmicos. <br/> 
          </p>
              

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
      
      </div>
    )
  }
}

export default About;
