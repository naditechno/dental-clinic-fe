import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/molecules/header';
import Footer from '@/components/molecules/footer';
import { Toaster } from '@/components/atomics/toaster';
import ReduxProvider from '@/providers/redux';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dental Clinic",
  description: "Find Glorious Smiles and Confident Living",
  icons: {
    icon: "/logo_dental_clinic.jpg",
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    // hidden
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <div className="lg:block">
            <Header />
            {children}
            <Footer />
          </div>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
