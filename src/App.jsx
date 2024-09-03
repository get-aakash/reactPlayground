import { getImageUrl } from "./components/utils"

function Avatar({person, size}){
  return(
    <img className="avatar" 
    src={size<90?getImageUrl(person,"s"):getImageUrl(person,'b')} 
    alt={person.name}
    width={size}
    height={size} 
    />
  )
}

export default function Profile(){
  return (
    <Avatar
    size={120}
    person={{
      name: "Aakash", 
        imageId: '7vQD0fP'
    }}
    />
  )
}