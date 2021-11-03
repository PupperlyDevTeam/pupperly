import axios from 'axios';
import { HandlerEvent } from '@netlify/functions';

const API_ENDPOINT = 'https://pupperly-api.hasura.app/v1/graphql';

exports.handler = async (event: HandlerEvent) => {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: 'ERROR in createPetProfile Netlify function: Method Not Allowed',
		};
	}

	//pull information from POST request body
	const { owner_id, name, _id } = JSON.parse(event.body || '');

	console.log(owner_id, name, _id);
	let body = {
		query: `
    mutation createPetProfile($owner_id: String, $_id: String, $name: String) {
      insert_pet_profile(objects: {owner_id: $owner_id, _id: $_id, name: $name}) {
        returning {
          _id
        }
      }
    }
    `,
		variables: {
			owner_id,
			name,
			_id,
		},
	};

	const response = await axios
		.post(API_ENDPOINT, body, {
			headers: {
				'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
			},
		})
		.then((res) => {
			console.log(res.data);
			return {
				statusCode: 200,
				body: JSON.stringify('Profile successfully created'),
			};
		})
		.catch((err) => {
			console.log(err);
			return {
				statusCode: 500,
				body: JSON.stringify({ error: 'Failed to createPetProfile' }),
			};
		});

	return response;
};
