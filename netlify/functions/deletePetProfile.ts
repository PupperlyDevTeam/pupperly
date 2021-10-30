import axios from "axios";
import { HandlerEvent } from '@netlify/functions';

const API_ENDPOINT = 'https://pupperly-api.hasura.app/v1/graphql'

exports.handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'ERROR in deletePetProfile Netlify function: Method Not Allowed'}
  }

  //pull information from POST request body
  const { _id } = JSON.parse(event.body || '');
  
  console.log( _id)
  let body = {
    query: `
    mutation delete_an_object($_id: String) {
        delete_pet_profile_by_pk (
        objects: {_id: $_id}
        ) {
        returning{
          _id
         }
        }
       }
    `,
    variables: {
      _id
    }
  }

  axios
    .post(API_ENDPOINT, body, {
      headers: {
        'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`
      }
    })
    .then(res => console.log(res.data.errors))

  return {
    statusCode: 200,
    body: JSON.stringify('Profile successfully deleted')
  }
}