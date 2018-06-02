import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router";

const COLOR = 'red';

export default class MainMenu extends React.Component {
  state = { active: 'Projects'}

  handleClick = (e, { name }) => this.setState({ active: name })

  render() {
    const { active } = this.state

    return (
      <Menu stackable>
        <Link to="/">
          <Menu.Item name='Projects' color={COLOR} active={active === 'Projects'} onClick={this.handleClick} />
        </Link>
        <Link to="skills">
          <Menu.Item  name='Skills' color={COLOR} active={active=== 'Skills'} onClick={this.handleClick} />
        </Link>
        <Link to="about">
          <Menu.Item  name='About' color={COLOR} active={active === 'About'} onClick={this.handleClick} />
        </Link>
      </Menu>
    )
  }
}
