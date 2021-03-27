interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
  support: Support;
}

interface Support {
  url: string;
  text: string;
}

interface Datum {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}