import React, { useState, useEffect, useContext } from 'react';
import firebaseContext from "../firebase/context";

import Button from '@material-ui/core/Button';

export default function Logout() {

    const firebase = useContext(firebaseContext);

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (checked !== true) {
            firebase.signOutUser();
        }
    }, [checked, firebase]);

    return (
        <Button
            checked={checked} onClick={handleChange} name="checked"
            label="Déconexion"
            labelPlacement="start"
            style={{ color: "#C21010", marginTop: 40 }}>
            Déconexion
        </Button>
    );
}