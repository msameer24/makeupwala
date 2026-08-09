import { title } from "process";

export const COLORS = [
  { value: "multicolor", label: "Multi Color" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "red", label: "Red" },
  { value: "pink", label: "Pink" },
  { value: "hot-pink", label: "Hot Pink" },
  { value: "rose", label: "Rose" },
  { value: "nude", label: "Nude" },
  { value: "peach", label: "Peach" },
  { value: "coral", label: "Coral" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
  { value: "bronze", label: "Bronze" },
  { value: "brown", label: "Brown" },
  { value: "beige", label: "Beige" },
  { value: "tan", label: "Tan" },
  { value: "ivory", label: "Ivory" },
  { value: "champagne", label: "Champagne" },
  { value: "purple", label: "Purple" },
  { value: "lavender", label: "Lavender" },
  { value: "violet", label: "Violet" },
  { value: "blue", label: "Blue" },
  { value: "navy", label: "Navy" },
  { value: "teal", label: "Teal" },
  { value: "green", label: "Green" },
  { value: "olive", label: "Olive" },
  { value: "mint", label: "Mint" },
  { value: "gray", label: "Gray" },
  { value: "charcoal", label: "Charcoal" },
  { value: "burgundy", label: "Burgundy" },
  { value: "maroon", label: "Maroon" },
  { value: "wine", label: "Wine" },
] as const;


export const PRODUCT_FORMS = [
  { title: "Liquid", value: "liquid" },
  { title: "Cream", value: "cream" },
  { title: "Gel", value: "gel" },
  { title: "Oil", value: "oil" },
  { title: "Solid", value: "solid" },
  { title: "Semi-Solid", value: "semi-solid" },
  { title: "Powder", value: "powder" },
  { title: "Stick", value: "stick" },
  { title: "Balm", value: "balm" },
  { title: "Wax", value: "wax" },
  { title: "Mousse", value: "mousse" },
  { title: "Foam", value: "foam" },
  { title: "Mist", value: "mist" },
  { title: "Spray", value: "spray" },
  { title: "Serum", value: "serum" },
  { title: "Lotion", value: "lotion" },
  { title: "Butter", value: "butter" },
  { title: "Paste", value: "paste" },
  { title: "Clay", value: "clay" },
  { title: "Crayon", value: "crayon" },
  { title: "Pencil", value: "pencil" },
  { title: "Roll-On", value: "roll-on" },
  { title: "Pressed Powder", value: "pressed-powder" },
  { title: "Loose Powder", value: "loose-powder" }
];



export type colorValue = (typeof COLORS)[number]['value'];
export type productForms = ( typeof PRODUCT_FORMS) [number]['value']

export const COLORS_SANITY_LIST = COLORS.map( ( {value , label} ) => ( 
    {
        title: label,
        value,
    }
 ) )



export const PRODUCT_FORMS_SANITY_LIST = PRODUCT_FORMS.map( ( {value, title}) => ( 
    { 
        title: title,
        value,
})

)



export const COLOR_VALUES = COLORS.map( (c) => c.value) as [
    colorValue,
     ...colorValue[],
]


export const MATERIAL_VALUE = PRODUCT_FORMS.map( (c) => c.value ) as [
    productForms,
     ...productForms[],
]