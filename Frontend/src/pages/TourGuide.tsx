import Header from "../components/Header"
import SideBar from "../components/SideBar"
import { useAppSelector } from '../store/store'
import homepage1 from '../assets/Homepage1.png'
import create1 from '../assets/CreateBiopoem1.png'
import create2 from '../assets/CreateBiopoem2.png'
import choice1 from '../assets/color1.png'
import choice2 from '../assets/color-pattern11.png'
import choice3 from '../assets/preview11.png'
import submit from '../assets/Submit11.png'
import SearchPoem from "../components/SearchPoem"


export const TourGuide = () => {

    const openSearch = useAppSelector((state)=>state.search.openSearch);

    const guideStyle = {
        borderRadius: "32px",
        background: "var(--color-preview-bg, #FEF6EE)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.16), 0px 4px 20px 0px rgba(0, 0, 0, 0.08)"
    };

  return (
    <div className="flex">
        <SideBar/>
        {/* Main */}
        {openSearch && <SearchPoem/>}
        <div className='overflow-hidden' style={openSearch ? {width: '65%'} : {width: '85%', overflow: 'hidden'}}>
            <Header text1="Tour Guide"/>
            <div className="mt-12 xl:px-32 pb-24 text-left w-11/12 mx-auto">
                <div className="font-semibold text-3xl">How to create a poem</div>
                <div className="mb-8 text-[#667085] mt-4">Hey there! Have you ever tried creating a bio poem about yourself? It's a fun way to express yourself and connect with friends who share similar interests. Give it a try!</div>
                {/* Steps */}
                <div className="flex flex-col">
                    {/* Step 1 */}
                    <div style={guideStyle} className="px-16 py-4">
                        <div className="2xl:w-8/12 2xl:mx-auto">
                            <div className="mb-6">1. Click on the create poem tab on the homepage</div>
                            <img src={homepage1} className="m-0" />
                        </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div style={guideStyle} className="px-16 py-4 mt-24">
                        <div className="2xl:w-8/12 2xl:mx-auto">
                            <div className="mb-6">2. Fill out the question on the create poem  and click on next for the follow up questions</div>
                            <img src={create1} className="m-0" />
                        </div>
                    </div>

                    {/* Section */}
                    <div className="mt-10">
                        <div className="font-semibold text-3xl">Fonts styles and color selection</div>
                        <div className="mb-8 text-[#667085] mt-4">From this section you get to explore different font styles to apply to your poem  text and also choose a color  that you prefer</div>
                    </div>

                    {/* step 3 */}
                <div style={guideStyle} className="px-16 py-4 mt-10">
                    <div className="2xl:w-8/12 2xl:mx-auto">
                        <div className="mb-6">3. Select a font type from the font styles</div>
                        <img src={create2} className="m-0" />
                    </div>
                </div>

                {/* Step 4 */}
                <div style={guideStyle} className="px-16 py-4 mt-14">
                    <div className="2xl:w-8/12 2xl:mx-auto">
                        <div className="mb-6">4. Select a color from the color pallet to apply to text.</div>
                        <img src={choice1} className="m-0" />
                    </div>
                </div>
                
                {/* Section */}
                <div className="mt-10">
                    <div className="font-semibold text-3xl">Background theme for poem cards</div>
                    <div className="mb-8 text-[#667085] mt-4">From this section you get to choose from wide range of colors and patterns to apply to your poem cards.</div>
                </div>
                {/* Step 5 */}
                <div style={guideStyle} className="px-16 py-4 mt-10">
                    <div className="2xl:w-8/12 2xl:mx-auto">
                        <div className="mb-6">5. Select a solid color or pattern for your poem card</div>
                        <img src={choice2} className="m-0" />
                    </div>
                </div>

                {/* Section */}
                <div className="mt-10">
                    <div className="font-semibold text-3xl">Preview Poem</div>
                    <div className="mb-8 text-[#667085] mt-4">From this section you get to preview your poem card to see how it finally looks like.</div>
                </div>

                {/* Step 6 */}
                <div style={guideStyle} className="px-16 py-4 mt-10">
                    <div className="2xl:w-8/12 2xl:mx-auto">
                        <div className="mb-6">6. Select a solid color or pattern for your poem card.</div>
                        <img src={choice3} className="m-0" />
                    </div>
                </div>

                  {/* Section */}
                <div className="mt-10">
                    <div className="font-semibold text-3xl">Poem submission</div>
                    <div className="mb-8 text-[#667085] mt-4">This is the final step to share your poem to the world, congratulations.</div>
                </div>

                <div style={guideStyle} className="px-16 py-4 mt-10">
                    <div className="2xl:w-8/12 2xl:mx-auto">
                        <div className="mb-6">7. Click on the submit button to create a poem</div>
                        <img src={submit} className="m-0" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
