import nodemailer from 'nodemailer';

function sendMailAPI(user_email, user_password) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aakashrathore0214@gmail.com',
            pass: 'mwtldupnopgpmatl'
        }
    });

    var mailOptions = {
        from: 'aakashrathore0214@gmail.com',
        to: user_email,
        subject: 'Verification Email Indore Careers',
        html: "<h1>Welcome to Indore Careers</h1><p>you have successfully register to our application , your login credentials are attached below</p><h3>Username : " + user_email + "</h3><h3>Password : " + user_password + "</h3><h2>Click on the link below to verify your account</h2>http://localhost:3000/verifyuser/" + user_email
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default sendMailAPI;