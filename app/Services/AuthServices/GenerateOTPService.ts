
const GenerateOTPService = async (email:any) => {
    const generate = async ()=>{
        const res = await fetch("https://exam.elevateegy.com/api/v1/auth/forgotPassword" , {
            method:"POST",
            body:email,
            headers:{
                'content-type': 'application/json'
            }
        })
        const data = await res.json();
        return data
    }
    return {
        response : await generate()
    }
}

export default GenerateOTPService;
