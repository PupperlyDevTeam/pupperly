import { Avatar, Card, Typography, Box, Stack, Container, Grid, Paper, Button, TextField } from "@mui/material"

const PetProfileInfo = ({isEditable, petProfile, setPetProfile}:any) => {

  function updateHx (e:any) {
    e.preventDefault();
    switch (e.target.id) {
      case 'petname' :
        setPetProfile({...petProfile, name:e.target.value});
        break;
      case 'dob' :
        setPetProfile({...petProfile, dob:e.target.value});
        break;
      case 'sex' :
        setPetProfile({...petProfile, sex:e.target.value});
        break;
      case 'species' :
        setPetProfile({...petProfile, species:e.target.value});
        break;
      case 'breed' :
        setPetProfile({...petProfile, breed:e.target.value});
        break;
      default :
        console.log('no changes made')
    }
  }

  return (
    <Container>
      <Avatar alt="pet picture" variant='rounded' sx={{height:150, width:150}}/>
        <Stack>
          <Typography>Pet Name:</Typography><TextField disabled={isEditable} id="petname" variant='outlined' value={petProfile.name} onChange={updateHx}/>
          <Typography>Date of Birth:</Typography><TextField disabled={isEditable} id="dob" variant='outlined' value={petProfile.dob} onChange={updateHx}/>
          <Typography>Sex:</Typography><TextField disabled={isEditable} id="sex" variant='outlined' value={petProfile.sex} onChange={updateHx} />
          <Typography>Species:</Typography><TextField disabled={isEditable} id="species" variant='outlined' value={petProfile.species} onChange={updateHx} />
          <Typography>Breed:</Typography><TextField disabled={isEditable} id="breed" variant='outlined' value={petProfile.breed} onChange={updateHx} />
        </Stack>
    </Container>
  )
}

export default PetProfileInfo