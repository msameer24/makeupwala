import { defineQuery } from "next-sanity";

/**
 * Get all categories
 * Used for navigation and filters
 * 
 */



export const ALL_CATEGORIES_QUERY = defineQuery(
  `*[_type == 'category'] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "image": image{
      asset->{
        _id,
        url
      },
      hotspot
    }
  }`
);


/**
 * Get category by slug
 */


export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "category" &&
    slug.current == $slug
  ][0] {

    _id,
    title,
    "slug": slug.current,
    description,

    "image": image {
      asset-> {
        _id,
        url
      },
      hotspot
    },

    "subcategories": *[
      _type == "subcategory" &&
      category._ref == ^._id
    ] | order(title asc) {

      _id,
      title,
      "slug": slug.current,
      description,

      "image": image {
        asset-> {
          _id,
          url
        },
        hotspot
      }
    }
  }
`);


export const CATEGORY_WITH_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "category" &&
    slug.current == $category
  ][0] {

    _id,
    title,
    description,
    "slug": slug.current,

    "subcategories": *[
      _type == "subcategory" &&
      category._ref == ^._id
    ] | order(title asc) {
      _id,
      title,
      "slug": slug.current
    },

    "products": *[
      _type == "product" &&
      category._ref in ^.subcategories[]._id
    ] | order(_createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      description,
      price,
      discount,
      stock,
      color,
      dimension,
      featured,

      "image": images[0]{
        asset->{
          _id,
          url
        }
      }
    }
  }
`);