import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import './projects.scss'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="content-body">
        <div   className="projects-grid ">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450',height:'300px', margin: '25px'}}>
            <CardTitle className='cardImg'style={{color: '#fff', height: '176px'}} >RoboFriends</CardTitle>
            <CardText>
              Este projeto foi criado com o intuito de demonstrar operação de pesquisa com a tecnológia REACT
            </CardText>
            <CardActions border>
              <Button colored a href='https://github.com/JandersonSR/robofriends'>GitHub</Button>
             
              <Button colored a href='https://jandersonsr.github.io/robofriends/'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450',height:'300px', margin: '25px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Facial Recognition</CardTitle>
            <CardText>
              Neste projeto foi trabalhado o conceito de reconhecimento facial
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '400',height:'300px', margin: '25px'}}>
            <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Simple Shop</CardTitle>
            <CardText>
              A criação de uma loja virtual, utilizando banco de dados, sistema de pagamentos e login de usuários
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="content-body"><h1>Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="content-body"><h1>JAVA</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="content-body"><h1>MODELS</h1></div>
      )
    }

  }



  render() {
    return(
      <div style = {{overflow:'hidden'}}>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab className='cardMenu' >WEB / REACT</Tab>
          <Tab className='cardMenu'>ANGULAR</Tab>
          <Tab className='cardMenu'>JAVA</Tab>
          <Tab className='cardMenu'>MODELS</Tab>
        </Tabs>


          <Grid >
            <Cell col={7} >
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
