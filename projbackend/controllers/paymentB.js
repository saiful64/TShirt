var braintree = require("braintree");

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'kn3tzsgg7v6f4vkv',
    publicKey:    't5s48j7t8md8gmb9',
    privateKey:   'f4e33a7b6ae1535fcc4647fe6c0e7636'
});

exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, function (err, response) {
        if (err) {
            req.status(500).send(err);
        }else {
            res.send(response);
        }
      });
};

exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce;
    let amountFromTheClient = req.body.amount;
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
          if (err) {
              res.status(500).json(err);
          }else {
              res.json(result);
          }
      });
};
