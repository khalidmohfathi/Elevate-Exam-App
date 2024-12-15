


const SignUp = async (Data:any) => {
    const signup = async ()=>{
            const res = await fetch("https://exam.elevateegy.com/api/v1/auth/signup" , {
                method:"POST",
                body:Data,
                headers:{
                    'content-type': 'application/json'
                }
            })
            const data  = await res.json()
            return data;
    }
    return {
        response:await signup()
    }
       
}

export default SignUp;
