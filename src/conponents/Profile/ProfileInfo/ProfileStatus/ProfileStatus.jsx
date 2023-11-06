import React, { useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
    const {
        status,
        updateUserStatus
    } = props

    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status ?? "test")
    
    const handleDoubleClick = (e) => {
        setEditMode(true);
    }

    const handleFocusOut = () => {
        setEditMode(false);
        updateUserStatus(localStatus);
    }

    const handleChange = (e) => {
        setLocalStatus(e.target.value)
    }

    return (
        <>
            {editMode
                ?   <div>
                        <input 
                            value={localStatus} 
                            type="text" 
                            autoFocus={true}
                            onBlur={handleFocusOut}
                            onChange={handleChange}
                        />
                    </div>
                :   <div>
                        <span 
                            onDoubleClick={handleDoubleClick} 
                        >
                            {localStatus}
                        </span>
                    </div>}
        </>
    );
}

export default ProfileStatus;