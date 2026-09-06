 import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // 1. सबसे पहले डेटाबेस से कॉलेज लाने की कोशिश करें
    const colleges = await prisma.college.findMany();
    return NextResponse.json(colleges);
  } catch (error) {
    console.error("Database connection failed, using mock data:", error);
    
    // 2. अगर डेटाबेस (Neon) कनेक्ट नहीं होता है, तो यह बैकअप डेटा ऐप को क्रैश होने से बचाएगा
    const backupColleges = [
      { id: "1", name: "Indian Institute of Technology (IIT)", location: "New Delhi", fees: "₹2,50,000/year", rating: 4.8 },
      { id: "2", name: "Delhi Technological University (DTU)", location: "Delhi", fees: "₹2,19,000/year", rating: 4.5 },
      { id: "3", name: "BITS Pilani", location: "Rajasthan", fees: "₹5,00,000/year", rating: 4.7 }
    ];

    return NextResponse.json(backupColleges);
  }
}