
// import Nav from './components/nav/Nav';
// import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
// import Contact from './components/contact/Contact';
// import Portfolio from './components/portfolio/Portfolio';
// import Footer from './components/footer/Footer';
// import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Home from './components/home/Home';
// import ErrorRoute from './components/ErrorRoute';

// const Root = () => {
//     return (
//         <div>
//             <Nav />
//             <Outlet />
//             <Footer />
//         </div>
//     )
// }

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/portfolio' element={<Root />} >
//             <Route path='/' element={<Home />} />
//             <Route path='contact' element={<Contact />} />
//             <Route path='projects' element={<Portfolio />} />
//             <Route path='services' element={<Services />} />
//             <Route path='experience'  element={<Experience />} />

//             <Route path='*' element={<ErrorRoute/>} />
//         </Route>
//     )
// )


// function App() {
//     return (
//         <>
//             <RouterProvider router={router} />
//         </>
//     );
// }

// export default App;


import React from 'react'
import Header from '@/components/Header/Header'
import About from '@/components/About'
import Nav from '@/components/Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
    </div>
  )
}

export default Home