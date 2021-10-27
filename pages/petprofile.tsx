import PetProfileHx from "../components/PetProfileHx"
import PetProfileInfo from "../components/PetProfileInfo"
import PetProfileMed from "../components/PetProfileMed"
import PetProfileVax from "../components/PetProfileVax"

export default function petProfile() {
  return (
    <div>
     <PetProfileInfo/>
     <PetProfileVax/>
     <PetProfileMed/>
     <PetProfileHx/>
    </div>
  )
}