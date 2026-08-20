// import {TagIcon} from '@sanity/icons/Tag'  // making comment be its now working 

// import {defineField, defineType} from 'sanity'

// export const categoryType = defineType( {
//   name: 'category',
//   title: 'Catrgory',
//    type: 'document',
//   icon: TagIcon,


//   groups : [
//     { name:'details' , title: "Descriptions"},
//     { name:'image' , title: "Image"},
//   ],

//    fields : [

//     defineField( {
//       name:'title',
//       type:'string',
//       validation: (rule) => [
//         rule.required().error("Title is required")
//       ],
//     } ),

//     defineField({
//       name:'slug',
//       type:'slug',
//       options:{
//         source: "title",
//         maxLength: 99,
//       },
//       validation: (rule) => [
//         rule.required().error("Slug is required")
//       ],
//     }),


//     defineField( {
//       name:'description',
//       type:"text",
//       validation: (rule) => [
//         rule.required().error("Description is required")
//       ],
      
//     }),


//     defineField({
//         name: "parent",
//         title: "Parent Category",
//         type: "reference",
//         to: [{ type: "category" }],
//         description: "Select a parent category. Leave empty for a main category.",
// }),

//     defineField({
//       name:'image',
//       type:'image',
//       options:{
//         hotspot:true,
//       },
//       validation: (rule) => [
//         rule.required().error("Image is required")
//       ],
//     })

//    ],


//   //  preview of group at top



// } )



import { TagIcon } from "@sanity/icons/Tag";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,

  fields: [
    defineField({
      name: "title",
      title: "Category Name",
      type: "string",
      validation: (rule) =>
        rule.required().error("Category name is required"),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 99,
      },
      validation: (rule) =>
        rule.required().error("Slug is required"),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});