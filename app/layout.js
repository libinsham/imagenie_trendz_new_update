import "./globals.css";

export const metadata = {
  title: "B2B Tech Marketing Agency - Global x Integrated | Imagenie",
  description:
    "We're the B2B tech marketing agency for world-leading brands; combining art and science to create global opportunities for our clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
