import {TagIcon} from '@sanity/icons/Tag'  // making comment be its now working 

import {defineField, defineType} from 'sanity'

export const categoryType = defineType( {
  name: 'category',
  title: 'Catrgory',
   type: 'document',
  icon: TagIcon,


  groups : [
    { name:'details' , title: "Descriptions"},
    { name:'image' , title: "Image"},
  ],

   fields : [

    defineField( {
      name:'title',
      type:'string',
      validation: (rule) => [
        rule.required().error("Title is required")
      ],
    } ),

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


    defineField( {
      name:'description',
      type:"text",
      validation: (rule) => [
        rule.required().error("Description is required")
      ],
      
    }),

    defineField({
      name:'image',
      type:'image',
      options:{
        hotspot:true,
      },
      validation: (rule) => [
        rule.required().error("Image is required")
      ],
    })

   ],


  //  preview of group at top



} )