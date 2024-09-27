
import { NextResponse } from "next/server";


export async function GET() {
    const mockData = [
      {
        id: 1,
        company_name: "Western Carriers Limited (WCIL)",
        company_logo: "/assets/images/wc_logo.png",
        issue_date: null,
        issue_size: 515,
        range: "163-170",
        min_invest: "14964",
        shares: 100,
        lot: 5
      },
      {
        id: 2,
        company_name: "Northern ARC Capital Limited",
        company_logo: "/assets/images/na_logo.png",
        issue_date: { start_date: "2024-02-15", end_date: "2024-02-25" },
        issue_size: 750,
        range: "120-180",
        min_invest: "6000",
        shares: 200,
        lot: 5
      },
      {
        id: 3,
        company_name: "Arkade Developers Limited",
        company_logo: "/assets/images/arkade_logo.png",
        issue_date: { start_date: "2024-03-05", end_date: "2024-03-15" },
        issue_size: 100,
        range: "90-140",
        min_invest: "8000",
        shares: 150,
        lot: 5
      },
      {
        id: 4,
        company_name: "PN Gadgil Jewellers Limited",
        company_logo: "/assets/images/png_logo.png",
        issue_date: { start_date: "2024-04-10", end_date: "2024-04-20" },
        issue_size: 120,
        range: "200-250",
        min_invest: "10000",
        shares: 300,
        lot: 5
      },
      {
        id: 5,
        company_name: "Bajaj Housing Finance Limited",
        company_logo: "/assets/images/bajaj_logo.png",
        issue_date: { start_date: "2024-05-20", end_date: "2024-05-30" },
        issue_size: 850,
        range: "150-200",
        min_invest: "7000",
        shares: 120,
        lot: 5
      }
    ];
  
    return NextResponse.json(mockData);
  }
  