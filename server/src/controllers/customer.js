const axios = require('axios');

exports.createCustomer = async function createCustomer(req, res) {

    try {

        console.log('in create customer api: ', JSON.stringify(req.body))

        const body = {
            merchantCustomerId: req.body.merchantCustomerId,
            locale: "en_US",
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: {
                year: parseInt(req.body.year),
                month: parseInt(req.body.month),
                day: parseInt(req.body.day),
            },
            email: req.body.email,
            phone: req.body.phone,
        };
        const headers = {
            "Content-Type": `application/json;`,
            Authorization: `Basic cHJpdmF0ZS03NzUxOkItcWEyLTAtNWYwMzFjZGQtMC0zMDJkMDIxNDQ5NmJlODQ3MzJhMDFmNjkwMjY4ZDNiOGViNzJlNWI4Y2NmOTRlMjIwMjE1MDA4NTkxMzExN2YyZTFhODUzMTUwNWVlOGNjZmM4ZTk4ZGYzY2YxNzQ4`,
            Simulator: "EXTERNAL",
        };
        let ret = await axios.post(
            "https://api.test.paysafe.com/paymenthub/v1/customers",
            body,
            {
                headers: headers,
            }
        );

        console.log('response create customer log:: ' + JSON.stringify(ret.data))

        if (ret != null && ret.data != null) {
            console.log('here 1')
            return res.status(200).json(ret.data)
        } else {
            console.log('here 2')
        }

    } catch (err) {
        console.error(err)
    }

    return res.status(400).json({msg: 'some error occurred'})

}


exports.getCustomer = async function getCustomer(req, res) {

    try {

        console.log('in get customer api: ', JSON.stringify(req.query))

        const headers = {
            "Content-Type": `application/json;`,
            Authorization: `Basic cHJpdmF0ZS03NzUxOkItcWEyLTAtNWYwMzFjZGQtMC0zMDJkMDIxNDQ5NmJlODQ3MzJhMDFmNjkwMjY4ZDNiOGViNzJlNWI4Y2NmOTRlMjIwMjE1MDA4NTkxMzExN2YyZTFhODUzMTUwNWVlOGNjZmM4ZTk4ZGYzY2YxNzQ4`,
            Simulator: "EXTERNAL",
        };

        let ret = await axios.get(
            "https://api.test.paysafe.com/paymenthub/v1/customers?merchantCustomerId=" + req.query.merchantCustomerId,
            {
                headers: headers,
            }
        );

        console.log('response get customer log:: ' + JSON.stringify(ret.data))

        if (ret != null && ret.data != null) {
            return res.status(200).json(ret.data)
        }

    } catch (err) {
        console.error(err)
    }

    return res.status(400).json({msg: 'some error occurred'})

}
