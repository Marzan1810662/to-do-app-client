import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {email:email}
        if(email){
            fetch(`https://rocky-tor-17555.herokuapp.com/token`,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                // console.log('data inside usetoken',data);
                const accessToken = data.accessToken
                setToken(accessToken);
                localStorage.setItem('accessToken',accessToken)
            })
        }
    }, [user]);

    return [token];
}

export default useToken;