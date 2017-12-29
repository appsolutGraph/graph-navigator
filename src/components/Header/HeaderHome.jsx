import React, { Component } from "react";
import Link from "gatsby-link";
import { Button, Container, Icon, Image, Menu, Segment, Visibility } from 'semantic-ui-react'

import config from "../../../data/SiteConfig";
import LogoMain from '../../assets/logos/logo-appsolut-small.png';
import LogoNavigator from '../../assets/logos/logo-navigator-h100.png';
import "./Header.css";

const FixedMenu = () => (
  <Menu inverted fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)
class HeaderHome extends Component {
  constructor(props, context) {
    super(props, context);
  
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
        
    this.state = {
      showFixedMenu: false,
    };
  }

  //-----------------------------------
  // Event Handler
  //-----------------------------------
  hideFixedMenu() { this.setState({ showFixedMenu: false }) }
  showFixedMenu() { this.setState({ showFixedMenu: true }) }

  render() {
    const { showFixedMenu } = this.state
    const { LocalTitle } = this.props;
    const siteTitle = config.siteTitle;
    const siteHeader = `${siteTitle}-${LocalTitle}`
    return (
      <header className='landing-hero'>
        {showFixedMenu && <FixedMenu />}
        <Segment textAlign='center' vertical style={{ padding: '0' }}>
          <Visibility
            onBottomPassed={this.showFixedMenu}
            onBottomVisible={this.hideFixedMenu}
            once={false}
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item className='landing-logo-wrapper'>
                  <Image src={LogoMain} className="landing-logo" alt="Logo appsolut" as={Link} to='/' />
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item as={Link} to='/' active>Home</Menu.Item>
                  <Menu.Item as={Link} to='/info/about/'>About</Menu.Item>
                  <Menu.Item as={Link} to='/blog/'>Blog</Menu.Item>
                  <Menu.Item as={Link} to='/doc/'>Docs</Menu.Item>
                  <Menu.Item>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Container>
          </Visibility>

          <div className='landing-hero-image'>
            <Container>
              <div className='landing-hero-card'>
                <div className='landing-hero-header-container'>
                  <Image src={LogoNavigator} className="landing-hero-header" alt="Logo Graph-Navigator" />
                </div>
                <div className='landing-hero-subheader-container'>
                  <p className='landing-hero-subheader'>{`navigate the Graph of your project and`}</p>
                  <p className='landing-hero-subheader'>{`create insights from data`}</p>
                </div>
                <div className='landing-hero-buttons-container'>
                  <Menu inverted secondary size='massive' compact>
                    <Menu.Item>
                      <Button primary className='landing-hero-button'>
                        Get Started
                        <Icon name='right arrow' />
                      </Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button inverted className='landing-hero-button'>Sign Up</Button>
                    </Menu.Item>
                  </Menu>
                </div>
              </div>
            </Container>
          </div>
        </Segment>
      </header>
    );
  }
}

export default HeaderHome;
