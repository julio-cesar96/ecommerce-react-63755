import { useState } from "react";

const UserList = () => {

    const [user, setUser] = useState(["Robson", "Nay", "Grasi", "Thiago"]);

    return (
        <ul>
            {user.map((user, index) => (
                <li key={index}> {user}</li>
            ))}
        </ul>
    )
}

export default UserList;