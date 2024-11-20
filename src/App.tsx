import './App.css'; 
import Navbar from "@/ui/navbar/Navbar.tsx"; 
import Container from '@/ui/reusable/container/Container';
import Product from '@/ui/reusable/product/Product';
import { productContent } from '@/interface/interface';
import justEngineeringhero from '@/assets/justEngineering.svg';
import heroImage from '@/assets/hero-image.svg';
import justSearchhero from '@/assets/justSearch.svg';
import justEngineeringLogo from './assets/justEngineeringLogo.svg';
import justSearchLogo from '@/assets/justSearch_logo.svg';
import { MoreHorizontal } from 'lucide-react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '@/ui/sections/about/About';
import Community from '@/ui/sections/community/Community';
import Templates from '@/ui/sections/templates/Templates'; 
// import List from '@/ui/reusable/list/List';


function App() {


  const products: productContent[] = [
    {
      heroImage: heroImage,
      title: "Tools built just about everyone, for everything.",
      description:<span> Our tools aren't just about getting things done <br></br>they're about making the journey a whole lot more enjoyable!</span>,
    }, 
    {
        icon: justEngineeringLogo,
        heroImage: justEngineeringhero,
        title: "Just Engineering",
        description: "Curated list of top software company engineering blogs.",
        buttons: [
            { icon: <MoreHorizontal/>, text: "more", link: "" },
        ]
    },
];

const AlternativeProducts: productContent[] = [

  {
    icon: justSearchLogo,
    heroImage: justSearchhero,
    title: "Just Search1.0",
    description: <span>Bulk search your favourite category of websites with a single query.<br></br> And organize it without a hassle.</span>,
    buttons: [
        { icon:<MoreHorizontal/> , text: "more", link: "" },
    ]
  },

];

// const socialLinks: listItem[] = [
//   {
//     text: "Just Tools",
//   }
// ]; 

const containerContent = [
  <Navbar />,
  <Product productContent={products} direction="row" />,
  <Product productContent={AlternativeProducts} direction="row-reverse" />,
];

  return (
    <div>
      <Routes>
        {/* Default Route for Home */}
        <Route
          path="/"
          element={
            <Container containerContent={containerContent} display="vertical" />
          }
        />
        <Route
          path="/home"
          element={
            <Container containerContent={containerContent} display="vertical" />
          }
        />
        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/templates" element={<Templates />} />
        {/* Fallback Redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
