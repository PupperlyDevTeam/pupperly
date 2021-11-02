import PetProfileHx from '../components/PetProfileHx';
import PetProfileInfo from '../components/PetProfileInfo';
import PetProfileMed from '../components/PetProfileMed';
import PetProfileVax from '../components/PetProfileVax';
import type { NextPage } from 'next';

import { Container, Button, Paper } from '@mui/material';

const PetProfile: NextPage = () => {
  return (
    <Container
      sx={{
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
      }}
    >
      <Paper sx={{ gridColumn: '1', gridRow: 'span 3' }}>
        <PetProfileInfo />
      </Paper>
      <Paper sx={{ gridColumn: '2', gridRow: '1/4' }}>
        <PetProfileVax />
        <PetProfileMed />
        <PetProfileHx />
      </Paper>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/createPetProfile', {
            method: 'POST',
            body: JSON.stringify({
              owner_id: '2355252',
              name: 'nick',
              _id: '1234',
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Create Pet Profile
      </Button>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/deletePetProfile', {
            method: 'POST',
            body: JSON.stringify({
              _id: '1234',
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Delete Pet Profile
      </Button>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/getPetProfile', {
            method: 'POST',
            body: JSON.stringify({
              _id: '65465469849615',
              // _id: '13035135',
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Get Pet Profile
      </Button>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/getPetProfileByOwner', {
            method: 'POST',
            body: JSON.stringify({
              _eq: '103333',
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Get Pet Profile BY OWNER
      </Button>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/updatePetProfile', {
            method: 'POST',
            body: JSON.stringify({
              _id: '65465469849615',
              allergies: JSON.stringify(['mold', 'wheat', 'beef']),
              breed: 'dog',
              dob: null,
              med_hx: JSON.stringify([
                '{name: urinary tract infection, date: 06/2019}',
              ]),
              medications: JSON.stringify([
                '{name:Sentinel, frequency: 1 tab every month},{name:Fluoxetine, frequency: 1 0.75mg capsule q12 PRN} ',
              ]),
              name: 'Ghost',
              sex: 'Female',
              species: 'Husky/Shepard',
              surg_hx: JSON.stringify([
                '{surgery: spay, date: 10/2017}, {surgery: foreign body removed from LF paw, date: 05/2019}',
              ]),
              vaccinations: JSON.stringify([
                '{name: Rabies, date: 12/2020, due: 12/2024}, {name: Influenza, date: 12/2020, due: 12/2021}',
              ]),

              // _id: '26236',
              // allergies: 'water',
              // breed: 'Koi',
              // dob: '2020-12-12',
              // med_hx: JSON.stringify(['debloating']),
              // medications: JSON.stringify(['fish zoloft']),
              // name: 'Goldfish',
              // sex: 'M',
              // species: 'Fish',
              // surg_hx: null, //must json.stringify any array values
              // vaccinations: null //must json.stringify any array values
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Update Pet Profile
      </Button>
    </Container>
  );
};

export default PetProfile;
