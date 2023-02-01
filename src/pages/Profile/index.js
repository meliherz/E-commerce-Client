import { useAuth } from "../../contexts/AuthContext";
import { Text,Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';



function Profile(){
    const {user, logout} = useAuth()

    const navigate = useNavigate ();
     const handleLogout = async () => {
         logout(()=>{
            navigate.push ('/');
    }  )}
    // const handleLogout = async () => {
    //     logout(()=>{
    //         history.push("/")
    //     });
    // };
    return(
        <div>
        <Text>Profile</Text>
            <code>{JSON.stringify(user)}</code>
            <br></br>
            <br></br>
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Profile;