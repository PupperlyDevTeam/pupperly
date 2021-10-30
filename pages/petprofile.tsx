import PetProfileHx from "../components/PetProfileHx"
import PetProfileInfo from "../components/PetProfileInfo"
import PetProfileMed from "../components/PetProfileMed"
import PetProfileVax from "../components/PetProfileVax"
import type { NextPage } from 'next'

import { Container, Button, Paper } from "@mui/material"

const PetProfile: NextPage = () => {
  return (
    <Container sx={{display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr'}}>
      <Paper sx={{gridColumn:'1', gridRow:'span 3'}}>
        <PetProfileInfo/>
      </Paper>
      <Paper sx={{gridColumn:'2', gridRow:'1/4'}}>
        <PetProfileVax/>
        <PetProfileMed/>
        <PetProfileHx/>
      </Paper>
      <Button
        onClick={() => fetch('/.netlify/functions/createPetProfile', {
          method: 'POST',
          body: JSON.stringify({
            owner_id: '103333',
            name: 'nick',
            _id: '65465469849615'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
        Create Pet Profile
      </Button>
      <Button
        onClick={() => fetch('/.netlify/functions/deletePetProfile', {
          method: 'POST',
          body: JSON.stringify({
            _id: '1234'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
        Delete Pet Profile
      </Button>
      <Button
        onClick={() => fetch('/.netlify/functions/getPetProfile', {
          method: 'POST',
          body: JSON.stringify({
            _id: '13035135'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
        Get Pet Profile
      </Button>
      <Button
        onClick={() => fetch('/.netlify/functions/getPetProfileByOwner', {
          method: 'POST',
          body: JSON.stringify({
            _eq: '103333'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
        Get Pet Profile BY OWNER
      </Button>
    </Container>
  )
}

export default PetProfile;