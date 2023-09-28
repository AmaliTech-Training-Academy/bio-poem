import { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { searchPoem } from '../store/searchSlice';
import { useAppDispatch, useAppSelector  } from '../store/store';
import { setPoemSingleData, setShowModal } from '../store/poemSlice'
import { addRecentSearch } from '../store/recentSearchSlice';
import { data } from '../store/searchSlice';
import { PoemData } from '../store/searchSlice';
import profile from '../assets/user.png'
import { Poem } from './Carousel2';


export interface poemArr {
    poems: data[]
}

const SearchPoem = () => {
  const [searchedPoem, setSearchedPoem] = useState<string>('')
  const [searchResults, setSearchResults] = useState<any>([])
  // const [fetchPoems, setFetchPoems] = useState<data[]>([])
  const [displayedDivs, setDisplayedDivs] = useState(5)
  const [showMore, setShowMore] = useState<boolean>(true)


  const searchResponse:PoemData = useAppSelector((state) => state.search.response);
  const darkMode = useAppSelector((state) => state.darkMode.toggle)
  const openSearch = useAppSelector((state)=>state.search.openSearch)  

  const dispatch = useAppDispatch()

 
  // console.log(searchResponse);
  
  const handleShowSinglePoem = (poem: Poem) => {
    console.log("Poem", poem);  
    dispatch(setShowModal());
    dispatch(setPoemSingleData(poem)) 
  };

  useEffect(() => {
    dispatch(searchPoem())
    // setFetchPoems(searchResponse.poems)
    setDisplayedDivs(5)
    dispatch(addRecentSearch(searchResults))
  }, [dispatch, searchedPoem]);
  

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPoem( e.target.value.toLowerCase()) 
    // localStorage.setItem('searchedPoem', searchedPoem)
    const filteredResults = searchResponse.poems.filter((ele:any)=>{
    const fullName = `${ele.firstName} ${ele.lastName}`.toLowerCase()
    return fullName.includes(searchedPoem)      
  }) ;

    setSearchResults(filteredResults)
  };

  const filteredResults = searchResponse.poems.filter((poem) => 
  poem.firstName.toLowerCase().includes(searchedPoem) 
  || poem.lastName.toLowerCase().includes(searchedPoem))

  const searchResultsString = JSON.stringify(searchResults)
    localStorage.setItem('recentSearch', searchResultsString)

    const recentSearch = localStorage.getItem('recentSearch');
    console.log(recentSearch);
    

  // useEffect(() => {
  //   if (recentSearch) {
  //     setSearchedPoem(recentSearch);
  //     const filteredResults = searchResponse.poems.filter((ele: any) => {
  //       const fullName = `${ele.firstName} ${ele.lastName}`.toLowerCase();
  //       return fullName.includes(recentSearch);
  //     });
  //     setSearchResults(filteredResults);
  //   }
  // }, [searchResponse]);
  

  
  const removeItem = (id:string) =>{
    const updatedPoems = searchResponse.poems?.filter((poem:any)=>poem._id !==id)
    // setFetchPoems(updatedPoems)
    setDisplayedDivs(displayedDivs - 1)
  };

  const removeSearchItem = (id:string) => {
    const updatedPoems = searchResults.filter((poem:data)=>poem._id !==id)
    setSearchResults(updatedPoems)
    setDisplayedDivs(displayedDivs - 1)
  };

  const seeMore = () =>{
    setDisplayedDivs(searchResponse.poems.length)
    setShowMore(false)
  };


  const  clearAll = () => setDisplayedDivs(0);

  
  return (
    <div className="top-0 h-screen border-r-[0.5px] flex flex-col items-center text-[#343434] z-10 pt-14"
    style={openSearch ? {width: '25%'} : {width: 0}}>
      <div
        className={`flex items-center border border-[#D9D9D9] w-11/12 rounded-lg py-3 pl-3.5 mb-9 ${
          darkMode ? 'bg-[#fff]' : ''
        }`}
      >
        <BiSearchAlt2 style={{ color: '#8E8D8D' }} className="mr-4 cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none "
          value={searchedPoem}
          onChange={handleSearch}
        />
      </div>

      <div>
        { searchedPoem.length > 0 ? filteredResults.map(result => 
        <div className="flex gap-x-28 mb-[30px] px-3.5 w-full justify-between" key={result._id}>
              <div className="flex items-center">
                <img src={result.user.profileImage? result.user.profileImage : profile} alt="profile" className="rounded-[50%] w-[55px] h-[55px]" />
                <p className={`ml-5 font-medium ${darkMode ? 'text-[#fff]' : ''}`}>
                  {result.firstName} {result.lastName}
                </p>
              </div>

              <div className="flex items-center ">
                <button className="text-white bg-orange-500 px-2.5 rounded-r-full rounded-l-full font-medium cursor-pointer" onClick={()=>dispatch(setShowModal())}>
                  View
                </button>
                <div className="ml-5 bg-[#D9D9D9] rounded-full  cursor-pointer">
                  <MdClose  onClick={()=>removeItem(result._id)}/>
                </div>
              </div>
          </div>) : undefined }
      </div>

      <div className={`flex gap-x-56 px-2.5 py-3 border-y-[0.5px] border-[#D9D9D9] mb-[40px] w-full justify-between`}>
        <p className={`text-base ${darkMode ? 'text-[#fff]' : ''}`}>Recent</p>
        {searchResults.length !== 0 && displayedDivs !== 0 ? (
          <p className="text-[#F06A30] w-max cursor-pointer" onClick={clearAll} >Clear all</p>
        ) : (
          ''
        )}
      </div>

      {/* Search results */}
      { displayedDivs === 0  || (searchResults.length === 0) ? (
        <p className="text-[#F06A30] mt-[207px]">No Results...</p>
      ) : (
        <>
          {searchResults.length !== 0 ? (
          <>
            {searchedPoem.length === 0 && searchResults.slice(0,displayedDivs).map((ele:Poem) => (
            <div className="flex gap-x-28 mb-[30px] px-3.5 w-full justify-between" key={ele._id}>
              <div className="flex items-center">
                <img src={ele.user.profileImage? ele.user.profileImage : profile} alt="profile" className="rounded-[50%] w-[55px] h-[55px]" />
                <p className={`ml-5 font-medium ${darkMode ? 'text-[#fff]' : ''}`}>
                  {ele.firstName} {ele.lastName}
                </p>
              </div>

              <div className="flex items-center ">
                <button className="text-white bg-orange-500 px-2.5 rounded-r-full rounded-l-full font-medium cursor-pointer" onClick={()=>dispatch(setShowModal())}>
                  View
                </button>
                <div className="ml-5 bg-[#D9D9D9] rounded-full  cursor-pointer">
                  <MdClose  onClick={()=>removeItem(ele._id)}/>
                </div>
              </div>
            </div>
          ))}
          {showMore && <p className="text-[#F06A30] border-b-[1px] border-[#F06A30] cursor-pointer" onClick={seeMore}>See more</p>}
          </>
          )
          :(
            <>
              {searchResults.slice(0,displayedDivs).map((ele:Poem) => (
            <div className="flex gap-x-28 mb-[30px] px-3.5 w-full justify-between" key={ele._id}>
              <div className="flex items-center">
                <img src={ele.user.profileImage ? ele.user.profileImage : profile} alt="profile" className="rounded-[50%] w-[55px] h-[55px]" />
                <p className={`ml-5 font-medium ${darkMode ? 'text-[#fff]' : ''}`}>
                  {ele.firstName} {ele.lastName}
                </p>
              </div>

              <div className="flex items-center ">
                <button className="text-white bg-orange-500 px-2.5 rounded-r-full rounded-l-full font-medium cursor-pointer" onClick={() => handleShowSinglePoem(ele)}>
                  View
                </button>
                <div className="ml-5 bg-[#D9D9D9] rounded-full  cursor-pointer">
                  <MdClose  onClick={()=>removeSearchItem(ele._id)}/>
                </div>
              </div>
            </div>
          ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPoem;
