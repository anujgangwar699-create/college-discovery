import { NextResponse } from "next/server";

export async function GET() {
  try {
    const backupColleges = [
      { 
        id: "1", 
        name: "All India Institute of Medical Sciences (AIIMS)", 
        location: "New Delhi", 
        fees: "₹1,628/year", 
        rating: 4.9,
        placement: "₹18,00,000/year",
        type: "Government / Medical",
        image: "https://unsplash.com",
        imageUrl: "https://unsplash.com"
      },
      { 
        id: "2", 
        name: "Indian Institute of Technology (IIT Delhi)", 
        location: "New Delhi", 
        fees: "₹2,50,000/year", 
        rating: 4.8,
        placement: "₹25,00,000/year",
        type: "Government / Engineering",
        image: "https://unsplash.com",
        imageUrl: "https://unsplash.com"
      },
      { 
        id: "3", 
        name: "Maulana Azad Medical College (MAMC)", 
        location: "New Delhi", 
        fees: "₹11,000/year", 
        rating: 4.7,
        placement: "₹15,00,000/year",
        type: "Government / Medical",
        image: "https://unsplash.com",
        imageUrl: "https://unsplash.com"
      },
      { 
        id: "4", 
        name: "Delhi Technological University (DTU)", 
        location: "Delhi", 
        fees: "₹2,19,000/year", 
        rating: 4.5,
        placement: "₹18,50,000/year",
        type: "Government / Engineering",
        image: "https://unsplash.com",
        imageUrl: "https://unsplash.com"
      }
    ];

    return NextResponse.json(backupColleges);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json([]);
  }
}
