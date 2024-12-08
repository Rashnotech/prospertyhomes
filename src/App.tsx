import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { LoadingIndicator } from './app/components/LoadingIndicator'
const Home = lazy(() => import('./app/page'))
import RootLayout from './app/layout'
import NotFound from './app/not-found'
const ExplorePage = lazy(() => import('./app/explore/page'))
const PropertyDetailPage = lazy(() => import('./app/property/page'))
const TermsOfUse = lazy(() => import('./app/terms/page'))
const PrivacyPolicy = lazy(() => import('./app/privacy/page'))

const routes = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={
          <Suspense fallback={<LoadingIndicator />}>
            <Home />
          </Suspense>
          } />
        <Route path='explore' element={
          <Suspense fallback={<LoadingIndicator />}>
            <ExplorePage />
          </Suspense>
          } />
        <Route path='explore/property/:id/:name' element={
          <Suspense fallback={<LoadingIndicator />}>
            <PropertyDetailPage />
          </Suspense>
          } />
        <Route path="terms" element={
          <Suspense fallback={<LoadingIndicator />}>
            <TermsOfUse />
          </Suspense>
          } />
        <Route path='privacy' element={
          <Suspense fallback={<LoadingIndicator />}>
            <PrivacyPolicy />
          </Suspense>
          } />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
