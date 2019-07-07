import React, { Component } from 'react'
import { Jumbotron, Container, Card, Row, Col } from 'reactstrap'

import DiagonalSplit from '../components/DiagonalSplit'

// TODO: Replace with sponsors from CMS
const tempSponsors = [
  {
    tier: 'Platinum',
    color: '#CCC2C2',
    // sponsors: [{ name: 'Company name', logo: 'image source' }],
  },
  {
    tier: 'Gold',
    color: '#C98910',
    sponsors: [],
  },
  {
    tier: 'Silver',
    color: '#A8A8A8',
    sponsors: [],
  },
  {
    tier: 'Bronze',
    color: '#965A38',
    sponsors: [],
  },
]

export default class Sponsors extends Component {
  render() {
    return (
      <Jumbotron style={{ padding: 0 }}>
        <DiagonalSplit invert />
        <Container
          className="jumbotron-padding"
          style={{ paddingTop: '4em', paddingBottom: '2em' }}>
          <h1 style={{ textAlign: 'center' }}>Sponsors</h1>

          {tempSponsors.map(tier => (
            <div>
              <h2 className="mt-5" style={{ color: tier.color, textAlign: 'center' }}>
                {tier.tier.toUpperCase()}
              </h2>

              <Row className="justify-content-md-center">
                {tier.sponsors && tier.sponsors.length ? (
                  tier.sponsors.map(sponsor => (
                    <Col xs="6" sm="4">
                      <Card>
                        <h3>{sponsor.name}</h3>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col>
                    <p className="mt-4 mb-4" style={{ textAlign: 'center', opacity: 0.6 }}>
                      coming soon ✨
                    </p>
                  </Col>
                )}
              </Row>
            </div>
          ))}
        </Container>
        <DiagonalSplit />
      </Jumbotron>
    )
  }
}