import React from "react";
import { Header, Grid, Container, Image, Divider, List } from 'semantic-ui-react'
import css from "../../css/about.css";

const aboutMe = "I have always been passionate about technology. From making a solar cell when I was 11 to playing with my arduino as an adult. I LOVE figuring things out and helping people. There's nothing more satisfying to me than that!"

export default class About extends React.Component {
  render(){
    return (
      <div>
        <Header as='h1' textAlign='center'>About Adam</Header>
        <Grid centered padded>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Image className={css.me} fluid />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <p className={css.content}>{aboutMe}</p>
            <Header as='h2'>I've been told I am...</Header>
              <List className={css.content} bulleted>
                <List.Item>A Deep Thinker</List.Item>
                <List.Item>Detail Oriented</List.Item>
                <List.Item>Great at Teamwork</List.Item>
                <List.Item>Articulate</List.Item>
                <List.Item>Innovative</List.Item>
                <List.Item>Determined</List.Item>
              </List>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Image className={css.oven} fluid />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Header as='h2'>My Interests:</Header>
              <List className={css.content} bulleted>
                <List.Item>Cryptocurrencies</List.Item>
                <List.Item>Industrial Design</List.Item>
                <List.Item>Ceramics</List.Item>
                <List.Item>Permaculture Design</List.Item>
                <List.Item>Microelectronics</List.Item>
                <List.Item>Surfing</List.Item>
                <List.Item>Snowboarding</List.Item>
                <List.Item>And of course coding!</List.Item>
              </List>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Image className={css.meandtal} fluid />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
