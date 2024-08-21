require("dotenv").config(); // 确保可以使用 .env 文件中的变量
const router = require("express").Router();
const nodemailer = require("nodemailer");

// 使用环境变量创建邮件传输器
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME, // 从环境变量获取用户名
    pass: process.env.EMAIL_PASSWORD, // 从环境变量获取密码
  },
});

// 定义发送邮件的异步函数
const sendMail = async (data) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME, // 发件人地址
    to: "kuangyuchen0301@gmail.com", // 收件人地址
    subject: "Contact Form Submission", // 邮件主题
    text: data.message, // 纯文本消息体
    html: `<b>Name:</b> ${data.name}<br><b>Email:</b> ${data.email}<br><b>Message:</b> ${data.message}`, // HTML 消息体
  };

  // 发送邮件并返回结果
  const info = await transporter.sendMail(mailOptions);
  return info.messageId;
};

// 定义处理 POST 请求的路由
router.post("/contact", async (req, res) => {
  const data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.status(400).json({ msg: "Please fill all the fields." });
  }

  try {
    const messageId = await sendMail(data);
    console.log(`Message sent: ${messageId}`);
    res.status(200).json({ msg: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ msg: "There was an error sending your message." });
  }
});

module.exports = router;
