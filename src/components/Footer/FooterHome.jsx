import React, { Component } from "react";
import Link from "gatsby-link";
import { Container, List, Grid, Header, Segment } from 'semantic-ui-react'

import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.css";

class FooterHome extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <h4>
            {copyright}
          </h4>

          <Link to={url}>
            <button>Subscribe</button>
          </Link>
          <h4>
            Based on{" "}
            <a href="https://github.com/appsolutGit/app-starter-gatsby-semantic">
              appsolut Starter for Static-CMS projects
            </a>.
          </h4>
        </div>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

      </footer>
    );
  }
}

export default FooterHome;
