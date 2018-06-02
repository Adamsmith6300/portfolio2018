import React from 'react';
import { Link } from 'react-router';
import { Button, Grid, Divider, Header } from 'semantic-ui-react';
import css from "../../css/projectGrid.css";

var projectsInfo = [
  {
    name: "Yams",
    desc: "Nodejs app where users can scan grocery receipts to keep track of their food. (Academic Project)",
    show: {},
    isLive: {display: 'none'},
    glink: 'https://github.com/ExtremeSkepticist/Yams',
    plink: 'https://calm-caverns-80656.herokuapp.com/'
  },
  {
    name: "Surfin",
    desc: "A mock surf shop using Angularjs and MongoDB. (Personal Project)",
    show: {},
    isLive: {display: 'none'},
    glink: 'https://github.com/Adamsmith6300/surfin',
    plink: 'https://pacific-falls-31872.herokuapp.com/'
  },
  {
    name: "PlantMister",
    desc: "Fun project where I used my arduino, ultrasonic transducers and a humidity sensor to automatically water a plant! (Personal Project)",
    show: {display: 'none'},
    isLive: {},
    glink: 'https://github.com/Adamsmith6300/arduino-stuff/blob/master/dht22sketch_jul04a/dht22sketch_jul04a.ino',
    plink: ''
  },
  {
    name: "MatricesFun",
    desc: "A Java program that calculates the addition of two matrices. (Academic Project)",
    show: {display: 'none'},
    isLive: {},
    glink: 'https://github.com/Adamsmith6300/comp1510-lab-11/blob/master/MatrixDriver.java',
    plink: ''
  },
  {
    name: "RandomWalker",
    desc: "A simple Java program that mathematically simulates an objects random movement. (Academic Project)",
    show: {display: 'none'},
    isLive: {},
    glink: 'https://github.com/Adamsmith6300/lab9/blob/master/RandomWalker.java',
    plink: ''
  },
  {
    name: "DrawStar",
    desc: "Another Java program that draws an expanding star with the drag of your mouse. (Academic Project)",
    show: {display: 'none'},
    isLive: {},
    glink: 'https://github.com/Adamsmith6300/drawStar',
    plink: ''
  },
  {
    name: "Calendar",
    desc: "One of my first projects I wrote with Vanilla Javascript. A simple calendar that allows you to add notes. (Personal Project)",
    show: {},
    isLive: {display: 'none'},
    glink: 'https://github.com/Adamsmith6300/portfolio/tree/master/calendar',
    plink: ''
  }
]

const allProjects = projectsInfo.map(project =>
    <Grid.Column className={css.col} mobile={16} tablet={8} computer={8}>
      <div className={css[project.name]}></div>
      <Header textAlign='center'
         as='h1'>{project.name}</Header>
      <p className={css.blurbStyles}>{project.desc}</p>
      <div padded className={css.buttonGroup}>
        <a style={project.show} href={project.plink} target='_blank'>
          <Button inverted fluid color='red'>View Project</Button>
        </a>
        <Divider style={project.show} horizontal>Or</Divider>
        <a href={project.glink} target='_blank'>
          <Button inverted fluid color='red'>View Code</Button>
        </a>
        <Header as='h3' style={project.isLive} textAlign='center' color='red'>This Project is not online.</Header>
      </div>
    </Grid.Column>


)


const ProjectGrid = () => (
  <Grid centered>
    {allProjects}
  </Grid>
)

export default ProjectGrid
