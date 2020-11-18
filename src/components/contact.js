import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={5}>
            <h2  style={{ fontSize:'2em'}}>Janderson da Silva Rodrigues</h2>
            {/* <img
              src=""
              alt="avatar"
              style={{height: '250px'}}
               /> */}
             <p style={{ fontSize:'1.2em',height: '100vh', width: '75%', margin: 'auto', marginTop:'10px',marginBottom: '5px',paddingTop: '0.8em'}}>
                Caso precise de um profissional, estagiário para auxiliar no desenvolvimento, tomada de decisões ou no processo de análise
                <br/>
                <br/>Entre em contato 
              </p>
          </Cell>
          <Cell col={7}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List style={{overflow:'visible', heigth:'10vh', width:'90vw'}}>
                <ListItem>
                  <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (15) 98153-4503 (Janderson)
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (15) 3011-9368 (Recado - Nilo)
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    jandersonrodriguesir@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
