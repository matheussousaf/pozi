import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  }


  success = position => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log('latitude', latitude);
    console.log('longitude', longitude);
  }

  error = () => {
    console.error('Unable to retrieve your location');
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>POZI</title>
        </Head>
        
        <GlobalStyle />
  
        <Component
          {...pageProps}
        />        
      </>
    );
  }
}

export default MyApp;
