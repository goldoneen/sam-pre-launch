import { MdFileUpload } from "react-icons/md";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const MultipleCreateModule = () => {
const [enabled1, setEnabled1] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const nextRouter = useRouter();
  return (
    <div className="!max-w-[62.68rem] mx-auto mt-10 md:mt-16 lg:mt-24 container">
      <Button
        onClick={() => nextRouter.back()}
        className="!px-8 py-3.5 borders"
      >
        <i className="icon-backspace text-xl mr-2" />
        Go Back
      </Button>
      <h2 className="mt-10 md:mt-14 font-archivo-medium text-white">
        Create Multiple Collectible
      </h2>
      <p className="mt-3">
        Abundantly earth signs let replenish day, place he. Midst said tself
        don't from she'd third.
      </p>
      <h4 className="mt-10 md:mt-16 lg:mt-24 ">Upload file</h4>
      <p className=" ">Drag or choose your file</p>
      <div className="borders bg-gray2 rounded-[10px] py-11 mt-3 flex items-center justify-center flex-col">
        <div className="h-11 w-11 rounded-[10px] bg-[#1C1D39]  flex items-center justify-center">
          <MdFileUpload className="text-blue1 text-xl" />
        </div>
        <label className="custom-file-upload mt-5 !borders">
          <input type="file" />
          Custom Upload
        </label>
        <p className="mt-3">PNG, GIF,WEBP etc. Max 20mb</p>
      </div>
      <div className="flex justify-between items-center mt-10 md:mt-14">
        <div className="">
          <h4>Put on marketplace </h4>
          <p className="">
            Enter price to allow users instantly purchase your NFT
          </p>
        </div>
        <Switch
          checked={enabled1}
          onChange={setEnabled1}
          className={classNames(
            enabled1 ? "bg-blue-600" : "bg-[#141530]",
            "relative inline-flex flex-shrink-0 h-6 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={classNames(
              enabled1 ? "translate-x-9" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-9">
        <div className="create-card borders">Fixed Price</div>
        <div className="create-card borders">Open For Bids</div>
      </div>
      <h4 className="mt-9 mb-2.5">Price</h4>
      <Input placeholder="Enter price for one piece" />
      <p className="text-sm mt-2.5">Service fee 2.5%</p>
      <p className="text-sm">You will receive 0 ETH 0</p>
      <div className="flex justify-between items-center mt-10 md:mt-14">
        <div className="">
          <h4>Unlock once purchased </h4>
          <p className="mt-1 text-sm">
            Content will be unlocked after successful transaction
          </p>
        </div>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? "bg-blue-600" : "bg-[#141530]",
            "relative inline-flex flex-shrink-0 h-6 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? "translate-x-9" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
      </div>
      <Input
        placeholder="Digital key, code to redeem or link to a file"
        className="mt-2.5"
      />
      <p className="text-sm mt-2.5">Markdown is supported</p>
      <h4 className="mt-10">Choose Collection</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-2.5">
        <div className="create-card2 "></div>
        <div className="create-card2 "></div>
        <div className="create-card2 "></div>
      </div>
      <h4 className="mt-11">Item Details</h4>
      <label className="text-blue1 block mt-2.5">Title</label>
      <Input placeholder="Enter price for one piece" className="mt-2.5" />
      <label className="text-blue1 mt-7 block">Description(Optional)</label>
      <Input placeholder="Enter price for one piece" className="mt-2" />
      <p className="mt-2.5 text-xs">With preserved line-breaks</p>
      <label className="text-blue1 mt-7 block">Royalties</label>
      <Input placeholder="10" type="number" className="mt-2" />
      <label className="text-blue1 mt-7 block">
        Impressions are dependant on amount paid
      </label>
      <Input placeholder="1000 $LFG" className="mt-2" />
      <div className="flex justify-end gap-5 my-11">
        <Button className="py-4 !px-5">Advance Settings</Button>
        <Button className=" py-4 bg-gradient-to-r from-blue-600 to-blue1">
          Create Item
        </Button>
      </div>
    </div>
  );
};

export default MultipleCreateModule;
