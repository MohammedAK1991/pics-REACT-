import React from 'react';
import {
  Container,
  Icon,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

export default function Footer() {
  return (
    <Segment inverted vertical
      style={{
        backgroundColor :'rgb(236, 236, 236)',
      }}
    >
      <Container textAlign='center'>
        <Image centered size='mini' src='/qoala2.svg' />
        <List horizontal divided link size='large'
        >
          <List.Item as='a' href='https://www.instagram.com/mohmedak_/' target="_blank">
            <Icon link name='instagram blue' size='large' />
          </List.Item>
          <List.Item as='a' href='https://www.linkedin.com/in/mohmedak/' target="_blank">
            <Icon link name='linkedin blue' size='large' />
          </List.Item>
          <List.Item as='a' href='https://github.com/MohammedAK1991' target="_blank">
            <Icon link name='github black' size='large' />
          </List.Item>
          <List.Item as='a' href='https://mohammedak1991.github.io/mohammedak.github.io/' target="_blank">
            <Icon link name='user secret black' size='large' />
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}
