import { useState } from "preact/hooks";

export interface listItem {
  title?: string;
  /** @format textarea */
  description?: string;
}

export interface Benefits {
  /** @description a short main title text*/
  mainTitle?: string;
  /** @description a short subtitle text*/
  /** @format textarea */
  description?: string;
  /** @description add a item to information list in contact page*/
  listItems: listItem[];
  showbullets?: boolean;
}

export interface Props {
  /** @description settings of benefits section in page*/
  infor?: Benefits;

  formInfor?: {
    formTitle?: string;
    BusinessCTAName?: string;
    DevCTAName?: string;
    PlaceholderfieldName?: string;
    PlaceholderfieldEmail?: string;
    PlaceholderfieldPosition?: string;
    PlaceholderfieldSocial?: string;
    PlaceholderFieldExtra?: string;
    submiteName?: string;
    /** @description set the post url to action submit form business*/
    urlToActionBusiness: string;
    /** @description set the post url to action submit form developers*/
    urlToActionDev: string;
  };
}

export default function ContactUs({ infor, formInfor }: Props) {
  const [active, setActive] = useState({
    btn1On: true,
    btn2On: false,
    selectedUrlToAction: "/",
  });
  return (
    <div class="flex flex-col items-top font-sans p-6 pt-[103px] pb-10 xl:p-40 gap-y-10 overflow-hidden xl:(flex-row gap-x-[120px])">
      <div class="w-full text-left xl:w-1/2">
        <h1 class="text-dark-green text-5xl leading-[53px] lg:text-[3.3334vw] 2xl:text-5xl">
          {infor?.mainTitle}
        </h1>
        <h2 class="font-normal text-3xl text-dark-green opacity-50 pt-4 leading-9">
          {infor?.description}
        </h2>
        <ol
          start={1}
          type="1"
          class="flex flex-col gap-4 text-dark-green pt-10"
        >
          {infor?.listItems?.map((item, index) => {
            return (
              <li class=" w-full flex justify-items-start items-baseline gap-3">
                <span class="rounded-1/2 w-8 h-8 leading-8 text-center bg-primary">
                  {index + 1}
                </span>
                <div class="w-[90%] flex flex-col">
                  <h3 class="text-[20px] font-medium">
                    {item?.title}
                  </h3>
                  <p class="text-[16px]">
                    {item?.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div class="w-full xl:w-1/2 relative max-w-[443px]">
        <span class="hidden lg:(w-[352px] h-[900px] block absolute right-0 -top-24 bg-contact-us-bg-gradient rotate-[333deg] -z-10)">
        </span>
        <form
          class="flex flex-col justify-center items-center bg-white border-1 border-dark-green rounded-2xl p-4 md:p-8 gap-6 placeholder-[#161A16] "
          method="POST"
          action="/api/leads"
        >
          <span class="text-[20px]">
            {formInfor?.formTitle || "Ready to delight your customers?"}
          </span>

          <input
            id="name"
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="text"
            name="userName"
            placeholder={formInfor?.PlaceholderfieldName || "Name"}
            required
          />
          <input
            id="email"
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="email"
            name="userEmail"
            placeholder={formInfor?.PlaceholderfieldEmail || "Work e-mail"}
            required
          />
          <input
            id="role"
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="text"
            name="userRole"
            placeholder={formInfor?.PlaceholderfieldPosition || "Position"}
            required
          />
          <input
            id="linkedin"
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="text"
            name="userLinkedin"
            placeholder={formInfor?.PlaceholderfieldSocial || "Linkedin"}
            required
          />
          <input
            class="w-full h-[51px] bg-dark-green text-white rounded-[4px] cursor-pointer"
            type="submit"
            value={formInfor?.submiteName || "Schedule a demo"}
          />
        </form>
      </div>
    </div>
  );
}
