import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Layout from "@/components/Layout";
export default function Home() {
  return (
    <Layout>
      <div
        className="bg-cover bg-center   h-screen text-white py-0"
        style={{ backgroundImage: "url('img/descarga.png')" }}
      >
        <div className="container  flex items-center h-screen ">
          <div>
            <h2 className="text-left ml-5 text-5xl  font-semibold">
              AIR JORDAN 13 RETRO
            </h2>
            <h2 className="text-left ml-5 text-5xl  font-semibold">
              'WHITE WOLF GREY'
            </h2>
            <button class="md:ml-5 relative inline-flex items-center justify-center mt-5 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium bg-gray-600 rounded-lg" >
              <span class="relative px-5 py-2.5 ">
                Buy Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
