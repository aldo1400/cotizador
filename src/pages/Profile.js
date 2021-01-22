import React, { useContext } from 'react';
import ProfileForm from 'components/ProfileForm'
import Header from 'components/Header';
import Breadcrumb from 'components/Breadcrumb';
import UserContext from 'UserContext'

function Profile() {
    const [user, setUser] = useContext(UserContext);

    return (
        <>
            <Breadcrumb current="1" total="7" />
            <Header title={`Hola, ${user.name}`} subtitle="Valida que los datos sean correctos" />
            <div className="profile">
                <ProfileForm />
            </div>
        </>
    );
}

export default Profile;