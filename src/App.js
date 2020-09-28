import React, {useEffect, useState} from 'react';
import unsplash from './api/unsplash';
import Footer from './Footer';
import Main from './Main';
import shuffle from "lodash/shuffle";

let collectionNames = ['kids', 'food', 'travel', 'dogs', 'beer', 'guitar', 'books', 'video games']
collectionNames = shuffle(collectionNames);

export default function  App () {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    unsplash
      .get('/search/collections', {
        params: {
          query: collectionNames.pop().toString(),
          per_page: 6//eslint-disable-line
        },
      })
      .then((res) => {
        setImages(res.data.results);
      })
      .then(() => {
        unsplash
          .get('/search/collections', {
            params: {
              query: collectionNames.pop().toString(),
              per_page: 6//eslint-disable-line
            },
          })
          .then((res) => {
            setImages(images => [...images, ...res.data.results]);
          })
      })
      .then(() => {
        unsplash
          .get('/search/collections', {
            params: {
              query: collectionNames.pop().toString(),
              per_page: 6 //eslint-disable-line
            },
          })
          .then((res) => {
            setIsLoading(false);
            setImages(images => [...images, ...res.data.results]);
          })
      })
  }, []);//eslint-disable-line

  const onSubmit = (term) => {
    setIsLoading(true);
    unsplash
      .get('/search/collections', {
        params: {
          query: term.toString(),
          per_page: 15//eslint-disable-line
        },
      })
      .then((res) => {
        setImages(res.data.results);
        setIsLoading(false);
      })
  }

  return (
    <>
      <Main
        images={shuffle(images)}
        isLoading={isLoading}
        onSubmit={onSubmit}
        style={{ marginTop: 0 }}
      />
      <Footer/>
    </>
  );
}