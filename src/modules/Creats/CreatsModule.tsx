import Button from "../../components/button/Button";
import Link from "next/link";

const CreatsModule = () => {
  return (
    <div className="container pt-28">
      <div className="max-w-[41.25rem] mx-auto text-center">
        <h3>Create Collectible</h3>
        <p className="text-xl mt-4 font-archivo-medium">
          Choose "Single" if you want your collectible to be one of a kind or
          "Multiple" if you want to sell one collectible multiple times
        </p>
        <div className="grid sm:grid-cols-2 gap-11 mt-14">
          <div>
            <div className="border rounded-lg p-4 mb-8 bg-[#121434] border-[#2B2D54]">
              <div className="bg-red-500 px-14 py-28 rounded-md">
                <p className="text-white font-archivo-medium text-3xl">
                  Ther will be illustration
                </p>
              </div>
            </div>
            <Link href="/singlecreate">
              <a href="#">
                <Button className="bg-[#191A34] border border-[#272740]">Create Single</Button>
              </a>
            </Link>
          </div>
          <div>
            <div className="border  rounded-lg p-4 mb-8 bg-[#121434]  border-[#2B2D54]">
              <div className="bg-red-500 px-14 py-28 rounded-md">
                <p className="text-white font-archivo-medium text-3xl">
                  Ther will be illustration
                </p>
              </div>
            </div>
            <Link href="/multiplecreat">
              <a href="#">
                <Button className="bg-[#191A34] border border-[#272740]">Create Multiple</Button>
              </a>
            </Link>
          </div>
        </div>
        <p className="text-base mt-16 text-blue pb-48 ">
          We do not own your private keys and cannot access your funds without
          your confirmation
        </p>
      </div>
    </div>
  );
};
export default CreatsModule;
