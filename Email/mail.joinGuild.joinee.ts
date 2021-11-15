import path from "path"
import transporter from "../Config/Nodemailer.config"
import Mail from "nodemailer/lib/mailer"

const sendMailToJoinee = ({
  email,
  guildName,
}: {
  email: string
  guildName: string
}) => {
  const options: Mail.Options = {
    from: process.env.NODEMAILER_SENDER,
    to: email,
    subject: `Guild "${guildName}" Joined`,
    html: `
       <body style=" width:100%;height:100vh;   background: #000;
       color: #fff;
       padding:2rem 0;
      
      ">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
              <td style="text-align: center;">
              <img height="200px" style="object-fit:cover" src="cid:iiche" />
              </td>
          </tr>
          <tr>
          <td style="text-align: center;">
          <p style="text-align:center">
          Congratulations!
          <br /><br />
          We are glad to inform you that you are now a part of the guild ${guildName} for our event ABSCOND.
          <br />
          Looking forward to your participation in this adventure.
          <br /><br />
          Regards,
          <br />
          Team IIChE TIET
          
       </p>
       </td>
          </tr>
          <tr>
          <td style="text-align: center;">
       <img  height="200px" style="object-fit:cover"  src="cid:abscond" />
          </td>
          </tr>
          <tr>
          <td style="text-align: center;">
          <a href="https://abscond.netlify.app"> <button style="padding:1rem 1.5rem;background:skyblue;color:#fff;border:0;" >Login</button></a>
          </td>
          </tr>
      </table>
        </body>
              `,
    attachments: [
      {
        filename: "iiche.webp",
        path: path.join(__dirname, "..", "Media", "iiche.webp"),
        cid: "iiche",
      },
      {
        filename: "abscond.png",
        path: path.join(__dirname, "..", "Media", "abscond.png"),
        cid: "abscond",
      },
    ],
  }

  transporter.sendMail(options)
}

export default sendMailToJoinee
