import axios from "axios";
import { HandlerEvent } from '@netlify/functions';

const API_ENDPOINT = 'https://pupperly-api.hasura.app/v1/graphql'

exports.handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'ERROR in getPetProfile Netlify function: Method Not Allowed'}
  }

  //pull information from POST request body
  const { _id } = JSON.parse(event.body || '');
  
  console.log( _id)
  let body = {
    query: `
    query getPetProfile($_id: String!) {
      pet_profile_by_pk(_id: $_id) {
        allergies
        breed
        dob
        med_hx
        medications
        name
        sex
        species
        surg_hx
        vaccinations
      }
    }
      
    `,
    variables: {
      _id
    }
  }

  const response = await axios
    .post(API_ENDPOINT, body, {
      headers: {
        'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`
      }
    })
    .then(res => {
      return {
        statusCode: 200,
        body: JSON.stringify(res.data.data.pet_profile_by_pk)
      }
    })
    .catch(err => {
      console.log('err', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to getPetProfile'})
      }
    })

  return response;
}