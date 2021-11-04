import { Typography,Stack, Container, FormControl, TextField } from "@mui/material"


const PetProfileMed = ({isEditable, petProfile, setPetProfile}:any) => {

  function updateHx (e:React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const updateMedication = [...petProfile.medications]
   
    switch (e.target.id) {
      case 'food' :
        updateMedication[0] = e.target.value;
        setPetProfile({...petProfile, medications: updateMedication})
        break;
    
      case 'preventative' :
        updateMedication[1] = e.target.value;
        setPetProfile({...petProfile, medications: updateMedication})
        break;
      
     case 'supplements' :
        updateMedication[2] = e.target.value;
        setPetProfile({...petProfile, medications: updateMedication})
        break;
      
      default :
        console.log('no changes made')
    }
  }

  return (
    <Container>
      <Typography sx={{fontSize: 'h5.fontSize', fontWeight:'bold'}}>Medications</Typography>
      <Stack spacing={2} sx={{p:2}}>
        <FormControl>
        <Typography>Diet:</Typography> <TextField disabled={isEditable} id="food" placeholder="What does your pet eat?" value={petProfile.medications ? petProfile.medications[0] : ''} onChange={updateHx}/>
        <Typography>Preventatives:</Typography> <TextField disabled={isEditable} id="preventative" placeholder="Flea/Tick/Heartworm Products" value={petProfile.medications ? petProfile.medications[1] : ''} onChange={updateHx}/>
        <Typography>Vitamins/Supplements:</Typography> <TextField disabled={isEditable} id="supplements"placeholder="Anything else?" value={petProfile.medications ? petProfile.medications[2] : ''} onChange={updateHx}/>
        </FormControl>
      </Stack>
    </Container>
  )
}

export default PetProfileMed