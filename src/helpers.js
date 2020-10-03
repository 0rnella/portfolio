import { createClient } from 'contentful';

export const makeClient = () => {
    return createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE || 'none',
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN
    })
}