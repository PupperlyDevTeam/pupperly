import { Avatar, Card, Typography, Box, Stack, Container, Button, FormControl, TextField } from "@mui/material"
import { useState, useEffect } from "react"

const PetProfileMed = ({isEdit, petProfile, setPetProfile}) => {

  return (
    <Container>
      <Typography>Medications</Typography>
      <Stack spacing={2} sx={{p:2}}>
        <FormControl>
        <Typography>Diet:</Typography> <TextField disabled={isEdit} id="food" label="What does your pet eat?"/>
        <Typography>Preventatives:</Typography> <TextField disabled={isEdit} id="preventatives" label="Flea/Tick/Heartworm Products"/>
        <Typography>Vitamins/Supplements:</Typography> <TextField disabled={isEdit} id="supplements"label="Anything else?"/>
        </FormControl>
      </Stack>
    </Container>
  )
}

export default PetProfileMed