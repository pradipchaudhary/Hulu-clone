import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Home = () => {

    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');


    const createNewRoom = (e)=>{
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success('Created a new room');
    }
    
    const joinRoom = () => {
        if(!roomId || !username){
            toast.error("ROOM ID & username is required");
            return;
        }
        
        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
        // navigate(`/editor/${roomId}`, { state: {username}})
    }

    // Enter 

    const inputEnterHandler = (e) => {
        console.log('Event', e.code);
        if(e.code === 'Enter'){
            joinRoom();
        }
    }

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img src="/code-sync.png" alt="code sync logo" />
                <h4 className="mainLebel">Paste Invitation ROO</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="ROOM ID" value={roomId} onChange = { (e) => setRoomId(e.target.value)} onKeyUp={inputEnterHandler} />
                    <input type="text" className="inputBox" placeholder="USERNAME" value={username} onChange = { (e) => setUsername(e.target.value)} onKeyUp={inputEnterHandler} />
                    <button className="btn joinBtn" onClick={joinRoom}>Join</button>
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
