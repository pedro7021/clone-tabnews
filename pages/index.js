import Image from "next/image";
import gatinho from "../assets/gatinho.webp";

function Home() {
  return (
    <Image src={gatinho} alt="Gatinhos lutando com sabre de luz" fill="true" />
  );
}

export default Home;
