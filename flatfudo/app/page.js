import Image from "next/image";
import Header from "./components/Header";
import Service from "./components/Service";

export default function Home() {
  return (
    <main className="">
      <div className="sticky top-0 z-10 ">
        <Header />
      </div>
      <div className="relative">
      <div className="z-0 w-screen h-screen relative" >
        <Image
          src="/bernard-hermant-yU6XcchzS0s-unsplash.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute w-[62rem] h-[32rem] bottom-1/3 right-[10rem]">
          <Image
            src="/フラット不動産ロゴ.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      </div>
      <div className="flex min-h-32 flex-row items-center justify-center bg-[#525252] w-screen py-2 px-44 z-10 text-4xl text-white">
        MESSAGE
      </div>
      <div className="relative">
      <div className="z-0 w-screen h-screen relative opacity-75" >
        <Image
          src="/photo-1714455657937-f7fa236a80ac_LE_auto_x2.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 30%"
        />
        <div className="absolute w-[30rem] bottom-[40rem] right-[30rem] p-8 border rounded-md backdrop-blur-sm">
          <h2 className="text-5xl text-white">Mission</h2>
          <p className="text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo justo. Morbi elementum convallis ex eget congue. Nulla faucibus dolor sed laoreet imperdiet. </p>
        </div>
      </div>
      </div>
      <div className="flex min-h-32 flex-row items-center justify-center bg-[#525252] w-screen py-2 px-44 z-10 text-4xl text-white">
        SERVICE
      </div>
      <Service/>

      <div className="flex min-h-32 flex-row items-center justify-center bg-[#525252] w-screen py-2 px-44 z-10 text-4xl text-white">
        TOPICS
      </div>
      <div className="flex flex-col max-w-4xl mx-auto my-8">
        <div className="flex flex-row justify-between items-center my-8 py-4 border-b-2 border-b-blue-400">
          <div className="flex flex-col">
            <p className="text-lg">2024.7.8</p>
            <p className="text-lg"> HPリニューアルのお知らせ</p>
          </div>
            <p className="text-lg">More</p>
        </div>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto">
        <div className="flex flex-row justify-between items-center my-8 py-4 border-b-2 border-b-blue-400">
          <div className="flex flex-col">
            <p className="text-lg">2024.7.8</p>
            <p className="text-lg"> HPリニューアルのお知らせ</p>
          </div>
            <p className="text-lg">More</p>
        </div>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto">
        <div className="flex flex-row justify-between items-center my-8 py-4 border-b-2 border-b-blue-400">
          <div className="flex flex-col">
            <p className="text-lg">2024.7.8</p>
            <p className="text-lg"> HPリニューアルのお知らせ</p>
          </div>
            <p className="text-lg">More</p>
        </div>
      </div>

      <div className="relative w-screen h-[25rem] mt-16">
        <div className="z-0 w-screen h-[25rem] relative opacity-75" >
          <Image
            src="/photo-1509628061459-1328d06c2ced.avif"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 60%"
          />
          <div className="absolute top-1/2 left-1/2 backdrop-blur-sm -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-5xl text-white text-center py-8 px-24 border-4 rounded-lg">Contacts</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
