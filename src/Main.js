import React, { useRef, useState } from 'react'
import { Input, Menu, Segment, Sticky } from 'semantic-ui-react';
import ImageList from './ImageList';

export default function Main({ images, onSubmit, isLoading }) {
  const contextRef = useRef();

  const [term, setTerm] = useState(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

  return (
    <div ref={contextRef} style={{ fontFamily: 'Avenir' }}>
      <Sticky context={contextRef}>
        <Menu
          attached='top'
          tabular
          style={{ backgroundColor: '#fff', paddingTop: '0em' }}
        >
          <Menu.Item as='a' href="/">
            <img src="/qoala.svg" />
            <span style={{ fontFamily: 'Avenir', marginLeft: '5px', fontSize: '22px' }}>
              Qoala Assignment
            </span>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <form onSubmit={onFormSubmit} >
                <Input
                  fluid
                  autoFocus
                  style={{ maxWidth: '30vw', minWidth: '30vw' }}
                  value={term}
                  // onClick={onFormSubmit}
                  onChange={(event) => setTerm(event.target.value)}
                  // transparent
                  icon={{ name: 'search', link: true, circular: true, color: 'orange' }}
                  placeholder='Search for a collection'
                />
              </form>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
      <Segment attached='bottom'>
        <ImageList images={images} isLoading={isLoading} />
      </Segment>
    </div>
  )
}
