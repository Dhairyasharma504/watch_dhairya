/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Wrapper = styled.div`
  background-color: dodgerblue;
  padding-bottom: 0;
  .container {
    margin-top: 0rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
  .button {
    margin-top: 2rem;
  }
  .ff {
    background-color: white;
    background-image: url('https://media.indiaistore.com/themes/frontend/images/uploads/watch/great-accessiories.png');
    background-attachment: fixed;
    height: 35rem;
    background-repeat: no-repeat;
    background-position: right;
  }
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Wrapper className="Wrapper">
      <Header />
      <div className="columns ff">
        <div className="column">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-two-fifths">
                <section className="section">
                  <h2 className="title is-1 has-text-weight-bold">
                    Contact Us
                  </h2>
                  <p>
                    We’re as accessible as your good neighbour. Feel free
                    <br />
                    to give us a shout.
                  </p>
                  <p>
                    <span role="img" aria-label="Round Pushpin">
                      📍
                    </span>{' '}
                    {config.location}
                  </p>
                  <p className="is-4">
                    <span role="img" aria-label="e-mail">
                      📧
                    </span>{' '}
                    <a href={`mailto:${config.email}`}>{config.email}</a>
                  </p>
                  <p>
                    <span role="img" aria-label="telephone">
                      ☎️
                    </span>{' '}
                    <a href={`tel:${config.telephone}`}>{config.telephone}</a>
                  </p>
                  <p className="control">
                    <a href="#">
                      <button
                        type="submit"
                        className="button is-secondary is-medium">
                        Get in touch
                      </button>
                    </a>
                  </p>
                </section>
              </div>
              <div className="column is-two-fifths" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
    <Footer />
  </Layout>
);

export default Contact;
