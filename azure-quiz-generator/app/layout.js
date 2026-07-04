import "./globals.css";

export const metadata = {
  title: "Azure AI Quiz Generator",
  description: "A simple Azure AI certification quiz practice app."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
