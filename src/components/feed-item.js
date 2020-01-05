import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledItem = styled.article`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    display: block;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .feed-item-image {
    display: block;
    width: 35%;
    margin-right: 3%;

    @media (max-width: 767px) {
      width: 100%;
      margin-right: 0;
    }
  }

  img {
    display: block;
    object-fit: cover;
    object-position: center;
    margin: 0 auto;

    &:hover {
      opacity: 0.8;
    }
  }

  div {
    width: 63%;
    padding: 20px 0;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

const FeedItem = ({ data }) => (
  <StyledItem>
    {data.image &&
      (data.type === 'external' ? (
        <a
          className="feed-item-image"
          target="_blank"
          rel="noopener noreferrer"
          href={data.url}
        >
          <img src={data.image} alt={data.title} />
        </a>
      ) : (
        <Link to={`/${data.url}`} className="feed-item-image">
          <img src={data.image} alt={data.title} />
        </Link>
      ))}

    <div>
      {data.featured && (
        <p style={{ fontFamily: 'Inconsolata' }}>
          <em>FEATURED</em>
        </p>
      )}

      <h3>
        {data.type === 'external' ? (
          <a target="_blank" rel="noopener noreferrer" href={data.url}>
            {data.title}
          </a>
        ) : (
          <Link to={`/${data.url}`}>{data.title}</Link>
        )}
      </h3>

      {data.site && (
        <h4 style={{ fontWeight: 500 }}>
          Published in:{' '}
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/search?q=${data.site}`}
            >
              {data.site}
            </a>
          </strong>
        </h4>
      )}

      <p style={{ marginBottom: 0 }}>{data.description}</p>
    </div>
  </StyledItem>
);

export default FeedItem;