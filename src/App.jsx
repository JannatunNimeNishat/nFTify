import { useEffect, useState } from 'react';

import nFTify_1 from './assets/left_side_bar/NFTify_1.png';
import nFTify_logo from './assets/left_side_bar/NFTify.png';
import content_bg from './assets/contenet_area/content_bg.png';
import searchIcon from './assets/contenet_area/searchIcon.png';
import axios from 'axios';
import NFTrow from './components/NFTrow';
import NFTpairRow from './components/NFTpairRow';
import NFTsearchRow from './components/NFTsearchRow';
function App() {
  const [activeLink, setActiveLink] = useState(1);
  const [nftData, setNftData] = useState([]);
  const [nftSearchData, setNftSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  console.log(nftSearchData);

  useEffect(() => {
    setActiveLink(1);
    axios.get(`https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8`)
      .then(res => setNftData(res.data.pairs))
      .catch(error => console.log(error))
  }, [])


  const handleSearch = (e) => {
    e.preventDefault()
    setActiveLink(3);
    setNftData([]);
    axios.get(`https://api.dexscreener.com/latest/dex/search?q=${searchInput}`)
      .then(res => setNftSearchData(res.data.pairs))
      .catch(error => console.log(error))
  }




  const handleTokenAddress = (active) => {
    setActiveLink(active);
    setNftData([]);
    axios.get(`https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8`)
      .then(res => setNftData(res.data.pairs))
      .catch(error => console.log(error))

  }

  const handlePairAddress = (active) => {

    setActiveLink(active);
    setNftData([]);
    axios.get(`https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C`)
      .then(res => setNftData(res.data.pairs))
      .catch(error => console.log(error))

  }
  // console.log(nftData);
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle  " />
        <div className="drawer-content flex flex-col items-center justify-center">

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

          {/* Page content here */}


          {/* nft data container */}
          <div className={`w-full   bg-cover bg-center`} style={{ backgroundImage: `url(${content_bg})` }}>

            <div className="w-full h-full py-5  backdrop-brightness-50">

              {/* nav */}
              <div className='flex justify-between items-center pt-[20px] px-[65px]'>

                {/* search */}
                <div className="form-control">
                  <form onSubmit={handleSearch} className="input-group ">
                    {/* <form   className="input-group "> */}

                    <input type="text" placeholder="Search…" className="input input-bordered border border-gray-400 bg-transparent w-[435px] text-white "
                      onChange={(event) => setSearchInput(event.target.value)}

                    />
                    <button type='submit' className="btn btn-square bg-transparent border-gray-400 hover:bg-transparent">
                      <img src={searchIcon} alt="" />
                    </button>
                  </form>
                </div>

                <button className='px-10 py-2 text-white font-semibold rounded-[20px]  bg-gradient-to-r from-[#7C0F35] to-[#581266]'>Connect</button>

              </div>

              {/* main content */}
              {/* token */}
              <div className={`${activeLink === 1 ? '' : 'hidden'}  px-10 mt-10   `}>
                <h3 className='text-white text-[24px] font-semibold'>Token Address Results</h3>
                {/* cards */}
                <div>
                  {
                    nftData.slice(0, 2).map((nftSinglePair, index) => <NFTrow
                      key={index}
                      nftSinglePair={nftSinglePair}
                    />)
                  }
                </div>



              </div>

              {/* pair  */}
              <div className={`${activeLink === 2 ? '' : 'hidden'}  px-10 mt-10   `}>
                <h3 className='text-white text-[24px] font-semibold'>Pair Results</h3>
                {/* cards */}
                <div>
                  {
                    nftData.slice(0, 2).map((nftSinglePair, index) => <NFTpairRow
                      key={index}
                      nftSinglePair={nftSinglePair}
                    />)
                  }
                </div>



              </div>

              {/* search result */}
              <div className={`${activeLink === 3 ? '' : 'hidden'}  px-10 mt-10   `}>
                <h3 className='text-white text-[24px] font-semibold'>{searchInput} Search Results</h3>
                {/* cards */}
                <div>
                  {
                    nftSearchData.length !== 0 ?

                      nftSearchData.slice(0, 9).map((nftSinglePair, index) => <NFTsearchRow
                        key={index}
                        nftSinglePair={nftSinglePair}
                      />)
                      :
                      <div className='h-[80vh] mt-[22px] flex justify-center items-center'>
                        <h3 className='text-4xl font-bold text-white'>No data found!</h3>

                      </div>
                  }
                </div>



              </div>




            </div>


          </div>





        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu py-4 w-80 min-h-full bg-[#292929] text-white">
            {/* Sidebar content here */}


            <div className='flex justify-start items-center gap-5'>
              <img className='h-[32.33px]' src={nFTify_1} alt="" />
              <img src={nFTify_logo} alt="" />
            </div>

            <li className={`mt-[17px]  h-[65px] flex justify-center ${activeLink === 1 ? 'bg-[#F30050] font-semibold' : ''}`} onClick={() => handleTokenAddress(1)}><a className='hover:text-white text-[20px]'>Token Address</a></li>

            <li className={`mt-[10px] h-[65px] flex justify-center ${activeLink === 2 ? 'bg-[#F30050] font-semibold' : ''}`} onClick={() => handlePairAddress(2)}><a className='hover:text-white text-[20px]'>Pair Address</a></li>


          </ul>

        </div>
      </div>
    </>
  )
}

export default App
