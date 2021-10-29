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
            name: 'kailee',
            _id: '13035135'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
      }
      >
        Create Pet Profile
      </Button>
    </Container>
  )
}

export default PetProfile;