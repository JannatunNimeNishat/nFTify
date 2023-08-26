
import baseInfo_btn_bg from '../assets/card/card_bg.png'
import baseInfo_icon from '../assets/card/baseInfo_icon.png'
import material_symbols from '../assets/card/material-symbols_token-outline.png'

const NFTpairRow = ({ nftSinglePair }) => {

    console.log(nftSinglePair);

    const { pairCreatedAt, dexId, pairAddress, baseToken, quoteToken, priceNative, priceUsd } = nftSinglePair;
    console.log(pairCreatedAt, typeof(pairCreatedAt));
    return (
        <div className='h-screen mt-[22px] flex gap-3'>
            {/* basic info */}
            <div className=" relative w-[230px] h-[220px]  bg-[#390554] rounded-[10px] text-white px-5 py-4">
                <h3 className="font-bold text-[18px]">Basic Info</h3>
                <p className="pt-2">Pair created at <span className="ml-3">#{pairCreatedAt.toString().slice(0,4)}</span></p>
                <p className="pt-1">Symbol <span className="ml-16">{baseToken?.symbol}</span></p>
                <p className="w-full  pt-1 ">Dex ID <span className=" ml-16">#{dexId.slice(0, 3)}</span></p>
                <p className="w-full  pt-1 ">Pair Address <span className="ml-7   ">#{pairAddress.slice(0, 4)}</span></p>
                <button className='absolute right-2 bottom-5 '>
                    <img src={baseInfo_btn_bg} alt="" />
                    <img className='ml-4 -mt-10' src={baseInfo_icon} alt="" />
                </button>
            </div>

            {/* base token */}
            <div className=" relative w-[230px] h-[220px]  bg-[#390554] rounded-[10px] text-white px-5 py-4">
                <h3 className="font-bold text-[18px]">Basic Token</h3>
                <p className="pt-2">Name <span className="ml-16">{baseToken?.name?.split(" ")[0]}</span></p>
                <p className="pt-2">Symbol <span className="ml-14">{baseToken?.symbol}</span></p>
                <p className="w-full  pt-2 ">Address <span className=" ml-14">#{baseToken?.address?.slice(0, 4)}</span></p>
                <button className='absolute right-4 bottom-6 '>
                    <img src={baseInfo_btn_bg} alt="" />
                    <img className='ml-4 -mt-10' src={material_symbols} alt="" />
                </button>
            </div>

            {/* Quote Token */}
            <div className=" relative w-[223px] h-[220px]  bg-[#390554] rounded-[10px] text-white px-5 py-4">
                <h3 className="font-bold text-[18px]">Quote Token </h3>
                <p className="pt-2">Name <span className="ml-16">{baseToken?.name?.split(" ")[0]}</span></p>
                <p className="pt-2">Symbol <span className="ml-14">{baseToken?.symbol}</span></p>
                <p className="w-full  pt-2 ">Address <span className=" ml-14">#{baseToken?.address?.slice(0, 4)}</span></p>
                <button className='absolute right-4 bottom-6 '>
                    <img src={baseInfo_btn_bg} alt="" />
                    <img className='ml-4 -mt-10' src={material_symbols} alt="" />
                </button>
            </div>
            {/* price */}
            <div className=" relative w-[223px] h-[220px]  bg-[#390554] rounded-[10px] text-white px-5 py-4">
                <h3 className="font-bold text-[18px]">Price </h3>
                <p className="pt-2">Price Native <span className="ml-5">ETH {priceNative?.slice(0, 4)}</span></p>
                <p className="pt-2">Price USD <span className="ml-8">{priceUsd?.slice(0, 4)}m</span></p>

                <button className='absolute right-4 bottom-6 '>
                    <img src={baseInfo_btn_bg} alt="" />
                    <img className='ml-4 -mt-10' src={material_symbols} alt="" />
                </button>
            </div>

        </div>
    );
};

export default NFTpairRow;