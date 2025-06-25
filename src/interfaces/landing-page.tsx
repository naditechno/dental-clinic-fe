export interface DealsProps {
  image?: string;
  title: string;
  description: string;
  duration_minutes: number;
  subtitle?: string;
  duration: string;
  doctor: string;
  price: string | number;
}

export interface CategoriesProps {
  icon: string;
  title: string;
  subtitle: string;
}
