import ChartCards from "./ChartCards";
const Announcements = () => {
  return (
    <ChartCards title="Announcements" rightText="View All">
      <div className="flex flex-col gap-4 mt-2">
        <div className="bg-bimSkyLight rounded-md p-2">
          <div className="flex item-center justify-between">
            <h2 className="text-xm font-semibold ">Lorem ipsum dolor sit</h2>
            <span className="text-gray-400 flex items-center text-center text-xs px-1 py-1 bg-white rounded-lg">
              2025-02-01
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            lorem ipsum dolor sit amet consectetur adipiscicing elit. Quisquam
            corpories reiciedens aliquam minus bla bla bla. The main in the
            middle attack is dangerous.
          </p>
        </div>

        <div className="bg-bimPurpleLight rounded-md p-2">
          <div className="flex item-center justify-between">
            <h2 className="text-xm font-semibold ">Lorem ipsum dolor sit</h2>
            <span className="text-gray-400 flex items-center text-center text-xs px-1 py-1 bg-white rounded-lg">
              2025-02-01
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            lorem ipsum dolor sit amet consectetur adipiscicing elit. Quisquam
            corpories reiciedens aliquam minus bla bla bla. The main in the
            middle attack is dangerous.
          </p>
        </div>

        <div className="bg-bimYellowLight rounded-md p-2">
          <div className="flex item-center justify-between">
            <h2 className="text-xm font-semibold ">Lorem ipsum dolor sit</h2>
            <span className="text-gray-400 flex items-center text-center text-xs px-1 py-1 bg-white rounded-lg">
              2025-02-01
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            lorem ipsum dolor sit amet consectetur adipiscicing elit. Quisquam
            corpories reiciedens aliquam minus bla bla bla. The main in the
            middle attack is dangerous.
          </p>
        </div>
      </div>
    </ChartCards>
  );
};

export default Announcements;
