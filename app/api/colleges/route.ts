import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const colleges = await prisma.college.findMany();
    return NextResponse.json(colleges);
  } catch (error) {
    console.error("Database connection failed, using mock data:", error);
    
    // इमेज लिंक्स के साथ सरकारी और मेडिकल कॉलेजों का परफेक्ट डेटा
    const backupColleges = [
      { 
        id: "1", 
        name: "All India Institute of Medical Sciences (AIIMS)", 
        location: "New Delhi", 
        fees: "₹1,628/year", 
        rating: 4.9,
        placement: "₹18,00,000/year",
        type: "Government / Medical",
        image: "https://unsplash.com" // AIIMS / Medical Concept Image
      },
      { 
        id: "2", 
        name: "Indian Institute of Technology (IIT Delhi)", 
        location: "New Delhi", 
        fees: "₹2,50,000/year", 
        rating: 4.8,
        placement: "₹25,00,000/year",
        type: "Government / Engineering",
        image: "https://unsplash.com" // University/Engineering Main Campus
      },
      { 
        id: "3", 
        name: "Maulana Azad Medical College (MAMC)", 
        location: "New Delhi", 
        fees: "₹11,000/year", 
        rating: 4.7,
        placement: "₹15,00,000/year",
        type: "Government / Medical",
        image: "https://unsplash.com" // Medical College/Campus Style Image
      },
      { 
        id: "4", 
        name: "Delhi Technological University (DTU)", 
        location: "Delhi", 
        fees: "₹2,19,000/year", 
        rating: 4.5,
        placement: "₹18,50,000/year",
        type: "Government / Engineering",
        image: "https://unsplash.com" // Technical University/Campus Building
      }
    ];

    return NextResponse.json(backupColleges);
  }
}