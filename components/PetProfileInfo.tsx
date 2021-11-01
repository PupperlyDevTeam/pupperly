import { Avatar, Card, Typography, Box, Stack, Container, Grid, Paper, Button, TextField } from "@mui/material"

const PetProfileInfo = ({isEdit, petProfile, setPetProfile}) => {
  return (
    <Container>
      <Avatar alt="pet picture" variant='rounded' sx={{height:150, width:150}}/>
        <Stack>
          <Typography>Pet Name:</Typography><TextField disabled={isEdit} id="petname" variant='outlined' label="Date Given"/>
          <Typography>Date of Birth:</Typography><TextField disabled={isEdit} id="dob" variant='outlined' label="Date Given"/>
          <Typography>Sex:</Typography><TextField disabled={isEdit} id="sex" variant='outlined' label="Date Given"/>
          <Typography>Species:</Typography><TextField disabled={isEdit} id="species" variant='outlined' label="Date Given"/>
          <Typography>Breed:</Typography><TextField disabled={isEdit} id="breed" variant='outlined' label="Date Given"/>
        </Stack>
    </Container>
  )
}

export default PetProfileInfo