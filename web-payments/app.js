if(window.PaymentRequest){
    //if its supported on the users browser
    //paymeny request object
    const supportedPaymentMethods = 
    [
        {
            supportedMethods: ['basic-cards']
        }
    ];

    //payment details
    const paymentDetails ={
        total: {
            label: 'Total Cost',
            amount: {
                currency: 'USD',
                value: 30
            }
        }
    }

    //custom options
    const options = {}

    //create request
    const paymentRequest = new PaymentRequest(
        supportedPaymentMethods, paymentDetails, options
    );

    paymentRequest.show()
     .then(payment => console.log(payment))
     .catch(error => console.error(error));
    

}else{
    //fallback to other implementation
}