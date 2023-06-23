const nodemailer = require("nodemailer");
const sendMail =async(req,res)=>{
  let testAccount=await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'teresa.beatty52@ethereal.email',
        pass: 'ZunCjKWkeBPSFpGXHu'
    }
});
let info= await transporter.sendMail({
  from: '"Sandhya 👻" <sandhyadevipyla4@gmail.com>', // sender address
  to: "sravanipyla04@gmail.com", // list of receivers
  subject: "Hello Sandhya", // Subject line
  text: "Hello Sandhya", // plain text body
  html: "<b>Hello Sandhya</b>", // html body
});
console.log("Message sent: %s", info.messageId); 
  res.send(info)
}

module.exports=sendMail