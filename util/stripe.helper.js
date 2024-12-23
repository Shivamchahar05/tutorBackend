const config = require("../config/config");
const stripe = require('stripe')(config.STRIPE.STRIPE_TEST_SECRET_KEY);
const constant = require("../config/constant");
class StripeHelper {

    createCheckoutSession = async (products, metaData, address, paymentType, successUrl, cancelUrl) => {
        try {

            let paymentObj = {
                payment_method_types: constant.STRIPE_PAYMENT_TYPE[paymentType],
                line_items: products,
                metadata: metaData,
                mode: 'payment',
                success_url: successUrl,
                cancel_url: cancelUrl,
            }
            if (constant.PAYMENT_TYPE.AFTER_PAY == paymentType) {
                // const formattedAddress = await this.formatAddress(address);
                paymentObj = {
                    ...{
                        shipping_address_collection: {
                            allowed_countries: ['US', 'CA'],

                        }
                    },
                    // ...formattedAddress,
                    ...paymentObj
                }
            }
            const session = await stripe.checkout.sessions.create(paymentObj);
            return session;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    formatAddress = async (address) => {
        return {
            shipping: {
                // phone_number: address.countryCode + address.mobileNumber,
                address: {
                    line1: address.address,
                    line2: '',
                    city: address.city,
                    state: address.state,
                    postal_code: address.zipCode,
                    country: address.country
                }
            }
        }
    }

    eventDecode = (body, sig) => {
        try {
            return stripe.webhooks.constructEvent(body, sig, config.STRIPE.STRIPE_WEBHOOK_SECRET);
        } catch (error) {
            console.log('event decode error...', error)
            throw error;
        }
    }

    retriveCheckoutSession = async (sessionId) => {
        try {
            return await Promise.all(
                stripe.checkout.sessions.retrieve(sessionId),
                stripe.checkout.sessions.listLineItems(sessionId)
            )
        } catch (error) {
            console.log('retrive checkout session error....', error)
            return;
        }

    }

    // Function to fetch charges associated with a session ID
    getChargesBySessionId = async (sessionId) => {
        try {
            const charges = await stripe.charges.list({ payment_intent: sessionId });
            return charges;
        } catch (error) {
            throw error;
        }
    };

    createStripeAccount = async (user, params) => {
        try {
            return await stripe.accounts.create({
                type: constant.STRIPE_CONSTANT.ACCOUNT_TYPE,
                country: params.country,
                email: user.email,
                capabilities: {
                    card_payments: { requested: true },
                    transfers: { requested: true },
                },
                business_type: constant.STRIPE_CONSTANT.BUSINESS_TYPE,
                individual: {
                    email: user.email,
                    first_name: user['brand.brandName']
                }
            });
        } catch (err) {
            console.log(err)
            throw err;

        }
    }

    createAccountLink = async (accountId) => {
        try {
            return await stripe.accountLinks.create({
                account: accountId,
                refresh_url: config.STRIPE.STRIPE_WEB_CANCEL_URL,
                return_url: config.STRIPE.STRIPE_WEB_SUCCESS_URL,
                type: constant.STRIPE_CONSTANT.CREATE_LINK_TYPE,
              });
        } catch (err) {
            console.log(err)
            throw err;

        }
    }


}

module.exports.StripeHelper = new StripeHelper();