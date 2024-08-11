import Image from "next/image";

export default function Header() {
  return (
    <div className="flex min-h-20 flex-row items-center justify-between bg-gray-400 w-screen py-2 px-44 z-10">
          <a
            className="pointer-events-none flex gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              width={150}
              height={24}
              priority
            />
          </a>
        <div className="flex flex-row space-x-20 items-center">
        <a className=" text-white text-lg" href="/">物件情報</a>
        <a className=" text-white text-lg" href="/">申込書ダウンロード(法人)</a>
        <a className="  text-white text-lg" href="/">申込書ダウンロード(個人)(法人)</a>
        <a className="  text-white text-lg border p-4 " href="/">お問い合わせ</a>

        </div>

    </div>
  );
}
