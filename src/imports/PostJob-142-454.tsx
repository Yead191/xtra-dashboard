import svgPaths from "./svg-1fxbsvc2iq";
import clsx from "clsx";

function ListItem({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[21.972px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[11.997px] items-start relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[15.983px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9829 15.9829">
        {children}
      </svg>
    </div>
  );
}
type Text1Props = {
  additionalClassNames?: string;
};

function Text1({ children, additionalClassNames = "" }: React.PropsWithChildren<Text1Props>) {
  return (
    <div className={clsx("h-[19.988px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9969 11.9969">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[4.17555e+07px] shrink-0 size-[19.988px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.019px] py-0 relative size-full">{children}</div>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TextProps = {
  additionalClassNames?: string;
};

function Text({ children, additionalClassNames = "" }: React.PropsWithChildren<TextProps>) {
  return (
    <div className={clsx("h-[15.983px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101828] text-[12px] text-nowrap">{children}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <Wrapper>
      <Wrapper1>
        <g clipPath="url(#clip0_142_491)" id="Icon">
          <path d={svgPaths.pc190e80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999742" />
          <path d={svgPaths.p170be7c0} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999742" />
        </g>
        <defs>
          <clipPath id="clip0_142_491">
            <rect fill="white" height="11.9969" width="11.9969" />
          </clipPath>
        </defs>
      </Wrapper1>
    </Wrapper>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="basis-0 grow h-[19.988px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">{text}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <Wrapper>
      <Wrapper1>
        <g clipPath="url(#clip0_142_497)" id="Icon">
          <path d={svgPaths.p3b815d80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999742" />
          <path d={svgPaths.p365aa640} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999742" />
        </g>
        <defs>
          <clipPath id="clip0_142_497">
            <rect fill="white" height="11.9969" width="11.9969" />
          </clipPath>
        </defs>
      </Wrapper1>
    </Wrapper>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("h-[19.988px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">{text}</p>
      </div>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="content-stretch flex h-[15.983px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.12px]">{text}</p>
    </div>
  );
}

export default function PostJob() {
  return (
    <div className="bg-[#f9fafb] relative size-full" data-name="Post Job">
      <div className="absolute h-[24.003px] left-[calc(75%+52.22px)] top-[23.98px] w-[30.946px]" data-name="Button" />
      <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[430px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col h-[54px] items-center overflow-clip pb-[12px] pt-0 px-0 relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Status Bar">
              <div className="backdrop-blur-[32px] backdrop-filter h-[54px] relative shrink-0 w-[430px]" data-name="Status Bar">
                <div className="absolute h-[54px] left-0 right-[64.89%] top-1/2 translate-y-[-50%]" data-name="Time">
                  <p className="absolute font-['Poppins:Medium',sans-serif] inset-[33.96%_39.2%_21.59%_40.27%] leading-[24px] not-italic text-[16px] text-black text-center text-nowrap">9:41</p>
                </div>
                <div className="absolute h-[54px] left-[63.61%] right-0 top-1/2 translate-y-[-50%]" data-name="Levels">
                  <div className="absolute bottom-[33.33%] contents left-[calc(50%+24.43px)] top-[42.59%] translate-x-[-50%]" data-name="Battery">
                    <div className="absolute border border-black border-solid bottom-[33.33%] left-[calc(50%+23.27px)] opacity-[0.35] rounded-[4.3px] top-[42.59%] translate-x-[-50%] w-[25px]" data-name="Border" />
                    <div className="absolute bottom-[41.01%] left-[calc(50%+37.43px)] top-[51.45%] translate-x-[-50%] w-[1.328px]" data-name="Cap">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4.07547">
                        <path d={svgPaths.p193f1400} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                      </svg>
                    </div>
                    <div className="absolute bg-black bottom-[37.04%] left-[calc(50%+23.27px)] rounded-[2.5px] top-[46.3%] translate-x-[-50%] w-[21px]" data-name="Capacity" />
                  </div>
                  <div className="absolute bottom-[33.39%] left-[calc(50%-4.96px)] top-[43.78%] translate-x-[-50%] w-[17.142px]" data-name="Wifi">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                      <path clipRule="evenodd" d={svgPaths.p1fac3f80} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
                    </svg>
                  </div>
                  <div className="absolute bottom-[33.77%] left-[calc(50%-30.63px)] top-[43.58%] translate-x-[-50%] w-[19.2px]" data-name="Cellular Connection">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                      <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[394.01px]">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[#f9fafb] content-stretch flex items-center justify-center relative rounded-[4.1073e+07px] shrink-0 size-[40px]" data-name="Button">
                    <div className="relative shrink-0 size-[19.987px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9868 19.9868">
                        <g id="Icon">
                          <path d={svgPaths.p3b0e8100} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66557" />
                          <path d="M15.823 9.99219H4.16406" id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66557" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101828] text-[18px] text-nowrap">Job Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-end left-[24px] top-[139px]">
        <div className="bg-white h-[457.5px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1.244px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
          <div className="absolute content-stretch flex flex-col gap-[12px] h-[60px] items-start left-[20px] top-[20px] w-[345px]">
            <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">Event Waiter</p>
            <div className="content-stretch flex h-[23.994px] items-center relative shrink-0 w-full" data-name="Container">
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
                  <div className="bg-[#dbeafe] h-[23.955px] relative rounded-[4.17555e+07px] shrink-0 w-[61.326px]" data-name="Text">
                    <p className="absolute font-['Arial:Bold',sans-serif] leading-[1.5] left-[12px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[calc(50%-8.22px)]">Waiter</p>
                  </div>
                  <div className="content-stretch flex gap-[3.986px] h-[16px] items-center relative shrink-0 w-[124px]" data-name="Container">
                    <Wrapper2>
                      <g id="Frame">
                        <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                        <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                        <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                        <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                        <path d="M5.33333 9.33333H5.34" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M8 9.33333H8.00667" id="Vector_6" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M10.6667 9.33333H10.6733" id="Vector_7" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M5.33333 12H5.34" id="Vector_8" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M8 12H8.00667" id="Vector_9" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M10.6667 12H10.6733" id="Vector_10" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </Wrapper2>
                    <div className="h-[16px] relative shrink-0 w-[102px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[1.5] left-[0.3px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.99px] tracking-[-0.12px]">Posted 3 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[3.986px] h-[15.983px] items-center relative shrink-0 w-[114.603px]" data-name="Container">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9996 15.9996">
                        <g clipPath="url(#clip0_142_501)" id="Icon">
                          <path d={svgPaths.p3028d100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                          <path d={svgPaths.p4bc4400} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                          <path d={svgPaths.p5ea4800} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                          <path d={svgPaths.p3e34b480} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                        </g>
                        <defs>
                          <clipPath id="clip0_142_501">
                            <rect fill="white" height="15.9996" width="15.9996" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="basis-0 grow h-[15.983px] min-h-px min-w-px relative shrink-0" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[1.5] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-1px] tracking-[-0.12px]">3 workers needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[20px] top-[91.99px] w-[345.273px]">
            <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full" data-name="Container">
              <div className="[grid-area:1_/_1] bg-[#eff6ff] content-stretch flex flex-col gap-[3.986px] h-[80px] items-start pb-0 pt-[11.997px] px-[11.997px] relative rounded-[8px] shrink-0 w-[165px]" data-name="Container">
                <div className="content-stretch flex gap-[7.991px] h-[15.983px] items-center relative shrink-0 w-full" data-name="Container">
                  <Icon>
                    <g clipPath="url(#clip0_142_511)" id="Icon">
                      <path d="M5.55469 1.52148V4.1853" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                      <path d="M10.8828 1.52148V4.1853" id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                      <path d={svgPaths.p12837300} id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                      <path d="M2.22266 6.84961H14.2098" id="Vector_4" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                    </g>
                    <defs>
                      <clipPath id="clip0_142_511">
                        <rect fill="white" height="15.9829" width="15.9829" />
                      </clipPath>
                    </defs>
                  </Icon>
                  <Text additionalClassNames="w-[67.432px]">{`Date & Time`}</Text>
                </div>
                <div className="content-stretch flex h-[19.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
                  <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Today</p>
                </div>
                <ParagraphText text="2:00 PM - 8:00 PM" />
              </div>
              <div className="[grid-area:1_/_2] bg-[#eff6ff] content-stretch flex flex-col gap-[3.986px] h-[80px] items-start pb-0 pt-[11.997px] px-[11.997px] relative rounded-[8px] shrink-0 w-[165px]" data-name="Container">
                <div className="content-stretch flex gap-[7.991px] h-[15.983px] items-center relative shrink-0 w-full" data-name="Container">
                  <Icon>
                    <g clipPath="url(#clip0_142_527)" id="Icon">
                      <path d="M7.71875 1.52148V14.8406" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                      <path d={svgPaths.p32af100} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                    </g>
                    <defs>
                      <clipPath id="clip0_142_527">
                        <rect fill="white" height="15.9829" width="15.9829" />
                      </clipPath>
                    </defs>
                  </Icon>
                  <Text additionalClassNames="w-[47.365px]">Payment</Text>
                </div>
                <div className="h-[19.988px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arial:Bold',sans-serif] leading-[1.5] left-[-0.27px] not-italic text-[#4a5565] text-[14px] top-[-1.81px] w-[53px]">$120.00</p>
                </div>
                <ParagraphText text="Per worker" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[7.991px] h-[23px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="h-[27px] relative shrink-0 w-[16px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 27">
                      <g id="Icon">
                        <path d={svgPaths.p3717ca80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                        <path d={svgPaths.p15e70000} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                      </g>
                    </svg>
                  </div>
                  <div className="h-[27px] relative shrink-0 w-[60px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                      <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap">Location</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[8px] h-[49.317px] items-start leading-[1.5] not-italic relative shrink-0 text-[14px] w-full">
                  <p className="relative shrink-0 text-[#101828] w-full">Downtown Event Center</p>
                  <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#4a5565] w-full">456 Downtown Ave, Central District</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <Wrapper2>
                    <g id="Icon">
                      <path d="M8 1.33301V14.6663" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                      <path d={svgPaths.p3b14d200} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33191" />
                    </g>
                  </Wrapper2>
                  <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap">Budget Breakdown</p>
                </div>
                <div className="bg-[#eff6ff] h-[117.189px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[11.997px] px-[11.997px] relative size-full">
                    <Container2>
                      <TextText text="Rate per worker:" additionalClassNames="w-[101.031px]" />
                      <Text1 additionalClassNames="w-[52.129px]">
                        <p className="absolute font-['Arial:Bold',sans-serif] leading-[1.5] left-0 not-italic text-[#101828] text-[14px] top-[-2px] w-[53px]">$120.00</p>
                      </Text1>
                    </Container2>
                    <Container2>
                      <TextText text="Workers hired:" additionalClassNames="w-[89.306px]" />
                      <Text1 additionalClassNames="w-[37.585px]">
                        <p className="absolute font-['Arial:Bold',sans-serif] leading-[1.5] left-0 not-italic text-[#101828] text-[14px] top-[-2px] w-[38px]">3 of 3</p>
                      </Text1>
                    </Container2>
                    <div className="h-[37.235px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[1.244px_0px_0px] border-[rgba(49,100,230,0.21)] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between pb-0 pt-[1.244px] px-0 relative size-full">
                          <div className="h-[19.988px] relative shrink-0 w-[83.978px]" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                              <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">Total Budget:</p>
                            </div>
                          </div>
                          <div className="h-[27.999px] relative shrink-0 w-[67.004px]" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="absolute font-['Arial:Bold',sans-serif] leading-[1.5] left-0 not-italic text-[#3164e6] text-[18px] top-[-1.75px] w-[68px]">$360.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col h-[142px] items-start relative shrink-0 w-full">
            <div className="bg-white h-[140px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1.244px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
              <div className="absolute content-stretch flex flex-col h-[100px] items-start left-[calc(50%+0.36px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[342px]">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="absolute bg-[#3164e6] h-[19.988px] left-0 rounded-[4.17555e+07px] top-[2.11px] w-[5.989px]" data-name="Container" />
                    <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[13.98px] not-italic text-[#101828] text-[16px] text-nowrap top-[-1.65px]">Job Description</p>
                  </div>
                  <div className="h-[66px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Arial:Regular',sans-serif] h-[68px] leading-[22.75px] left-[-0.23px] not-italic text-[#4a5565] text-[14px] top-[-2.73px] w-[340px]">Looking for professional waitstaff for a wedding reception. Must have experience with formal events and be able to work in a fast-paced environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[190px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1.244px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
          <div className="content-stretch flex flex-col gap-[11.997px] items-start pb-[1.244px] pt-[21.233px] px-[21.233px] relative size-full">
            <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 3">
              <div className="absolute bg-[#3164e6] h-[19.988px] left-0 rounded-[4.17555e+07px] top-[2.11px] w-[5.989px]" data-name="Container" />
              <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[13.98px] not-italic text-[#101828] text-[16px] text-nowrap top-[-1.65px]">Requirements</p>
            </div>
            <div className="content-stretch flex flex-col gap-[7.991px] h-[111.861px] items-start relative shrink-0 w-full" data-name="List">
              <ListItem>
                <Container />
                <TextText1 text="Professional appearance" />
              </ListItem>
              <ListItem>
                <Container />
                <TextText1 text="Experience with formal events" />
              </ListItem>
              <ListItem>
                <Container1 />
                <TextText1 text="Ability to work 6+ hours standing" />
              </ListItem>
              <ListItem>
                <Container1 />
                <TextText1 text="Customer service skills" />
              </ListItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}