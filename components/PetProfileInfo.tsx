import { Avatar, Card, Typography, Box, Stack } from "@mui/material"

const PetProfileInfo = () => {
  return (
      <Card variant='outlined'sx={{width: 1/4}}>
        <Box display="flex" alignItems='center' justifyContent='center'>
          <Avatar alt="pet picture" variant='rounded' sx={{height:60, width:60}}/>
          <Stack spacing={2} sx={{p:2}}>
            <Typography>Pet Name</Typography>
            <Typography>Sex</Typography>
          </Stack>
         <Stack spacing={2} sx={{p:2}}>
            <Typography>Species</Typography>
            <Typography>Breed</Typography>
          </Stack>
        </Box>
      </Card>
  )
}

export default PetProfileInfo