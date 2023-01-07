// import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../components/Authentication/AuthProvider";
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import Profile from "./Sections/Profile";


const Home = () => {
  const { user } = useContext(AuthContext);
  const handleClick = () => {
        console.log(user.uid)
        console.log(user.email)
        console.log(user.displayName)
    }
    const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sapiente culpa dolores, nulla, ab nesciunt tempora aliquid deleniti natus necessitatibus, nisi perferendis commodi. Accusamus adipisci nam autem ratione magnam sapiente eveniet qui tempora expedita a commodi omnis minima similique obcaecati, asperiores numquam ipsam totam non nemo nihil esse, quae sequi aliquid. Commodi magni itaque adipisci corrupti ipsum odio, ducimus voluptate repellat nisi, doloribus quia facere porro minima veritatis quo voluptates praesentium natus quod sit id illo impedit ratione possimus! Odio ex excepturi rem doloribus, exercitationem incidunt, vitae quod, aut explicabo quam magni sunt laborum. Optio quo praesentium vero officia corrupti!"
    return (
        <div>
        <Navbar/>
        <Button bg="info" onClick={handleClick}>
            onClick
        </Button>
        <Profile/>
        </div>
    );
};

export default Home