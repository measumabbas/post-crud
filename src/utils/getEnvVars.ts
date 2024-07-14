export const getEnvVars = (name:string)=>{
    if(!process.env[name]){
        throw new Error(`Please Provide Environment variable ${name}`)
    }else{
        return process.env[name]
    }
}