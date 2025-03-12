import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Bannner";
import Card from "@/components/Card";

export default function Home() {
  return (
      <div style={{ margin: 0, padding: 0 }}>
      <Banner />
      <div style={{ padding: '0 1rem' }}> 
        <Card />
      </div>
    </div>
  );
}
