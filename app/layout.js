import Header from "@/components/Header"
import "../styles/globals.css"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Uniting Changemakers @RIE 2025",
  description:
    "Join us for an exclusive gathering of visionaries and leaders from around the world.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Uniting Changemakers @RIE 2025</title>
        <meta
          name="description"
          content="Join us for an exclusive gathering of visionaries and leaders from around the world."
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>
      <body className="bg-custom-blue text-white">
        <Header />
        {children}
        <Footer />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  )
}
