export interface Listing {
  id: number;
  title: string;
  slug: string;
  description: string;
  address: string;
  duration_minutes: number;
  doctor: string;
  price: number;
  attachments: string[];
  benefits: string[];
}
