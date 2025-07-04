import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trepa',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css" rel="stylesheet"/>
      </head>
      <body className='bg-black'>{children}</body>
    </html>
  )
}
