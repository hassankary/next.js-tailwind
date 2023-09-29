import { Header } from "@/components/header";
import { Main } from "@/components/main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Main/>
    </div>
  );
}
