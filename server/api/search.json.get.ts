// // import {queryCollectionSearchSections} from '@nuxt/content/runtime/const nitroApp = useNitroApp();'

// // import { queryCollectionSearchSectionsWithEvent } from "@nuxt/content/dist/runtime/nitro"

// // export default eventHandler(async (event) =>{
// //     const sections = await queryCollectionSearchSections(event,'content')
// //     return sections
// // })
// // // export default eventHandler(async (event) => {
// // //     const sections = await queryCollectionSearchSections(event, 'docs')
// // //     return sections
// // //   })

// export default eventHandler(async (event) => {
//   const queryObj = getQuery(event)
//   const query =
//     queryObj && typeof queryObj.q === 'string'
//       ? queryObj.q.toLowerCase().trim()
//       : ''

//   // Fetch content with the initial filter
//   const items =(await queryCollectionSearchSections(event,'content')).filter(item=>item.level === 1)
//   // First, search only by title
//   let filteredItems = items.filter((item) =>
//     item.title?.toLowerCase().includes(query)
//   )

//   // If no results found in titles, search in descriptions
//   if (filteredItems.length === 0) {
//     filteredItems = items.filter((item) =>{
//      const {data} = queryCollection(event,'content').path(item.id).first()
//     if(data.description?.toLowerCase().includes(query) ) return true
//     return false }
//     )
//   }

//   // Format data to include only required fields
//   const formattedData = filteredItems
//     .map((item) => ({
//       section: item.dir
//         .split('-')
//         .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ') || 'What is @tidy',
//       title: item.title || '',
//       description: item.description || '',
//       link: item.title,
//     }))
//     .filter((item) => item.title !== '')

//   // Group data by section
//   const groupedData = formattedData.reduce((sections, item) => {
//     if (!sections[item.section]) {
//       sections[item.section] = []
//     }
//     sections[item.section].push({
//       title: item.title,
//       description: item.description,
//       link: item.link || '',
//     })
//     return sections
//   }, {} as Record<string, { title: string; description: string; link: string }[]>)

//   const response = Object.entries(groupedData).map(([name, items]) => ({
//     name,
//     items,
//   }))

//   return response
// })
