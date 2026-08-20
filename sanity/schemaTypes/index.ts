import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {customerType} from './customerType'
import { productType } from './productType'
import { orderTyper } from './orderType'
import { subcategoryType } from './subcategoryType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, subcategoryType, authorType, customerType, productType, orderTyper],
}
