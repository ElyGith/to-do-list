


const APIurl = "http://localhost:3333"



export const handleLogin = async (emailUser: string ,passwordUser:string)=> {

        const res = await fetch(`${APIurl}/login`,
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
    return await res.json()


}


export const handleRegister = async (emailUser: string, passwordUser: string,password_confirm :string ,username:string) => {

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
    return await res.json()


}