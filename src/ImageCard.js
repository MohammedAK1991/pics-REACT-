import React from 'react';

export default function ImageCard (props) {


  const [spans, setSpans] = React.useState(0);

  const imageRef = React.useRef();


  const setImageSpans = () => {
    const height = imageRef.current.clientHeight;
    const calculatedSpans = Math.ceil(height / 10 + 0.5);
    setSpans(calculatedSpans);
  }

  return (
    <div
      className="image-card"
      style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        alt={props.image.title}
        src={props.image.preview_photos[0].urls.regular}
        onLoad={setImageSpans}
      />
      <p>
        {props.image.title.toUpperCase()|| 'no description provided'}
      </p>
    </div>
  )

}

// export default ImageCard;

/*
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 0.5);
    this.setState({ spans: spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
*/