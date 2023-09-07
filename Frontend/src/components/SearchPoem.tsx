import { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import person from '../assets/searchImage.png';
import { useDispatch, useSelector } from 'react-redux';
import { searchPoem } from '../store/searchSlice';
import { RootState } from '../store/store';

const SearchPoem = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.toggle);
  const [searchedPoem, setSearchedPoem] = useState<string>('');
  const [searchResults, setSearchResults] = useState([]); // Store filtered results
  const searchResponse = useSelector((state: RootState) => state.search.response);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchPoem());
    // setSearchResults(searchResponse.poems); // Initialize with all data
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    // Filter the search results based on the current search term
    // const filteredResults = searchResponse.poems.filter((ele) => {
    //   const fullName = `${ele.firstName} ${ele.lastName}`.toLowerCase();
    //   return fullName.includes(searchTerm);
    // });

    // setSearchedPoem(searchTerm);
    // setSearchResults(filteredResults);
  };

  return (
    <div className="border-[#D9D9D9] border-r-[0.5px] flex flex-col items-center text-[#343434]">
      <div
        className={`flex items-center border border-[#D9D9D9] rounded-lg py-3 pl-3.5 w-[23.438rem] mt-[53px] mb-[40px] ${
          darkMode ? 'bg-[#fff]' : ''
        }`}
      >
        <BiSearchAlt2 style={{ color: '#8E8D8D' }} className="mr-4 cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none"
          value={searchedPoem}
          onChange={handleSearch}
        />
      </div>
      <div className={`flex gap-x-56 px-2.5 py-3 border-y-[0.5px] border-[#D9D9D9] mb-[40px] w-full`}>
        <p className={`text-base ${darkMode ? 'text-[#fff]' : ''}`}>Recent</p>
        {searchResults.length !== 0 ? (
          <p className="text-[#F06A30] w-max cursor-pointer">Clear all</p>
        ) : (
          ''
        )}
      </div>

      {/* Search results */}
      {searchResults.length === 0 ? (
        <p className="text-[#F06A30] mt-[207px]">No Results...</p>
      ) : (
        <>
          {searchResults.slice(0, 5).map((ele) => (
            <div className="flex gap-x-28 mb-[30px]" key={ele.id}>
              <div className="flex items-center">
                <img src={person} alt="person" className="rounded-[50%] w-[55px] h-[55px]" />
                <p className={`ml-5 font-medium ${darkMode ? 'text-[#fff]' : ''}`}>
                  {ele.firstName} {ele.lastName}
                </p>
              </div>

              <div className="flex items-center ">
                <button className="text-white bg-orange-500 px-2.5 rounded-r-full rounded-l-full font-medium cursor-pointer">
                  View
                </button>
                <div className="ml-5 bg-[#D9D9D9] rounded-full  cursor-pointer">
                  <MdClose />
                </div>
              </div>
            </div>
          ))}
          <p className="text-[#F06A30] border-b-[1px] border-[#F06A30] cursor-pointer">See more</p>
        </>
      )}
    </div>
  );
};

export default SearchPoem;
