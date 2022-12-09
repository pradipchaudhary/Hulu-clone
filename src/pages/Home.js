import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');


    const createNewRoom = (e)=>{
        e.preventDefault();
        console.log("Create New Room.");
        const id = uuidv4();
        setRoomId(id);
        console.log(id);
    }
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img src="/code-sync.png" alt="code sync logo" />
                <h4 className="mainLebel">Paste Invitation ROO</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="ROOM ID" value={roomId} onChange = { (e) => setRoomId(e.target.value)} />
                    <input type="text" className="inputBox" placeholder="USERNAME" value={username} onChange = { (e) => setUsername(e.target.value)} />
                    <button className="btn joinBtn">Join</button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp; <a href="" onClick={createNewRoom} className="createNewBtn">new room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4> Built by <a href="https://github.com/pradipchaudhary"> Pradip Chaudhary</a> </h4>
            </footer>
        </div>
    );
};

export default Home;
