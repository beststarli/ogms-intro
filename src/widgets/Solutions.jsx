import SectionHeading from "./SectionHeading";
import Image1 from "../assets/model_new.png";
import Image2 from "../assets/data.png";
import Image3 from "../assets/computableModel.png";
import chenmin from "../assets/chenmin.png";

function Solutions() {
  return (
    <div>
      <SectionHeading title="主要功能"/>
      <div className="grid lg:grid-cols-2 mt-20 gap-20">
        <div>
          <h3 className="mt-7 text-[32px] font-fold">共享   复用   集成</h3>
          <p className="mt-4 text-gray-500">将模型、数据及计算资源作为服务资源进行共享</p>
          <p className="mt-2 text-gray-500">在网络环境下重用模型、数据及计算资源</p>
          <p className="mt-2 mb-8 text-gray-500">集成模型、数据及计算资源以解决复杂地理问题</p>
          <ul className="grid gap-3">
            {[1, 2, 3, 4].map((v) => (
              <li className={`p-5 justify-between rounded border border-zinc-100 ${v === 1 && "bg-zinc-100"}`} key={v}>
                <p className="text-lg font-bold">模型资源库</p>
                <div className="flex justify-between relative">
                  <p className="text-lg leading-7 mt-1">该资源库收集模型资源以构建“模型字典”，其中所有的模型(也包括相关的工具、算法等)都以统一的方式组织起来。用户可以从中发现模型的详细信息、概念和逻辑描述、可计算资源、开发历史以及应用程序。该资源库在获得作者的许可后发布模型资源。</p>
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 ml-8 relative -top-2">
                    <g filter="url(#filter0_d_0_125)">
                      <rect x="3" y="2" width="32" height="32" rx="16" fill="white"/>
                    </g>
                    <path d="M24.953 16.2892C24.8715 16.1119 24.6942 15.9983 24.499 15.9982H19.14L19.984 12.6192C20.0391 12.3947 19.9332 12.1618 19.7278 12.0557C19.5224 11.9497 19.2711 11.9983 19.12 12.1732L13.12 19.1732C12.9933 19.3214 12.9643 19.5298 13.0457 19.7069C13.1271 19.8841 13.304 19.9978 13.499 19.9982H18.858L18.014 23.3772C17.9581 23.6021 18.0641 23.836 18.27 23.9422C18.3407 23.9792 18.4193 23.9985 18.499 23.9982C18.6448 23.9979 18.7833 23.934 18.878 23.8232L24.878 16.8232C25.0051 16.6751 25.0344 16.4666 24.953 16.2892Z" fill="#191919"/>
                    <defs>
                      <filter id="filter0_d_0_125" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.16 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_125"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_125" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-20">
          <img src={Image1} alt="" className="w-full" />
          <img src={Image2} alt="" className="w-full" />
          <img src={Image3} alt="" className="w-full" />
        </div>
      </div>
      <div className='grid justify-items-center border-2 rounded px-14 mt-28'>
        <img alt="" src={chenmin} className='w-24 h-24 rounded-full bg-gray-400 -translate-y-1/2'/>
        <p className='mt-5 mb-4 text-xl font-medium'>
          &quot;我非常信任这个平台&quot;
        </p>
        <p className='text-lg font-bold'>陈旻</p>
        <p className='text-gray-500 mb-8'>
          南京师范大学地理科学学院教授
          <a href="#" className='text-blue-500'>@NJNU</a>
        </p>
      </div>
    </div>
  );
}

export default Solutions;