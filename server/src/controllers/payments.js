const axios = require('axios');

exports.handlePayment = async function handlePayment(req, res) {

    try {

        console.log('in payment api: ', JSON.stringify(req.body))

        const body = {
            merchantRefNum: `${req.body.merchantRefNum}`,
            amount: req.body.amount,
            currencyCode: `${req.body.currencyCode}`,
            dupCheck: false,
            settleWithAuth: false,
            paymentHandleToken: `${req.body.paymentHandleToken}`,
            customerIp: "172.0.0.1"
        };
        // using paysafe base64 encoded private key
        const headers = {
            "Content-Type": `application/json;`,
            Authorization: `Basic cHJpdmF0ZS03NzUxOkItcWEyLTAtNWYwMzFjZGQtMC0zMDJkMDIxNDQ5NmJlODQ3MzJhMDFmNjkwMjY4ZDNiOGViNzJlNWI4Y2NmOTRlMjIwMjE1MDA4NTkxMzExN2YyZTFhODUzMTUwNWVlOGNjZmM4ZTk4ZGYzY2YxNzQ4`,
            Simulator: "EXTERNAL",
            "Access-Control-Allow-Origin": "*",
        };
        let ret = await axios.post(
            "https://api.test.paysafe.com/paymenthub/v1/payments",
            body,
            {
                headers: headers,
            }
        );

        console.log('response payment log:: ' + JSON.stringify(ret.data))

        if (ret != null && ret.data != null) {
            return res.json(ret.data)
        }

    } catch (err) {
        console.error(err)
    }

    return res.status(400).json({msg: 'some error occurred'})

}