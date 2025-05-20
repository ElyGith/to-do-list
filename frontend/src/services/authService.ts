


const APIurl = "http://localhost:3333"



export const handleLogin = async (emailUser: string ,passwordUser:string)=> {

        const res = await fetch(`${APIurl}/user/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailUser,
                    password: passwordUser
                })
            }
        )
    const response= await res.json();
    localStorage.setItem("token", response.token);

        return response;


}


export const handleRegister = async (emailUser: string, passwordUser: string,password_confirm :string ,username:string) => {

    console.log('emailUser => ',emailUser)
    console.log('passwordUser => ',passwordUser)
    console.log('password_confirm => ',password_confirm)
    console.log('username => ',username)

    const res = await fetch(`${APIurl}/user/register`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailUser,
                password: passwordUser,
                password_confirmation: password_confirm,
                full_name: username
            })
        }
    )
    console.log('res fetch => ',res)
    return await res.json()


}