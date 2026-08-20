import { defineField, defineType } from "sanity";
import {
  COLORS_SANITY_LIST,
  PRODUCT_FORMS_SANITY_LIST,
} from "@/lib/constants/filters";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    // 1. Product Name
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (rule) =>
        rule.required().error("Product name is required"),
    }),

    // 2. Slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 99,
      },
      validation: (rule) =>
        rule.required().error("Slug is required"),
    }),

    // 3. Description
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) =>
        rule.required().error("Description is required"),
    }),

    // 4. Price
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Price in INR",
      validation: (rule) =>
        rule
          .required()
          .positive()
          .error("Price must be greater than 0"),
    }),

    // 5. Discount
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      description: "Discount percentage, for example 10 means 10%",
      initialValue: 0,
      validation: (rule) =>
        rule
          .min(0)
          .max(100)
          .error("Discount must be between 0 and 100"),
    }),

    // 6. Category

defineField({
  name: "category",
  title: "Category",
  type: "reference",
  to: [{ type: "category" }],
  validation: (rule) =>
    rule.required().error("Category is required"),
}),


// 6.1 sub categories

defineField({
  name: "subcategory",
  title: "Subcategory",
  type: "reference",
  to: [{ type: "subcategory" }],
  validation: (rule) =>
    rule.required().error("Subcategory is required"),
}),


    // 7. Images
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (rule) =>
        rule
          .min(1)
          .error("At least one product image is required"),
    }),

    // 8. Stock
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      initialValue: 0,
      description: "Number of products available",
      validation: (rule) =>
        rule
          .integer()
          .min(0)
          .error("Stock must be 0 or greater"),
    }),

    // 9. Color
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: COLORS_SANITY_LIST,
        layout: "radio",
      },
    }),

    // 10. Product Form
    defineField({
      name: "productForm",
      title: "Product Form",
      type: "string",
      options: {
        list: PRODUCT_FORMS_SANITY_LIST,
        layout: "radio",
      },
    }),

    // 11. Dimensions
    defineField({
      name: "dimension",
      title: "Dimension",
      type: "string",
      description: "Example: 12cm x 5cm",
    }),

    // 12. Featured Product
    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
      description: "Show this product in the homepage featured section",
    }),
  ],

  preview: {
    select: {
      title: "name",
      price: "price",
      discount: "discount",
      category: "category.title",
      media: "images.0",
    },

    prepare({ title, price, discount, category, media }) {
      return {
        title: title || "Unnamed Product",
        subtitle: `${category ? `${category} | ` : ""}₹${price ?? 0}${
          discount ? ` | ${discount}% OFF` : ""
        }`,
        media,
      };
    },
  },
});