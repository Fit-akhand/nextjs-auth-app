import nodemailer from "nodemailer"
import User from "@/models/UserModel"
import bcryptjs from "bcryptjs"

export const sendmailer = async({email,emailType,userId}:any) =>{
    try {
        // create a hash token
        const hashToken = await bcryptjs.hash(userId.toString(),10)

        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId,
                {
                verifyToken : hashToken,
                verifyTokenExpiry: Date.now() +3600000
                })
        }
        else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId,
                {forgotPasswordToken: hashToken,
                 forgotPasswordTokenExpiry : Date.now() + 3600000   
                })
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.USER_ID,
                pass: process.env.USER_PASS
            }
        })

        const mailOptions = {
            from:'akhandrajsingh30@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your Email" : "Reset your Password",
            html: `<p>
                    Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">
                    here
                    </a> to ${emailType === "VERIFY" ? "Verify your Email" : "Reset your Password"}.

                    <br><br>

                    Or copy and paste this link into your browser:

                    <br>

                    ${process.env.DOMAIN}/verifyemail?token=${hashToken}
                    </p>
                    `
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;


    } catch (error:any) {
        throw new Error(error.message);
    }
}