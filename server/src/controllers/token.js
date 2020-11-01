const axios = require('axios');

exports.handleToken = async function handleToken(req, res) {

    try {

        console.log('in token api: ', JSON.stringify(req.body))

        const body = {
            merchantRefNum: `${req.body.merchantRefNum}`,
            paymentTypes: ["CARD"]
        };
        // using paysafe base64 encoded private key
        const headers = {
            "Content-Type": `application/json;`,
            Authorization: `Basic cHJpdmF0ZS03NzUxOkItcWEyLTAtNWYwMzFjZGQtMC0zMDJkMDIxNDQ5NmJlODQ3MzJhMDFmNjkwMjY4ZDNiOGViNzJlNWI4Y2NmOTRlMjIwMjE1MDA4NTkxMzExN2YyZTFhODUzMTUwNWVlOGNjZmM4ZTk4ZGYzY2YxNzQ4`,
            Simulator: "EXTERNAL",
            "Access-Control-Allow-Origin": "*",
        };
        let ret = await axios.post(
            `https://api.test.paysafe.com/paymenthub/v1/customers/${req.body.customerId}/singleusecustomertokens`,
            body,
            {
                headers: headers,
            }
        );

        console.log('response token log:: ' + JSON.stringify(ret.data))

        if (ret != null && ret.data != null) {
            return res.status(200).json(ret.data)
        }

    } catch (err) {
        console.error(err)
    }

    return res.status(400).json({msg: 'some error occurred'})

}