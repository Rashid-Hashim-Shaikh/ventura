
import { NextResponse } from "next/server";

const ipoDetails = [
    {
      "id": 1,
      "company_name": "Western Carriers Limited (WCIL)",
      "company_logo": "/assets/images/wc_logo.png",
      "issue_date": null,
      "issue_size": 515,
      "range": "163-170",
      "min_invest": "14964",
      "shares": 100,
      "lot": 5,
      "bid_start_date": "2024-01-01",
      "bid_end_date": "2024-01-05",
      "allot_final_date": "2024-01-12",
      "refund_init_date": "2024-01-14",
      "demat_transfer_date": "2024-01-18",
      "list_date": "2024-01-20",
      "listed_on_date": "2024-01-21",
      "listed_price": 180,
      "listing_gains": "5.88%",
      "company_desc": "Western Carriers Limited is a leading logistics company, providing integrated transportation and supply chain solutions across India."
    },
    {
      "id": 2,
      "company_name": "Northern ARC Capital Limited",
      "company_logo": "/assets/images/na_logo.png",
      "issue_date": { "start_date": "2024-02-15", "end_date": "2024-02-25" },
      "issue_size": 750,
      "range": "120-180",
      "min_invest": "6000",
      "shares": 200,
      "lot": 5,
      "bid_start_date": "2024-02-16",
      "bid_end_date": "2024-02-22",
      "allot_final_date": "2024-03-01",
      "refund_init_date": "2024-03-02",
      "demat_transfer_date": "2024-03-05",
      "list_date": "2024-03-07",
      "listed_on_date": "2024-03-08",
      "listed_price": 190,
      "listing_gains": "11.11%",
      "company_desc": "Northern ARC Capital is a financial services company focused on enabling access to debt for underbanked businesses and individuals."
    },
    {
      "id": 3,
      "company_name": "Arkade Developers Limited",
      "company_logo": "/assets/images/arkade_logo.png",
      "issue_date": { "start_date": "2024-03-05", "end_date": "2024-03-15" },
      "issue_size": 100,
      "range": "90-140",
      "min_invest": "8000",
      "shares": 150,
      "lot": 5,
      "bid_start_date": "2024-03-06",
      "bid_end_date": "2024-03-12",
      "allot_final_date": "2024-03-18",
      "refund_init_date": "2024-03-19",
      "demat_transfer_date": "2024-03-21",
      "list_date": "2024-03-23",
      "listed_on_date": "2024-03-24",
      "listed_price": 145,
      "listing_gains": "3.57%",
      "company_desc": "Arkade Developers Limited is a real estate development company known for its residential and commercial projects across major cities in India."
    },
    {
      "id": 4,
      "company_name": "PN Gadgil Jewellers Limited",
      "company_logo": "/assets/images/png_logo.png",
      "issue_date": { "start_date": "2024-04-10", "end_date": "2024-04-20" },
      "issue_size": 120,
      "range": "200-250",
      "min_invest": "10000",
      "shares": 300,
      "lot": 5,
      "bid_start_date": "2024-04-11",
      "bid_end_date": "2024-04-17",
      "allot_final_date": "2024-04-25",
      "refund_init_date": "2024-04-26",
      "demat_transfer_date": "2024-04-28",
      "list_date": "2024-04-30",
      "listed_on_date": "2024-05-01",
      "listed_price": 255,
      "listing_gains": "10%",
      "company_desc": "PN Gadgil Jewellers is a renowned jewelry brand in India, specializing in gold, silver, and diamond jewelry with a legacy of over 100 years."
    },
    {
      "id": 5,
      "company_name": "Bajaj Housing Finance Limited",
      "company_logo": "/assets/images/bajaj_logo.png",
      "issue_date": { "start_date": "2024-05-20", "end_date": "2024-05-30" },
      "issue_size": 850,
      "range": "150-200",
      "min_invest": "7000",
      "shares": 120,
      "lot": 5,
      "bid_start_date": "2024-05-21",
      "bid_end_date": "2024-05-26",
      "allot_final_date": "2024-06-02",
      "refund_init_date": "2024-06-03",
      "demat_transfer_date": "2024-06-05",
      "list_date": "2024-06-07",
      "listed_on_date": "2024-06-08",
      "listed_price": 210,
      "listing_gains": "5%",
      "company_desc": "Bajaj Housing Finance Limited is a subsidiary of Bajaj Finance, offering mortgage and home loan products with competitive interest rates."
    }
  ]


export async function GET( request: Request,
    { params }: { params: { id: string } }) {
       
  const ipoId = params.id;

  const ipo = ipoDetails.find((ipo) => ipo.id === parseInt(ipoId));
  
  if (ipo) {
   return NextResponse.json(ipo , { status: 200 });
  } else {
    
  return NextResponse.json({ error: 'IPO details not found' }, { status: 400 })
  }

  }
  