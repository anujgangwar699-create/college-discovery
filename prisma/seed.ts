import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "New Delhi",
        fees: 250000,
        rating: 4.8,
        placement: 2500000,
        description: "Premier engineering institute in India.",
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 240000,
        rating: 4.9,
        placement: 2800000,
        description: "Top engineering and technology institute.",
      },
      {
        name: "IIT Kanpur",
        location: "Kanpur",
        fees: 230000,
        rating: 4.7,
        placement: 2200000,
        description: "Leading institute for engineering and research.",
      },
      {
        name: "NIT Trichy",
        location: "Tiruchirappalli",
        fees: 180000,
        rating: 4.5,
        placement: 1600000,
        description: "One of India's leading NITs.",
      },
      {
        name: "BITS Pilani",
        location: "Pilani",
        fees: 550000,
        rating: 4.6,
        placement: 1800000,
        description: "Leading private university for engineering.",
      },
    ],
  });

  console.log("Colleges seeded successfully!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());