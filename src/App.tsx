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
            { icon: <MoreHorizontal/>, text: "more", link: "https://example.com/details-1" },
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
        { icon:<MoreHorizontal/> , text: "more", link: "https://example.com/details-1" },
    ]
  },

]

  return (
    <div>
      
      <Container containerContent={
        [
          <Navbar />,
          <Product productContent={products} direction='row'/>,
          <Product productContent={AlternativeProducts} direction='row-reverse'/>
        ]
      } display='vertical' />
    </div>
  )
}

export default App
