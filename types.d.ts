export type IPO = {
    id: number;
    company_name: string;
    company_logo: string;
    issue_date: {
      start_date: string;
      end_date: string;
    };
    issue_size: number;
    range: string;
    min_invest: string;
    shares: number;
    lot: number;
    bid_start_date:? string;
    bid_end_date:? string;
    allot_final_date:? string;
    refund_init_date:? string;
    demat_transfer_date:? string;
    list_date:? string;
    listed_on_date:? string;
    listed_price:? number;
    listing_gains:? string;
    company_desc:? string;
  };
  