import { defineType, defineField, defineArrayMember  } from "sanity";

export const orderTyper = defineType ( {
        name:"order",
        title: 'Order',
        type:'document',
        fields: [
            defineField( { 
                name: 'orderNumber',
                title: 'Order Number',
                type: 'number',
                // readOnly:true,
                validation: (rule) => [
                    rule.required().error("Cant be Empty")
                ]
            }),
            defineField( {
                name:'item',
                type: 'array',
                of :[
                    defineArrayMember({
                        type: 'object',
                        fields: [
                            defineField( {
                                name:'product',
                                type:"reference",
                                to: [ { type: 'product'}],
                                validation: (rule) => rule.required(),

                            }),

                            defineField( {
                                name:'quantity',
                                title: 'Quantity',
                                initialValue: 1,
                                type: 'number',
                                validation : (rule) => [
                                    rule.required().error("quantity is required")
                                ]
                            }),
                              defineField({
                                    name: "priceAtPurchase",
                                    type: "number",
                                    description: "Price at time of purchase",
                                    validation: (rule) => rule.required(),
                                }),
                        ],
                        preview: {
                            select:{
                                title:"product.title",
                                quantity:'quantity',
                                price: 'priceAtPurchase',
                                thumb: 'product.images.0'
                            },
                            prepare ( { title, quantity, price , thumb }) {
                                return {
                                    title: title,
                                    subtitle:`Quantity is ${quantity} at Rs.${price}`,
                                    media: thumb,
                                }
                            }
                        } 
                    })
                ]
            }),


           defineField({
                name: "totalCost",
                type: "number",
                // readOnly: true,
                description: "Total order amount in GBP",
            }),

            defineField({
                name: "customer",
                type: "reference",
                to: [{ type: "customer" }],
                description: "Reference to the customer record",
            }),

            // defineField({
            //     name: "customer",
            //     type: "string",
            //     // to: [{ type: "customer" }],
            //     description: "Reference to the customer record",
            // }),


            defineField({
                name: "clerkUserId",
                // type: "reference",
                // to: [{ type: "email" }],
                type: 'string',
                // readOnly: true,

                description: "Clerk user ID",
            }),


            defineField({
                name: "email",
                type:'string',
            //    type: "reference",
            //     to: [{ type: "email" }],
                // readOnly: true,
            }),

            defineField( {
                name:'PhoneNumber',
                type:'number',
                // readOnly:true,
                // validation: (rule) => rule.required(),
                
            }),

            defineField({
                name: "address",
                type: "object",
                fields: [
                    defineField({ 
                        name: "name", 
                        type: "string", 
                        title: "Full Name" 
                    }),
                    defineField({ 
                        name: "line1", 
                        type: "string", 
                        title: "Address Line 1" 

                    }),
                    defineField({ 
                        name: "line2", 
                        type: "string", 
                        title: "Address Line 2" 

                    }),
                    defineField({ 
                        name: "city", 
                        type: "string" 

                    }),
                    defineField({ 
                        name: "postcode", 
                        type: "string", 
                        title: "Postcode" 

                    }),
                    defineField({ 
                        name: "country", 
                        type: "string" 

                    }),
                 ],
            }),


            defineField({
                name: "stripeCustomerId",
                type: "string",
             
            }),
           
            
            
            defineField({
                name: "createdAt",
                type: "datetime",
                readOnly: true,
                initialValue: () => new Date().toISOString(),
            }),
           


          



        ],


preview : {
    select:{
        title:'orderNumber',
        email: "email",
        total: "totalCost",
       
        
        
        
    },
    
    prepare( { title, email, total}) {
        return{
            title:`Order Number ${title}`,
            subtitle: `${email ?? "No email"} • ₹${total ?? 0}`,
           
        }
    }
}



    })