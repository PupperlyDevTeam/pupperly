import axios from "axios";
import { HandlerEvent } from '@netlify/functions';

const API_ENDPOINT = 'https://pupperly-api.hasura.app/v1/graphql'

exports.handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'ERROR in updatePetProfile Netlify function: Method Not Allowed'}
  }

  //pull information from POST request body
  const {       
    _id,
    allergies,
    breed,
    dob,
    med_hx,
    medications,
    name,
    sex,
    species,
    surg_hx,
    vaccinations
  } = JSON.parse(event.body || '');
  
  let body = {
    query: `
    mutation updatePetProfile($_id: String!, $allergies: String!, $breed: String!, $med_hx: String!, $medications: String!, $name: String!, $sex: String!, $species: String!, $surg_hx: String!, $vaccinations: String!, $dob: date!) {
      update_pet_profile_by_pk(pk_columns: {_id: $_id}, _set: {allergies: $allergies, breed: $breed, dob: $dob, med_hx: $med_hx, medications: $medications, sex: $sex, species: $species, surg_hx: $surg_hx, name: $name, vaccinations: $vaccinations, _id: $_id}) {
        _id
      }
    }
    `,
    variables: {
      _id,
      allergies,
      breed,
      dob,
      med_hx,
      medications,
      name,
      sex,
      species,
      surg_hx,
      vaccinations
    }
  }

  const response = await axios
    .post(API_ENDPOINT, body, {
      headers: {
        'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`
      }
    })
    .then(res => {
      console.log(res.data.errors);
      return {
        statusCode: 200,
        body: JSON.stringify('Successfully updated pet profile')
      }
    })
    .catch(err => {
      console.log('err', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to updatePetProfile'})
      }
    })
  
    console.log(response);
  return response;
}