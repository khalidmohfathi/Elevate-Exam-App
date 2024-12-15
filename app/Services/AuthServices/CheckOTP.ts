
const CheckOTP = async (resetCode:any) => {
    const check =async ()=>{
        const res = await fetch("https://exam.elevateegy.com/api/v1/auth/verifyResetCode",{
            method:"POST",
            body:resetCode,
            headers:{
                'content-type': 'application/json'
            }
        })
        const data = await res.json();
        return data;
        
    }
    return {
        response: await check()
    }
}

export default CheckOTP;
