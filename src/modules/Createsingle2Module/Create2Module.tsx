import { MdFileUpload } from 'react-icons/md';
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const SingleCreate2 = () => {
  const [enabled, setEnabled] = useState(false);

  const nextRouter = useRouter();
  return (
    <div className="!max-w-[60.68rem] mx-auto mt-10 md:mt-16 lg:mt-24 container">
      <Button onClick={() => nextRouter.back()}>Go Back</Button>
      <h2 className="mt-10 md:mt-14 font-archivo-medium text-white">
        Create Single Collectible
      </h2>
      <p className="mt-3">
        Abundantly earth signs let replenish day, place he. Midst said tself
        don't from she'd third.
      </p>
      <h4 className="mt-10 md:mt-16 lg:mt-24 ">Upload file</h4>
      <p className=" ">Drag or choose your file</p>
      <div className="borders bg-gray2 rounded-[10px] py-11 mt-3 flex items-center justify-center flex-col">
        <div className="h-11 w-11 rounded-[10px] bg-[#1C1D39]  flex items-center justify-center">
          <MdFileUpload className='text-blue1 text-xl'/>
        </div>
        <label className="custom-file-upload mt-5 !borders">
          <input type="file" />
          Custom Upload
        </label>
        <p className="mt-3">PNG, GIF,WEBP etc. Max 20mb</p>
      </div>
      <h4 className="mt-8">Put on marketplace</h4>
      <p className="">Enter price to allow users instantly purchase your NFT</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-9">
        <div className="create-card borders">Fixed Price</div>
        <div className="create-card borders">Timed Auction</div>
        <div className="create-card borders">Open For Bids</div>
      </div>
      <h4 className="mt-9 mb-2.5">Minimum bid</h4>
      <Input placeholder="Enter price for one piece" />
      <p className="text-sm mt-2.5">
        Bids below this amount wont`b be allowed.
      </p>
      <div className="grid grid-cols-2 gap-8 mt-14">
        <div>
          <h4 className="mb-3">Starting Date</h4>
          <select
            id="location"
            name="location"
            className="block w-full pl-3  py-4 text-base bg-[#141530] border border-[#292A4B] text-[#7F8FA5] focus:outline-none  rounded-[5px]"
            defaultValue="Right after listing"
          >
            <option>Right after listing</option>
            <option>Center after listing</option>
            <option>Left after listing</option>
          </select>
        </div>
        <div>
          <h4 className="mb-3">Expiration Date</h4>
          <select
            id="location"
            name="location"
            className="block w-full px-3  py-4 text-base bg-[#141530] border border-[#292A4B] text-[#7F8FA5] focus:outline-none  rounded-[5px]"
            defaultValue="1 day"
          >
            <option>1 day</option>
            <option>2 day</option>
            <option>3 day</option>
          </select>
        </div>
      </div>
      <p className="mt-2.5 text-sm">
        Any bid placed in the last 10 minutes extends the auction by 10 minutes.
      </p>
      <p className="mt-1 text-sm text-blue1">
        Learn more how timed auctions work
      </p>
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
            enabled ? "bg-blue1" : "bg-[#141530]",
            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
      </div>
      <Input
        placeholder="Digital key, code to redeem or link to a file"
        className="mt-2.5"
      />
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
        <Button className="py-4">Advance Settings</Button>
        <Button className=" py-4 bg-gradient-to-r from-blue-600 to-blue1">Create Item</Button>
      </div>
    </div>
  );
};

export default SingleCreate2;
