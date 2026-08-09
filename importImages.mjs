

import { createClient } from '@sanity/client'

// Initialize Sanity Client
const client = createClient({
  projectId: 'krkuswwv',         // Replace with your Sanity project ID
  dataset: 'production',                // Replace if using a different dataset (e.g. 'development')
  useCdn: false,
  token: 'skCiI8EdeTYfqMZvM4F8GjN6qhBeD1aEjK37LyB7viX0xCG1ElxSj4AJo5Lth60miIIWCjVJy01Ku7EetoeQQfjYtSuSvpcPsV5CUd21GS9wiqsnoNAvrMQx8aWIbVrTYcCm13eghaNmKAohlxEKT02wOBgB5DL5GPvyyIPXZ4esxqjEmPEE', // Paste your API write token here
  apiVersion: '2024-01-01',
})

async function removeAllProductImages() {
  console.log("Fetching all products with images from Sanity...")
  
  // GROQ query to find products that currently have an 'images' field
  const products = await client.fetch(`*[_type == "product" && defined(images)]{ _id, title }`)

  console.log(`Found ${products.length} products with images. Removing...`)

  if (products.length === 0) {
    console.log("No product images found to delete.")
    return
  }

  for (let i = 0; i < products.length; i++) {
    const product = products[i]
    try {
      console.log(`[${i + 1}/${products.length}] Removing image from "${product.title}" (${product._id})...`)
      
      // Unset the 'images' field on the product document
      await client
        .patch(product._id)
        .unset(['images'])
        .commit()

      console.log(`✓ Image removed from "${product.title}"`)
    } catch (err) {
      console.error(`❌ Failed to update ${product._id}:`, err.message)
    }
  }

  console.log("\n🎉 Successfully removed all product images!")
}

removeAllProductImages().catch(console.error)