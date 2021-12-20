const User = ({user}) => {
    return (
        <div className="user-container">
            <h4>Name: {`${user.name} ${user.lastname}`}</h4>
            <p>Age: {user.age}</p>
            <p>Sex: {user.sex}</p>
        </div>
    )
};

export default User;