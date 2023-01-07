import Navbar from "../../components/Navbar"
import Card from 'react-bootstrap/Card';
const User = () => {
    const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sapiente culpa dolores, nulla, ab nesciunt tempora aliquid deleniti natus necessitatibus, nisi perferendis commodi. Accusamus adipisci nam autem ratione magnam sapiente eveniet qui tempora expedita a commodi omnis minima similique obcaecati, asperiores numquam ipsam totam non nemo nihil esse, quae sequi aliquid. Commodi magni itaque adipisci corrupti ipsum odio, ducimus voluptate repellat nisi, doloribus quia facere porro minima veritatis quo voluptates praesentium natus quod sit id illo impedit ratione possimus! Odio ex excepturi rem doloribus, exercitationem incidunt, vitae quod, aut explicabo quam magni sunt laborum. Optio quo praesentium vero officia corrupti!"
    return (
        <div>
            <Navbar/>
            <Card text={text} />
        </div>
    );
};

export default User;