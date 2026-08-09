import { defineQuery } from "next-sanity";



// ALL_ORDERS_QUERY this is working

export const ALL_ORDERS_QUERY = defineQuery(`
  *[_type == "order"] {

    _id,
    orderNumber,
    totalCost,
    email,
    PhoneNumber,
  } 
`);


export const ORDER_BY_USER_QUERY = defineQuery (
  `
  *[ _type == "order" && clerkUserId == $clerkUserId] | order(createdAt desc)
  {
    _id,
    orderNumber,
    totalCost,
    createdAt,
    email,
    PhoneNumber,
    clerkUserId,
    "itemCount": count(item),
    "itemNames": item[].product->name,

  }`
);



// all order on Order Page
export const ORDER_BY_ID_QUERY =  defineQuery( ` 
  *[ _type == " order" && _id == $_id] [0] 
  {
     _id,
    orderNumber,
    clerkUserId,
    email,
    item[]
    {
        _key,
        quantity,
        priceAtPurchase,
        product->
        {
              _id,
              name,
              "slug": slug.current,
              "image": images[0]
              {
                      asset->
                      {
                        _id,
                        url
                      }
              }
        }
    },
    totalCost,
    address
    {
        name,
        line1,
        line2,
        city,
        postcode,
        country,
    },
    stripeCustomerId,
     createdAt,
  } `);



export const RECENT_ORDERS_QUERY = defineQuery(
  ` 
   *[ _type == "order"] | order(createdAt desc){
       _id,
    orderNumber,  
    email,
    totalCost,
   createdAt,
  }
  `
)



export const ORDER_BY_STRIPE_PAYMENT_ID_QUERY = defineQuery(
  `
  *[ _type == "order" && stripeCustomerId == $stripeCustomerId ] [0]{ _id } `);