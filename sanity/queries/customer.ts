import { defineQuery } from "next-sanity";

export const CUSTOMER_BY_EMAIL_QUERY = defineQuery(
    `* [  _type == "customer" && email == $email ] [0] 
    {
        _id,
        name,
        email,

    }
`);


export const CUSTOMER_BY_STRIPE_ID_QUERY = defineQuery(
    `
    * [_type ==  "customer" &&  stripeCustomerId = $stripe ] [0]
       { 
          _id, 
        name,
        email,
    }
`);

