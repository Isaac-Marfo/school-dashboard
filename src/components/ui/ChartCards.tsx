import Image from "next/image";

function ChartCards({
  title,
  children,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <div className="p-4 bg-white rounded-xl w-full h-full ">
      {/* header  */}
      <div className="flex items-center justify-between ">
        <h1 className="text-lg font-semibold cpitalize text-gray-800">
          {title}
        </h1>
        <Image
          src="/moreDark.png"
          alt="more"
          width={20}
          height={20}
          className=""
        />
      </div>
      {children}
    </div>
  );
}

export default ChartCards;
