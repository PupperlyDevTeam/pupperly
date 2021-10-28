import PetProfileHx from "../components/PetProfileHx"
import PetProfileInfo from "../components/PetProfileInfo"
import PetProfileMed from "../components/PetProfileMed"
import PetProfileVax from "../components/PetProfileVax"
import { Container ,Grid, Stack, Box, Card, Paper } from "@mui/material"

export default function petProfile() {
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
    </Container>
  )
}