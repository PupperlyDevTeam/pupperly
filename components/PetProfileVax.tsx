//this component need to conditionally render based on species.
import { Avatar, Card, Typography, Box, Stack, Container, Button, TextField, FormControl } from "@mui/material"
import { useState, useEffect } from "react"



const PetProfileVax = ({isEdit}) => {

  return (
    <Container>
      <Typography>Vaccinations</Typography>
        <FormControl sx={{p:2}}>
          <Typography>Rabies</Typography><TextField disabled={isEdit} id="rabies" variant='outlined' label="Date Given"/>
          <Typography>DA2PP</Typography><TextField disabled={isEdit} id="distemper" variant='outlined' label="Date Given"/>
          <Typography>Bordetella</Typography><TextField disabled={isEdit} id="bordetella" variant='outlined' label="Date Given"/>
          <Typography>Leptospirosis</Typography><TextField disabled={isEdit} id="lepto" variant='outlined' label="Date Given"/>
          <Typography>Lyme</Typography><TextField disabled={isEdit} id="lyme" variant='outlined' label="Date Given"/>
          <Typography>Influenza</Typography><TextField disabled={isEdit} id="flu" variant='outlined' label="Date Given"/>
        </FormControl>
    </Container>
  )
}

export default PetProfileVax