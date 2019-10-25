import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Vedio from '../components/Vedio';
import Courses from '../components/Courses';
import Globally from '../components/Globally';
import Feature from '../components/Feature';

const Wrapper = styled.div`
  .main {
    background-image: url(https://colorlib.com/preview/theme/watch/img/header-bg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: center;
  }
  .title {
    font-size: 80px;
    font-weight: 700;
  }
  .control {
    margin-bottom: 19rem;
  }
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
  }
  h5 {
    color: ${props => props.theme.lightShades} !important;
  }
  .control {
    text-align: center;
    m
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Wrapper>
          <div className="main">
            <Header />

            <section className="hero">
              <div className="hero-body">
                <h1 className="subtitle has-text-centered is-size-6 is-spaced">
                  NOW YOU CAN FEEL THE HEAT
                </h1>
                <h1 className="title has-text-centered is-size-1-mobile">
                  Smart New Future
                </h1>

                <p className="control">
                  <a href="#">
                    <button
                      type="submit"
                      className="button is-primary is-normal is-info is-rounded ">
                      BUY NOW
                    </button>
                  </a>
                </p>
              </div>
            </section>
          </div>
        </Wrapper>
        <Vedio />
        <Courses />
        <Globally />
        <Feature />
      </Layout>
    );
  }
}
