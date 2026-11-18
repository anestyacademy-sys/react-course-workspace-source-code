interface userProps{
    username: string;
    isLoggedIn: boolean;
}

function UserStatus( { username, isLoggedIn } : userProps){

    if(isLoggedIn){
        return (
            <h1 className="text-blue-600 text-center text-3xl font-bold mb-2" >Welcome back, {username} !</h1>
        )
    }else{
        return (
            <h1 className="text-center text-gray-500 text-3xl font-bold mb-2" > Please login ! </h1>
        )
    }

}


export default UserStatus;