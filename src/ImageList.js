import React from 'react';
import ImageCard from './ImageCard';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import './ImageList.css';


const Imagelist = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  })

  if(props.isLoading) {
    return (
      <Segment style={{height:'100vh'}}>
        <Dimmer active inverted>
          <Loader size='big'>Loading</Loader>
        </Dimmer>
      </Segment>
    )
  }

  if (!images.length) {
    return (
      <h1 style={{textAlign:'center', minHeight: '75vh', paddingTop:'30vh'}}>
        No Images to show
      </h1>
    )
  }
  return (
    <div className="image-list">
      {images}
    </div>
  )
}

export default Imagelist;