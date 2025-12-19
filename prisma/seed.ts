import { PrismaClient } from '@prisma/client'
// We import your huge data list directly
import { venues } from '../src/data/venues'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  
  for (const venue of venues) {
    const result = await prisma.venue.upsert({
      where: { id: venue.id },
      update: {
        // If it exists, update these fields (useful for edits)
        name: venue.name,
        category: venue.category,
        tagline: venue.tagline,
        heroImage: venue.heroImage,
        dropCap: venue.description.dropCap,
        lead: venue.description.lead,
        body: venue.description.body,
        curatorNote: venue.curatorNote,
        gallery: venue.gallery,
        address: venue.details.address,
        hours: venue.details.hours,
        phone: venue.details.phone,
        website: venue.details.website,
      },
      create: {
        // If it doesn't exist, create it
        id: venue.id,
        name: venue.name,
        category: venue.category,
        tagline: venue.tagline,
        heroImage: venue.heroImage,
        dropCap: venue.description.dropCap,
        lead: venue.description.lead,
        body: venue.description.body,
        curatorNote: venue.curatorNote,
        gallery: venue.gallery,
        address: venue.details.address,
        hours: venue.details.hours,
        phone: venue.details.phone,
        website: venue.details.website,
      },
    })
    console.log(`Created/Updated: ${result.name}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })