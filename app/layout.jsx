import "../styles/base.scss";

export const metadata = {
  title: "Frontend Case Brief | Siber Savaş Akademisi",
  description: "Siber Savaş Akademisi Frontend Development Case Brief",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/486aaf834f.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
