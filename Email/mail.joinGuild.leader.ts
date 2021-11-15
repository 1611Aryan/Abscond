import path from "path"
import transporter from "../Config/Nodemailer.config"
import Mail from "nodemailer/lib/mailer"

const sendMailToLeader = ({
  leaderEmail,
  guildName,
  name,
}: {
  leaderEmail: string
  guildName: string
  name: string
}) => {
  const options: Mail.Options = {
    from: process.env.NODEMAILER_SENDER,
    to: leaderEmail,
    subject: `${name} joined your guild "${guildName}"`,
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
          We are glad to inform you that ${name} is now a part of your guild.
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

export default sendMailToLeader
