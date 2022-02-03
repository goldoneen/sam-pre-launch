import Image from "next/image";
const navigation = {
  solutions: [
    { name: "Explore", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "About Us", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Terms of use", href: "#" },
    { name: "Appy for verified LFG", href: "#" },
  ],
  legal: [
    { name: "Twitter", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Linkedin", href: "#" },
    { name: "Medium", href: "#" },
  ],
};

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#141526] py-14" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className=" px-8 sm:px-12 md:px-16 xl:px-32 max-w-[1896px] mx-auto">
          <div className="xl:flex  justify-between">
            <div className="w-full xl:w-1/4">
              <Image
                height={61}
                width={282}
                // className="hidden lg:block h-8 w-auto"
                src="/assets/images/footer.svg"
                alt="Workflow"
              />
              <p className="text-[#7f8fa5] mt-6 text-xl font-manrope-medium">
                Gamerse is the LFG (“Looking For Group”) platform for the entire
                NFT gaming industry.
              </p>
            </div>
            <div className="flex flex-wrap gap-16 mt-12 xl:mt-0 w-full lg:w-9/12   xl:w-[58rem] justify-between">
              <div>
                <h3 className="footer-heading">Quick Links</h3>
                <ul role="list" className="mt-8 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="footer-item">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="footer-heading">Support</h3>
                <ul role="list" className="mt-8 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="footer-item">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="footer-heading">Company</h3>
                <ul role="list" className="mt-8 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="footer-item">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="footer-heading">Join the community</h3>
                <ul role="list" className="mt-8 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="footer-item">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#202136] flex justify-between py-4  px-8 sm:px-12 md:px-16 xl:px-36 max-w-[1920px] mx-auto">
        <p className="text-base text-[#7F8FA5]">
          2021 © Gamerse. All rights reserved.
        </p>
        <p className="text-base text-[#7F8FA5]">Gamerse@support.com</p>
      </div>
    </div>
  );
};
export default Footer;
