import { defineQuery } from "next-sanity";
import { LOW_STOCK_THRESHOLD } from "@/lib/constants/stock";

// ============================================================
// Shared Product Card Projection
// Used by homepage, featured products, suggestions, etc.
// ============================================================

const PRODUCT_CARD_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  discount,

  "images": images[0...8]{
    _key,
    asset->{
      _id,
      url
    },
    hotspot,
    crop
  },

  category->{
    _id,
    title,
    "slug": slug.current
  },

  stock,
  color,
  productForm,
  dimension,
  featured
}`;



export const PRODUCTS_BY_SUBCATEGORY_QUERY = defineQuery(`
  *[
    _type == "product"
    && subcategory->slug.current == $subcategorySlug
  ]
  | order(name asc)
  ${PRODUCT_CARD_PROJECTION}
`);

// ============================================================
// ALL PRODUCTS
// ============================================================

export const ALL_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product"
  ]
  | order(name asc)
  ${PRODUCT_CARD_PROJECTION}
`);

// ============================================================
// FEATURED PRODUCTS
// ============================================================

export const FEATURED_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product"
    && featured == true
    && stock > 0
  ]
  | order(name asc)[0...6]
  ${PRODUCT_CARD_PROJECTION}
`);

// ============================================================
// PRODUCTS BY CATEGORY
// ============================================================

export const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
  *[
    _type == "product"
    && category->slug.current == $categorySlug
  ]
  | order(name asc)
  ${PRODUCT_CARD_PROJECTION}
`);

// ============================================================
// PRODUCT BY SLUG
// ============================================================

export const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "product"
    && slug.current == $slug
  ][0]
  ${PRODUCT_CARD_PROJECTION}
`);

// ============================================================
// PRODUCT BY ID
// ============================================================

export const PRODUCT_BY_ID_QUERY = defineQuery(`
  *[
    _type == "product"
    && _id == $productId
  ][0]
  ${PRODUCT_CARD_PROJECTION}
`);

// ============================================================
// SHARED FILTER CONDITIONS
// ============================================================

const PRODUCT_FILTER_CONDITIONS = `
  _type == "product"

  && (
    $categorySlug == ""
    || category->slug.current == $categorySlug
  )

  && (
    $color == ""
    || color == $color
  )

  && (
    $productForm == ""
    || productForm == $productForm
  )

  && (
    $minPrice == 0
    || price >= $minPrice
  )

  && (
    $maxPrice == 0
    || price <= $maxPrice
  )

  && (
    $searchQuery == ""
    || name match $searchQuery + "*"
    || description match $searchQuery + "*"
  )

  && (
    $inStock == false
    || stock > 0
  )
`;

// ============================================================
// FILTERED PRODUCT PROJECTION
// Same useful fields as the product card
// ============================================================

const FILTERED_PRODUCT_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  discount,

  "images": images[0...8]{
    _key,
    asset->{
      _id,
      url
    },
    hotspot,
    crop
  },

  category->{
    _id,
    title,
    "slug": slug.current
  },

  stock,
  color,
  productForm,
  dimension,
  featured
}`;

// ============================================================
// FILTER - NAME A-Z
// ============================================================

export const FILTER_PRODUCTS_BY_NAME_QUERY = defineQuery(`
  *[
    ${PRODUCT_FILTER_CONDITIONS}
  ]
  | order(name asc)
  ${FILTERED_PRODUCT_PROJECTION}
`);

// ============================================================
// FILTER - PRICE LOW TO HIGH
// ============================================================

export const FILTER_PRODUCTS_BY_PRICE_ASC_QUERY = defineQuery(`
  *[
    ${PRODUCT_FILTER_CONDITIONS}
  ]
  | order(price asc)
  ${FILTERED_PRODUCT_PROJECTION}
`);

// ============================================================
// FILTER - PRICE HIGH TO LOW
// ============================================================

export const FILTER_PRODUCTS_BY_PRICE_DESC_QUERY = defineQuery(`
  *[
    ${PRODUCT_FILTER_CONDITIONS}
  ]
  | order(price desc)
  ${FILTERED_PRODUCT_PROJECTION}
`);

// ============================================================
// SEARCH / RELEVANCE
// ============================================================

export const FILTER_PRODUCTS_BY_RELEVANCE_QUERY = defineQuery(`
  *[
    ${PRODUCT_FILTER_CONDITIONS}
  ]
  | score(
      boost(name match $searchQuery + "*", 3),
      boost(description match $searchQuery + "*", 1)
    )
  | order(_score desc, name asc)
  ${FILTERED_PRODUCT_PROJECTION}
`);

// ============================================================
// SEARCH PRODUCTS
// ============================================================

export const SEARCH_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product"
    && (
      name match $searchQuery + "*"
      || description match $searchQuery + "*"
    )
  ]
  | score(
      boost(name match $searchQuery + "*", 3),
      boost(description match $searchQuery + "*", 1)
    )
  | order(_score desc, name asc)
  {
    _id,
    _score,
    name,
    "slug": slug.current,
    description,
    price,
    discount,

    "images": images[0...8]{
      _key,
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    },

    category->{
      _id,
      title,
      "slug": slug.current
    },

    stock,
    color,
    productForm,
    dimension,
    featured
  }
`);

// ============================================================
// PRODUCTS BY IDS
// Useful for cart / checkout
// ============================================================

export const PRODUCTS_BY_IDS_QUERY = defineQuery(`
  *[
    _type == "product"
    && _id in $ids
  ]{
    _id,
    name,
    "slug": slug.current,
    price,
    discount,

    "images": images[0...4]{
      _key,
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    },

    stock
  }
`);

// ============================================================
// LOW STOCK PRODUCTS
// ============================================================

export const LOW_STOCK_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product"
    && stock > 0
    && stock <= ${LOW_STOCK_THRESHOLD}
  ]
  | order(stock asc)
  {
    _id,
    name,
    "slug": slug.current,
    stock,

    "image": images[0]{
      _key,
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    }
  }
`);

// ============================================================
// OUT OF STOCK PRODUCTS
// ============================================================

export const OUT_OF_STOCK_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product"
    && stock == 0
  ]
  | order(name asc)
  {
    _id,
    name,
    "slug": slug.current,

    "image": images[0]{
      _key,
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    }
  }
`);

// ============================================================
// AI SEARCH
// ============================================================

export const AI_SEARCH_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product"

    && (
      $searchQuery == ""
      || name match $searchQuery + "*"
      || description match $searchQuery + "*"
      || category->title match $searchQuery + "*"
    )

    && (
      $categorySlug == ""
      || category->slug.current == $categorySlug
    )

    && (
      $color == ""
      || color == $color
    )

    && (
      $productForm == ""
      || productForm == $productForm
    )

    && (
      $minPrice == 0
      || price >= $minPrice
    )

    && (
      $maxPrice == 0
      || price <= $maxPrice
    )
  ]
  | order(name asc)[0...20]
  {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    discount,

    "images": images[0...4]{
      _key,
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    },

    category->{
      _id,
      title,
      "slug": slug.current
    },

    stock,
    color,
    productForm,
    dimension,
    featured
  }
`);