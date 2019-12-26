/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
background-color: dodgerblue;
    padding-bottom: 0;
  

  h2 {
    color: ${props => props.theme.lightShades} !important;
  }
  h3 {
    color: ${props => props.theme.darkShades} !important;
  }
  h4 {
    color: ${props => props.theme.darkAccent} !important;
  }
  .pic{
    background-color: antiquewhite;
    background-image: url("https://media.indiaistore.com/themes/frontend/images/uploads/watch/fitness-n-healthy.png");
    background-attachment: fixed;
    height:35rem;
    background-repeat: no-repeat;
    background-position: right;
  }
  .ff{
   
  }
 
  }
  .button {
    margin-top: 2rem;
  }
`;

const Feature = () => (
  <Layout>
    <Seo title="Feature Us" />

    <Wrapper className="Wrapper">
      <Header />
      <div className="columns pic">
        <div className="column">
          <div className="columns">
            <div className="column">
              <section className="section is-medium">
                <div className="container">
                  <h3 className="title is-spaced is-size-2 has-text-weight-bold has-text-centered  has-text-weight-light">
                    Fitness & Health Stay Motivated. Stay healthy.
                  </h3>

                  <p className="subtitle has-text-centered">
                    Throuthout the day, Apple Watch measures Your workouts,
                    tracks your activity and helps encourage healthy
                    routines.All adding up to a better you.
                  </p>
                </div>
              </section>
            </div>
            <div className="column ff" />
          </div>
        </div>
      </div>
    </Wrapper>
    <Footer />
  </Layout>
);

export default Feature;
