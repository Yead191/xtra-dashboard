import svgPaths from "./svg-orx7amh09g";
import clsx from "clsx";

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[170px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <g id="SVG">{children}</g>
    </Wrapper1>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Wrapper>
        <path d={svgPaths.p381e2b1} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p221e7100} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </Wrapper>
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="content-stretch flex h-[19.988px] items-start relative shrink-0 w-[80.926px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3164e6] text-[14px] text-nowrap">{"View Details"}</p>
        </div>
        <div className="relative shrink-0 size-[15.983px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9829 15.9829">
            <g id="Icon">
              <path d={svgPaths.pff1a200} id="Vector" stroke="var(--stroke-0, #3164E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66489" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-[0_-0.34%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0547 16">
            <g id="SVG">
              <path d={svgPaths.p16746080} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.pae4f900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[113px]">
      <Wrapper>
        <path d="M6.05469 1.82227V4.48893" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M11.3867 1.82227V4.48893" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p137c5180} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M2.71875 7.15625H14.7188" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </Wrapper>
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end not-italic relative shrink-0 text-right w-[70px]">
      <p className="font-['Arial:Bold',sans-serif] leading-[28px] min-w-full relative shrink-0 text-[#3164e6] text-[20px] w-[min-content]">{text}</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-nowrap">{text1}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[22px] relative shrink-0 w-[255px]">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[1.5] left-[-0.05px] not-italic text-[#101828] text-[18px] text-nowrap top-[-1.56px]">{text}</p>
    </div>
  );
}
type TabButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TabButtonText({ text, additionalClassNames = "" }: TabButtonTextProps) {
  return (
    <div className={clsx("bg-[#eaecef] content-stretch flex h-[32px] items-center justify-center overflow-clip py-[6px] relative rounded-[12px] shrink-0", additionalClassNames)}>
      <p className="font-['Arial:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">{text}</p>
    </div>
  );
}

export default function MyJob() {
  return (
    <div className="bg-[#f9fafb] relative size-full" data-name="My Job">
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
                  <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap">My Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[24px] top-[146px] w-[382px]">
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
          <div className="bg-[#3164e6] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[11px] py-[6px] relative rounded-[12px] shrink-0 w-[48px]" data-name="TabButton">
            <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">All</p>
          </div>
          <TabButtonText text="Active" additionalClassNames="pl-[17px] pr-[16px]" />
          <TabButtonText text="Closed" additionalClassNames="px-[16px]" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[70px]">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#eaecef] h-[32px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="TabButton">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[1.5] left-[35px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[6px] translate-x-[-50%]">Draft</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <Container>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[261px]">
                  <div className="content-stretch flex items-center relative shrink-0 w-[74px]">
                    <div className="bg-[#dcfce7] h-[24px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Text">
                      <div className="absolute content-stretch flex gap-[4px] items-center left-[7.99px] top-[calc(50%-0.03px)] translate-y-[-50%]">
                        <div className="bg-[#00c950] opacity-[0.503] rounded-[4.17555e+07px] shrink-0 size-[5.989px]" data-name="Container" />
                        <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#008236] text-[12px] text-nowrap">Active</p>
                      </div>
                    </div>
                  </div>
                  <HeadingText text="Waitstaff for Wedding" />
                </div>
                <Helper text="$1000" text1="Total Payment" />
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[344px]">
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <Text text="Jan 14, 2026" />
                  <div className="content-stretch flex items-center justify-end relative shrink-0 w-[183px]">
                    <Text1 text="09:00 - 13:00" />
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[110px]">
                  <Wrapper1>
                    <g id="Icon">
                      <path d={svgPaths.p165a3540} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p39d8c180} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p15f40c80} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p1d98a200} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </g>
                  </Wrapper1>
                  <div className="h-[15.983px] relative shrink-0 w-[74.976px]" data-name="Text">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[1.5] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-1.01px]">1 of 1 workers</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex h-[19.988px] items-center left-[247px] top-[38px] w-[100.895px]" data-name="Container">
                  <Helper1 />
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[261px]">
                  <div className="content-stretch flex items-center relative shrink-0 w-[74px]">
                    <div className="bg-[#dcfce7] h-[24px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Text">
                      <div className="absolute content-stretch flex gap-[4px] items-center left-[7.99px] top-[calc(50%-0.03px)] translate-y-[-50%]">
                        <div className="bg-[#00c950] opacity-[0.503] rounded-[4.17555e+07px] shrink-0 size-[5.989px]" data-name="Container" />
                        <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#008236] text-[12px] text-nowrap">Active</p>
                      </div>
                    </div>
                  </div>
                  <HeadingText text="Waitstaff for Wedding" />
                </div>
                <Helper text="$1000" text1="Total Payment" />
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[344px]">
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <Text text="Jan 14, 2026" />
                  <div className="content-stretch flex items-center justify-end relative shrink-0 w-[183px]">
                    <Text1 text="09:00 - 13:00" />
                  </div>
                </div>
                <Text2 text="The Coffee House" />
                <div className="absolute content-stretch flex h-[19.988px] items-center left-[247px] top-[38px] w-[100.895px]" data-name="Container">
                  <Helper1 />
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[261px]">
                  <div className="content-stretch flex items-center relative shrink-0 w-[74px]">
                    <div className="bg-[rgba(255,124,124,0.21)] h-[24px] relative rounded-[8px] shrink-0 w-[66px]" data-name="Text">
                      <div className="absolute content-stretch flex gap-[4px] items-center left-[7.88px] top-[calc(50%-0.01px)] translate-y-[-50%]">
                        <div className="bg-[#da1818] rounded-[4.17555e+07px] shrink-0 size-[5.989px]" data-name="Container" />
                        <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#da1818] text-[12px] text-nowrap">Closed</p>
                      </div>
                    </div>
                  </div>
                  <HeadingText text="Waitstaff for Wedding" />
                </div>
                <Helper text="$1000" text1="Total Payment" />
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[344px]">
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <Text text="Jan 14, 2026" />
                  <div className="content-stretch flex items-center justify-end relative shrink-0 w-[183px]">
                    <Text1 text="09:00 - 13:00" />
                  </div>
                </div>
                <Text2 text="The Coffee House" />
                <div className="absolute content-stretch flex h-[19.988px] items-center left-[247px] top-[38px] w-[100.895px]" data-name="Container">
                  <Helper1 />
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[261px]">
                  <div className="content-stretch flex items-center relative shrink-0 w-[61px]">
                    <div className="bg-[#fffbeb] h-[24px] relative rounded-[8px] shrink-0 w-[61px]" data-name="Text">
                      <div className="absolute content-stretch flex gap-[4px] items-center left-[7.88px] top-[calc(50%-0.01px)] translate-y-[-50%]">
                        <div className="bg-[#f59e0b] rounded-[4.17555e+07px] shrink-0 size-[5.989px]" data-name="Container" />
                        <p className="font-['Arial:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f59e0b] text-[12px] text-nowrap">Draft</p>
                      </div>
                    </div>
                  </div>
                  <HeadingText text="Waitstaff for Wedding" />
                </div>
                <Helper text="$1000" text1="Total Payment" />
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[344px]">
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <Text text="Jan 14, 2026" />
                  <div className="content-stretch flex items-center justify-end relative shrink-0 w-[183px]">
                    <Text1 text="09:00 - 13:00" />
                  </div>
                </div>
                <Text2 text="The Coffee House" />
                <div className="absolute content-stretch flex h-[19.988px] items-center left-[247px] top-[38px] w-[100.895px]" data-name="Container">
                  <Helper1 />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}