import axios from "axios";
import { HandlerEvent } from '@netlify/functions';

const API_ENDPOINT = 'https://pupperly-api.hasura.app/v1/graphql'

exports.handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'ERROR in getPetProfile Netlify function: Method Not Allowed'}
  }

  //pull information from POST request body
  const { _eq } = JSON.parse(event.body || '');
  
  let body = {
    query: `
    query getPetProfileByOwner($_eq: String!) {
      pet_profile(where: {owner_id: {_eq: $_eq}}) {
        name
        species
        breed
        dob
      }
    }
    `,
    variables: {
      _eq
    }
  }

  const response = await axios
    .post(API_ENDPOINT, body, {
      headers: {
        'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`
      }
    })
    .then(res => {
      console.log(res.data.data.pet_profile);
      return {
        statusCode: 200,
        body: JSON.stringify(res.data.data.pet_profile)
      }
    })
    .catch(err => {
      console.log('err', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to getPetProfileByOwner'})
      }
    })

  return response;
}