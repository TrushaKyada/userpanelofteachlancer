/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  solutions: [
    { name: 'Sales Intern', href: '#' },
    { name: 'Business Development', href: '#' },
    { name: 'Customer Success ', href: '#' },
    { name: 'Sales Representative (SDR)', href: '#' },
  ],
  support: [
    { name: 'Team', href: '#' },
    { name: 'Sales Academy', href: '#' },
    { name: 'Hiring Process', href: '#' },
    { name: 'Talent Process', href: '#' },
  ],
  company: [
    { name: 'Reach Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Hirer FAQs', href: '#' },
    { name: 'Talent FAQs', href: '#' },

  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/vaionex/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/vaionex/',
      img: '../img/Asset 5 8.png'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/vaionex_corp',
      img: '../img/Asset 5 7.png'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vaionex/',
      img: '../img/Asset 5 6.png'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vaionex/',
      img: '../img/Asset 5 5.png'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vaionex/',
      img: '../img/Asset 5 4.png'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vaionex/',
      img: '../img/Asset 5 3.png'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vaionex/',
      img: '../img/Asset 5 2.png'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vaionex/',
      img: '../img/Asset 5 1.png'
    }
  ],
}

export default function Footer() {
  return (
    <>
      <footer className="bg-[#212A41]">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 xl:px-44 px-20 py-10">
          <div className="md:col-span-2 mt-2">
            <img
              className="h-8 w-auto sm:h-10 mb-[30px] bg-[white]"
              src="/img/logo.png"
              alt="vaionex-logo"
            />
            <p className="text-[12px] text-[#fff] leading-none mb-2">
              Join our newsletter to stay up to date on features and releases
            </p>
         
            <p className="text-[12px] text-[#fff] leading-none py-3">Subscription implies consent to our privacy policy</p>
            <div className="flex w-[250px] pt-[0px]">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500 no-underline"
                >
                  <span className="sr-only">{item.name}</span>
                  <img src={item.img} alt=""></img>
                </a>
              ))}
            </div>
          </div>
          <div className="footul lg:xl:md:mt-0 sm:mt-5">
            <h3 className="text-sm mt-3 text-[28px] font-bold text-[#fff]">
              Prefered Talents
            </h3>
            <div className="w-[40%] h-[2%] bg-[#3DC0DF] my-2"></div>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.solutions.map((item) => (
                <li key={item.name} className="leading-none">
                  <a
                    href={item.href}
                    className="text-[#fff] text-[18px] no-underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footul lg:xl:md:mt-0 sm:mt-5">
              <h3 className="text-sm mt-3 text-[28px] font-bold text-[#fff] tracking-wider">
                About Us
              </h3>
              <div className="w-[30%] h-[2%] bg-[#3DC0DF] my-2"></div>
              <ul role="list" className="mt-4 space-y-2">
                {navigation.support.map((item) => (
                  <li key={item.name} className="leading-none">
                    <a
                      href={item.href}
                      className="text-[#fff] text-[18px] no-underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
          </div>
          <div className="footul lg:xl:md:mt-0 sm:mt-5">
              <h3 className="text-sm text-[28px] mt-3 font-bold text-[#fff]  tracking-wider">
                Company
              </h3>
              <div className="w-[25%] h-[2%] bg-[#3DC0DF] my-2"></div>
              <ul role="list" className="mt-4 space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name} className="leading-none">
                    <a
                      href={item.href}
                      className="text-[#fff] text-[18px] no-underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          
        </div>
        <div className="madein flex sm:px-44 px-10 pb-5 lg:gap-40 lg:flex-row md:flex-col sm:flex-col mt-5 md:gap-10 sm:gap-10" >
            <div className="india">
              <img src="/img/image 1.png"></img>
            </div>
            <div className="pl-16 intext flex text-[#fff] gap-3 mt-[25px] md:mt-[0px] sm:mt-[25px] ml-[15px]">
              <p>© Copyright 2021-22</p>
              <p>TEACHLANCER™ </p>
              <p className="text-[#ABABAB]">| Privacy Policy</p>
              <p className="text-[#ABABAB]">Website Terms</p>
            </div>
          </div>

      </footer>
    </>

  )
}
