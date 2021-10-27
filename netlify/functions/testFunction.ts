import axios from "axios";
import { HandlerEvent } from '@netlify/functions';

const API_ENDPOINT = 'https://pupperly-api.hasura.app/v1/graphql'

console.log('process.env', process.env)

exports.handler = async (event: HandlerEvent) => {
  let query = {
    query: `
    query MyQuery {
      test {
        test
      }
    }
    `
  }

  const result = await axios({
    url: API_ENDPOINT,
    method: 'POST',
    data: query,
    headers: {
      'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`
    }
  }) 

  console.log(result.data)

  return {
    statusCode: 200,
  }
}