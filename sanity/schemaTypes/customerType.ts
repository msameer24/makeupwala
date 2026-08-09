import { UserIcon } from "@sanity/icons/User";
import { defineField, defineType } from "sanity";

export const customerType = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "details", title: "Customer Details", },
    // { name: "details", title: "Customer Details", default:true},
    // { name: "stripe", title: "Stripe" },
  ],




  fields: [
    // 1 


     defineField({
      name: "name",
      type: "string",
      group: "details",
      description: "Customer's full name",
    }),





    // 2
    
    defineField({
      name: "email",
      type: "string",
      group: "details",
      description: "Customer's email address",
      validation: (rule) => [rule.required().error("Email is required")],
    }),


   
    // 3
    defineField({
      name: "clerkUserId",
      type: "string",
      group: "details",
      description: "Clerk user ID for authentication",
    }),

    // 4
    defineField({
      name: "stripeCustomerId",
      type: "string",
      // group: "stripe",
      readOnly: true,
      description: "Stripe customer ID for payments",
      validation: (rule) => [
        rule.required().error("Stripe customer ID is required"),
      ],
    }),

    // 5
    defineField({
      name: "createdAt",
      type: "datetime",
      group: "details",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],

  
//   preview: {
//     select: {
//       email: "email",
//       name: "name",
//       stripeCustomerId: "stripeCustomerId",
//     },
//     prepare({ email, name, stripeCustomerId }) {
//       return {
//         title: name ?? email ?? "Unknown Customer",
//         subtitle: stripeCustomerId
//           ? `${email ?? ""} • ${stripeCustomerId}`
//           : (email ?? ""),
//       };
//     },
//   },

  
//   orderings: [
//     {
//       title: "Newest First",
//       name: "createdAtDesc",
//       by: [{ field: "createdAt", direction: "desc" }],
//     },
//     {
//       title: "Email A-Z",
//       name: "emailAsc",
//       by: [{ field: "email", direction: "asc" }],
//     },
//   ],
});