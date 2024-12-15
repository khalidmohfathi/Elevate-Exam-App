
const ResetPassword =async (Data:any) => {
    const reset = async()=>{
        const res = await fetch("https://exam.elevateegy.com/api/v1/auth/resetPassword" , {
            method:"PUT",
            body:Data,
            headers:{
                'content-type': 'application/json'
            }
        })
        const data = await res.json();
       return data;
    }
    return {
        response: await reset()
    }
}

export default ResetPassword;
