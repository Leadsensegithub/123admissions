import React, { createContext, useState, useEffect, useContext } from 'react';

// Google Pay Context
const GooglePayContext = createContext();

const GooglePayProvider = ({ children }) => {
    const [googlePay, setGooglePay] = useState(null);

    useEffect(() => {
        const loadGooglePayScript = () => {
            return new Promise((resolve, reject) => {
                if (window.google) {
                    resolve(window.google);
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://pay.google.com/gp/p/js/pay.js';
                script.async = true;
                script.onload = () => resolve(window.google);
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        loadGooglePayScript()
            .then(google => setGooglePay(google))
            .catch(err => console.error('Error loading Google Pay script:', err));
    }, []);

    return (
        <GooglePayContext.Provider value={googlePay}>
            {children}
        </GooglePayContext.Provider>
    );
};

const useGooglePay = () => useContext(GooglePayContext);

// Google Pay Button Component
const GooglePayButton = () => {
    const googlePay = useGooglePay();
    const [paymentsClient, setPaymentsClient] = useState(null);

    useEffect(() => {
        if (!googlePay) return;

        const client = new googlePay.payments.api.PaymentsClient({ environment: 'TEST' });
        setPaymentsClient(client);

        const isReadyToPayRequest = {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
                {
                    type: 'CARD',
                    parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA']
                    }
                }
            ]
        };

        client.isReadyToPay(isReadyToPayRequest)
            .then(response => {
                if (response.result) {
                    // Show Google Pay button
                    createAndAddButton(client);
                }
            })
            .catch(err => console.error('Error checking Google Pay readiness:', err));
    }, [googlePay]);

    const createAndAddButton = (client) => {
        const button = client.createButton({
            onClick: () => onGooglePayButtonClicked(client)
        });
        document.getElementById('google-pay-button-container').appendChild(button);
    };

    const onGooglePayButtonClicked = (client) => {
        const paymentDataRequest = {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
                {
                    type: 'CARD',
                    parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA']
                    },
                    tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleMerchantId'
                        }
                    }
                }
            ],
            merchantInfo: {
                merchantId: 'your-merchant-id',
                merchantName: 'Your Merchant Name'
            },
            transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPrice: '10.00',
                currencyCode: 'USD'
            }
        };

        client.loadPaymentData(paymentDataRequest)
            .then(paymentData => {
                // Handle the payment data response
                console.log('Payment data:', paymentData);
                // TODO: Send payment data to your server for processing
            })
            .catch(err => console.error('Error loading payment data:', err));
    };

    return <div id="google-pay-button-container"></div>;
};
export default GooglePayProvider

