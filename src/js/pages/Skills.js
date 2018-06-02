import React from "react";
import { Header, Grid, Segment, Icon } from 'semantic-ui-react';
import css from "../../css/skills.css";

export default class Skills extends React.Component {
  render(){
    return (
      <div>
        <Grid centered padded>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Header as='h2'>Technical Skills</Header>
            <Segment.Group piled>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                JavaScript</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                Nodejs</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                Java</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                Git</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                MySql</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                Agile</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                MongoDB</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                React</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                Angularjs</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                jQuery</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                HTML 5</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                CSS3</Segment>
              <Segment className={css.content}>
                <Icon name='circle'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                <Icon name='circle thin'/>
                Php</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Header as='h2'>Universal Skills</Header>
            <Segment.Group className={css.content} piled>
              <Segment className={css.content}>Excellent Time Management</Segment>
              <Segment className={css.content}>Adaptability</Segment>
              <Segment className={css.content}>Decision Making</Segment>
              <Segment className={css.content}>Able to Work Under Pressure</Segment>
              <Segment className={css.content}>Creative</Segment>
              <Segment className={css.content}>Strong Communication</Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
