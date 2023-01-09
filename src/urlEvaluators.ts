

export const urlEvaluators:{
    [name:string]:(url:string)=>boolean
} = {
    isGmail:(url)=>url.includes("mail.google.com/mail/"),
    isComposeNew:(url)=>url.split("?")[2].includes("compose=new")
}