const nodemailer = require('nodemailer');


class MailingController {

    async postNumber(req, res) {
        const { number } = req.body

        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'vykupavto.54@internet.ru',
                pass: '6qeLcENHK8FE0yCrmt2j',
            },
        });


        let result = await transporter.sendMail({
            from: 'vykupavto.54@internet.ru',
            to: 'rustam.tahamtan@gmail.com',
            subject: 'Запрос звонка от клиента',
            text: 'Данное письмо отправлено с сервиса car-buyout.ru',
            html:
                `
                <div>
                    <p>Клиент просит связаться с ним по номеру: ${number}</p>
                </div>
                `,
        });
        return res.json('')
    }

    async postInfo(req, res) {
        const { state, phone, contact, model, year } = req.body

        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'vykupavto.54@internet.ru',
                pass: '6qeLcENHK8FE0yCrmt2j',
            },
        });


        let result = await transporter.sendMail({
            from: 'vykupavto.54@internet.ru',
            to: 'rustam.tahamtan@gmail.com',
            subject: 'Запрос цены от клиента',
            text: 'Данное письмо отправлено с сервиса car-buyout.ru',
            html:
                `
                <div>
                    <p>Клиент просит связаться с ним</p>
                    <br/>
                    <p>Способ связи: ${contact}</p>
                    <p>Номер телефона: ${phone}</p>
                    <p>Состояние авто: ${state}</p>
                    <p>Модель: ${model}</p>
                    <p>Год: ${year}</p>
                </div>
                `,
        });
        return res.json('')
    }

}