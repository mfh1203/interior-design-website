import Image from "next/image";

export default function Service() {
  return (
    <div>
      <div className="relative">
        <div className="z-0 w-screen h-[50rem] relative opacity-75" >
          <Image
            src="/madalyn-cox-jua6WOzQRB8-unsplash.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
          />
          <div className="absolute w-[30rem] bottom-[20rem] right-[30rem] p-8 border rounded-md backdrop-blur-sm">
            <h2 className="text-5xl text-white">賃貸</h2>
            <p className="text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo justo. Morbi elementum convallis ex eget congue. Nulla faucibus dolor sed laoreet imperdiet. </p>
          </div>
          
        </div>
      </div>
      <div className="flex flex-row w-screen "> 
          <div className="relative w-1/5 h-[25rem] opacity-75 z-0">
            <Image
            src="/madalyn-cox-jua6WOzQRB8-unsplash.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            />
            <h1 className="w-full h-full flex justify-center items-center absolute text-5xl text-white ring-gray-600 ring-2">賃貸</h1>
          </div>

          <div className="relative w-1/5 h-[25rem] opacity-75 z-0">
            <Image
            src="/stephanie-harvey-QU_s85L9wxE-unsplash.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            />
            <h1 className="w-full h-full flex justify-center items-center absolute text-5xl text-white ring-gray-600 ring-2">売買</h1>
          </div>

          <div className="relative w-1/5 h-[25rem] opacity-75 z-0">
            <Image
            src="/photo-1597293544475-16730f31a638.avif"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            />
            <h1 className="w-full h-full flex justify-center items-center absolute text-5xl text-white ring-gray-600 ring-2">空室状況</h1>
          </div>

          <div className="relative w-1/5 h-[25rem] opacity-75 z-0">
            <Image
            src="/photo-1455390582262-044cdead277a.avif"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            />
            <h1 className="w-full h-full flex justify-center items-center absolute text-5xl text-white ring-gray-600 ring-2">申込書</h1>
          </div>

          <div className="relative w-1/5 h-[25rem] opacity-75 z-0">
            <Image
            src="/photo-1593062096033-9a26b09da705.avif"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            />
            <h1 className="w-full h-full flex justify-center items-center absolute text-5xl text-white ring-gray-600 ring-2">各種問合せ</h1>
          </div>
          

        </div>
    </div>
  );
}
