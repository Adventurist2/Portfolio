"use server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";


export async function sendMail({name, email, subject, message}:{name:string, email:string, subject:string, message:string}) {
    try {
      console.log(process.env.NEXT_PUBLIC_EMAIL_USER);

        const transporter = nodemailer.createTransport({
          secure: true,
          host : "smtp.gmail.com",
          port: 465,
          auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your email address
            pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your email password or app password
          },
        });
    
        // Email Options
        const mailOptions = {
          from:email, // Sender's email
          to:  process.env.NEXT_PUBLIC_EMAIL_USER , // Receiver's email
          subject: `New Message: ${subject}`, // Subject line
          text: `You have received a new message from ${name} (${email}):\n\n${message}`, // Plain text body
        };
    
        // Send Mail
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
    
        return { success: true, message: "Email sent successfully!" };
      } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
      }

}


export async function downloadCV(){
    // const file_path = "/Chandan_Achary_Resume.pdf";
    // console.log("file_path", file_path);
    // try{
    //     if(fs.existsSync(file_path)){
    //         return {success:true, message:"file found", file_path};
    //     }
    // }catch(err){
    //     console.error("Error downloading file:", err);
    //     return {success:false, message:"Failed to download file"};
    // }

    fetch("http://localhost:3000/api/download_file").then((res) => {
      console.log("Fetching file");
        console.log(res);
        return res.json();
    }).catch((err) => {
        console.error("Error downloading file:", err);
        return {success:false, message:"Failed to download file"};
    });
}
