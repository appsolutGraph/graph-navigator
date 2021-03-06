import React, { Component } from "react";
import Helmet from "react-helmet";
import { Video, Transformation, CloudinaryContext } from 'cloudinary-react'
import { Button, Container, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'

import config from "../../data/SiteConfig";

class Index extends Component {
  render() {
    return (
      <div className="home-container">
        <Helmet title={`Home | ${config.siteTitle}`} />
        <Segment vertical>
          <Container>
            <Grid stackable columns={1} centered>
              <Grid.Row centered>
                <Grid.Column textAlign='center'>
                  <Header as='h1'>{`Discover the Power of Graph technology`}</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Video cloudName='appsolut' publicId='social-network_oa51jd' resource_type="video" loop autoPlay muted >
                    <Transformation height="480" width="852" crop="scale" />
                  </Video>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container>
            <Grid stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Header as='h3' style={{ fontSize: '2em' }}>{`We Help Companies and Companions`}</Header>‚
                  <p style={{ fontSize: '1.33em' }}>
                    {[
                      "We can give your company superpowers to do things that they never thought possible. Let us delight ",
                      "your customers and empower your needs... through pure data analytics.",
                    ].join('')}
                  </p>
                  <Header as='h3' style={{ fontSize: '2em' }}>{`We Make Bananas That Can Dance`}</Header>
                  <p style={{ fontSize: '1.33em' }}>
                    {[
                      "Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.",
                    ].join('')}
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' width={8}>
                  <CloudinaryContext cloudName="appsolut">
                    <Video publicId="social-network_oa51jd" resource_type="video" loop autoPlay muted >
                      <Transformation height="480" width="852" crop="scale" />
                    </Video>
‚                  </CloudinaryContext>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Button size='huge'>{`Check Them Out`}</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>{`"What a Company"`}</Header>
                <p style={{ fontSize: '1.33em' }}>
                  {[
                    "That is what they all say about us",
                  ].join('')}
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>{`"I shouldn't have gone with their competitor."`}</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                  <b>{`Nan`}</b>{` Chief Fun Officer Acme Toys`}
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>{`Breaking The Grid, Grabs Your Attention`}</Header>
            <p style={{ fontSize: '1.33em' }}>
              {[
                "Instead of focusing on content creation and hard work, we have learned how to master the art of doing ",
                "nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic ",
                "and worth your attention.",
              ].join('')}
            </p>
            <Button as='a' size='large'>{`Read More`}</Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>{`Case Studies`}</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>{`Did We Tell You About Our Bananas?`}</Header>
            <p style={{ fontSize: '1.33em' }}>
              {[
                "Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. ",
                "It took years of gene splicing and combinatory DNA research, but our bananas can really dance.",
              ].join('')}
            </p>
            <Button as='a' size='large'>{`I'm Still Quite Interested`}</Button>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Index;
