
import { NextResponse } from "next/server";


export async function GET() {
    const mockData = [
      {
        id: 1,
        company_name: "XYZ Corp",
        company_logo: "https://logo1.com",
        issue_date: { start_date: "2024-01-01", end_date: "2024-01-10" },
        issue_size: 500,
        range: "100-150",
        min_invest: "5000",
        shares: 100,
        lot: 10
      },
      {
        id: 2,
        company_name: "Beta Inc",
        company_logo: "https://logo2.com",
        issue_date: { start_date: "2024-02-15", end_date: "2024-02-25" },
        issue_size: 750,
        range: "120-180",
        min_invest: "6000",
        shares: 200,
        lot: 20
      },
      {
        id: 3,
        company_name: "Alpha Tech",
        company_logo: "https://logo3.com",
        issue_date: { start_date: "2024-03-05", end_date: "2024-03-15" },
        issue_size: 100,
        range: "90-140",
        min_invest: "8000",
        shares: 150,
        lot: 15
      },
      {
        id: 4,
        company_name: "Gamma Solutions",
        company_logo: "https://logo4.com",
        issue_date: { start_date: "2024-04-10", end_date: "2024-04-20" },
        issue_size: 120,
        range: "200-250",
        min_invest: "10000",
        shares: 300,
        lot: 25
      },
      {
        id: 5,
        company_name: "Omega Holdings",
        company_logo: "https://logo5.com",
        issue_date: { start_date: "2024-05-20", end_date: "2024-05-30" },
        issue_size: 850,
        range: "150-200",
        min_invest: "7000",
        shares: 120,
        lot: 12
      }
    ];
  
    return NextResponse.json(mockData);
  }
  