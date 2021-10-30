import { Card, Typography, Box, Stack, Container, Grid, Paper, Button, TextField, FormControl } from "@mui/material"

const PetProfileHx = ({isEdit}) => {
  //const isEdit = {isEdit}

  return (
    <Container>
      <Typography>Major Medication History</Typography>
      <Stack spacing={2} sx={{p:2}}>
        <FormControl>
          <TextField disabled = {isEdit} id="medhx" variant='outlined' label="Past Illness, Surgeries or Other?"/>
        </FormControl>
      </Stack>
    </Container>

  )
}
export default PetProfileHx