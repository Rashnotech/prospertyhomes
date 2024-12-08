import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { NotificationProvider } from '@/contexts/NotificationContext'

export default function RootLayout() {
  return (
    <main className='font-manrope'>
      <Header />
      <NotificationProvider>
        <Outlet />
      </NotificationProvider>
      <Footer />
    </main>
  )
}

