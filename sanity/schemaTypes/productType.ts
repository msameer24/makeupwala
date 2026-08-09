import { COLORS_SANITY_LIST } from '@/lib/constants/filters'
import {defineField, defineType, flattenConfig} from 'sanity'
import { PRODUCT_FORMS_SANITY_LIST } from '@/lib/constants/filters'

export const productType = defineType ( {
    name: 'product',
    title:'Product',
    type: 'document',

    fields: [

        // 1 the title field
        defineField( {
            name: 'title',
            // description:"Product Title",
            type: 'string',
            validation: (rule) => [
                 rule.required().error("Title is required")
            ],
        }),

        // 2 the slug field
         defineField({
            name:'slug',
            type:'slug',
            options:{
                source: "title",
                maxLength: 99,
            },
            validation: (rule) => [
                rule.required().error("Slug is required")
            ],
    }),


        // 3 description field
         defineField( {
            name: 'description',
            type: 'text',
            validation: (rule) => [
                 rule.required().error("Description is required")
            ],
        }),


        // 4 price field
         defineField( {
            name: 'price',
            type: 'number',
            description: 'price in inr (eg. 580.12)',
            validation: (rule) => [
                rule.required().error('Price is required'),
                rule.positive().error('Price cannot be a negative number')
            ],
        }),


        // 5 category field
          defineField( {
            name: 'category',
            type: 'reference',
            to: [ {type : 'category'}],
            validation: (rule) => [
                rule.required().error('Category is required'),
            ],
        }),


     //6 image field
    //  need to learn the array of image 

         defineField( {
            name: 'images',
            title: "Images",
            type: "array",
            of:[ 
                {
                    type:"image",
                    options:{
                        hotspot:true,
                    },

                },
            ],
            validation: (rule) => [
                 rule.min(1).error("Image is required")
            ],
        }),


        // 7 stock field
        defineField( {
            name:'inStock',
            type: "number",
            initialValue: 0,
            description : "Number of Stock is available", 
            validation: (rule) => [
                rule.positive().error("Stock cant be negitive"),
                rule.integer().error("Stock is a Whole Number")
            ],
        }),


        
    // 8 discount field
        defineField(
            {
                name:'discount',
                type:"string"

            }
        ),

    // 9 feature field
    defineField( {
        name:'Dimension',
        type: "string",
        description: "dimension of the product (eg . 128cm x 25cm ) ",
        validation: (rule) => [
            //  rule.min().error("dimension cant be negitive"),
            rule.required().error("dimension is Required")
        ],
    }), 
    
    // 10 dimension field

    defineField( {
        name: 'colors',
        type:'string',
        options: {
            list: COLORS_SANITY_LIST,
            layout: "radio"
        }
    }),


    defineField( 
        {
            name:"productForm",
            type:"string",
            options: {
            list: PRODUCT_FORMS_SANITY_LIST,
            layout: "radio"
        }
        }
    ),
    
    // 11 colors field
     defineField( {
            name:'feature',
            type: "boolean",
            initialValue: false,
            description: "Show This Product on homepage ",
        }), 

    ],

   
// adding preview here in side way

    preview: {
        select : {
            title: 'title',
            price: 'price',
            subtitle: 'category.title',
            thumb: 'images.0'
        },

        prepare({ title, price , subtitle, thumb}){
            return {
                title:title,
                subtitle: `${subtitle ? subtitle + " | " : ""}₹${price ?? 0}`,
                media:thumb
            }
        }
    }

} )
