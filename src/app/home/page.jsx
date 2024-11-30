import React from 'react';
import '../styles/global.css';
import { FaArrowRight, FaArrowDown, FaUser, } from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";



function Home() {
    return (
        <div className='relative'>
            <div>
                <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-[1500px] w-full mt-0">
                    <header className='flex items-center justify-around'>
                        <div>
                            <h3 className='font-libre font-semibold text-4xl text-white mt-7'>MNTN</h3>
                        </div>
                        <nav className='flex items-center gap-5 mt-7'>
                            <h4 className='font-bold text-lg'>Equipment</h4>
                            <h4 className='font-bold text-lg'>About us</h4>
                            <h4 className='font-bold text-lg'>Blog</h4>
                        </nav>
                        <div className='flex items-center gap-2 mt-7'>
                            <FaUser />
                            <h4 className='text-base font-semibold'>Accaunt</h4>
                        </div>
                    </header>
                    <div className='mt-[128px] flex justify-center'>
                        <div>
                            <div className='text-[#FBD784] flex items-center gap-2'>
                                <MdOutlineHorizontalRule />
                                <h3 className='text-[#FBD784] text-lg font-extrabold'>A Hiking guide</h3>
                            </div>
                            <h1 className='font-libre text-7xl text-white mt-[32px] mb-[28px]'>Be prepared for the <br /> Mountains and beyond!</h1>
                            <button className='text-lg font-medium text-white flex items-center gap-2'>
                                <span>scroll down</span>
                                <FaArrowDown className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#060723] p-10 mx-auto flex justify-center'>
                <div>
                    <div>
                        <div className='flex items-center gap-[264px] relative mb-[200px]'>
                            <div>
                                <div className='flex items-center gap-2 text-[#FBD784] mb-7'>
                                    <MdOutlineHorizontalRule />
                                    <h4 className=' text-[#FBD784] text-lg	font-extrabold	'>Get Started</h4>
                                </div>
                                <h2 className='font-libre font-semibold text-5xl text-white'>What level of  hiker <br /> are you?</h2>
                                <p className='w-[632px] mt-[27px] text-white text-lg font-bold'>
                                    Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                                </p>
                                <button className='text-[#FBD784] text-lg flex items-center gap-2	font-extrabold	mt-7'>
                                    <span>read more</span>
                                    <FaArrowRight className='w-4 h-4' />
                                </button>
                            </div>
                            <div>
                                <img className='w-72 h-96' src='./first.png' alt="Image description" />
                            </div>
                            <div className='absolute top-0 left-0'>
                                <img className='' src="./one.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center gap-[264px] relative'>
                            <div>
                                <img className='w-72 h-96' src='./second.png' alt="Image description" />
                            </div>
                            <div>
                                <div className='flex items-center gap-2 text-[#FBD784] mb-7'>
                                    <MdOutlineHorizontalRule />
                                    <h4 className=' text-[#FBD784] text-lg	font-extrabold	'>Hiking Essentials</h4>
                                </div>
                                <h2 className='font-libre font-semibold text-5xl text-white'>Picking the right <br /> Hiking Gear!</h2>
                                <p className='w-[632px] mt-[27px] text-white text-lg font-bold'>
                                    The nice thing about beginning hiking is that you don’t really need any special gear,
                                    you can probably get away with things you already have. Let’s start with clothing.
                                    A typical mistake hiking beginners make is wearing jeans and regular clothes,
                                    which will get heavy and chafe if they get sweaty or wet.
                                </p>
                                <button className='text-[#FBD784] text-lg flex items-center gap-2	font-extrabold	mt-7'>
                                    <span>read more</span>
                                    <FaArrowRight className='w-4 h-4' />
                                </button>
                            </div>
                            <div className='absolute top-0 right-[600px]'>
                                <img className='' src="./two.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center gap-[264px] relative mt-[200px]'>
                            <div>
                                <div className='flex items-center gap-2 text-[#FBD784] mb-7'>
                                    <MdOutlineHorizontalRule />
                                    <h4 className=' text-[#FBD784] text-lg	font-extrabold'>where you go is the key</h4>
                                </div>
                                <h2 className='font-libre font-semibold text-5xl text-white'>Understand Your <br /> Map & Timing</h2>
                                <p className='w-[632px] mt-[27px] text-white text-lg font-bold'>
                                    To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
                                </p>
                                <button className='text-[#FBD784] text-lg flex items-center gap-2	font-extrabold	mt-7'>
                                    <span>read more</span>
                                    <FaArrowRight className='w-4 h-4' />
                                </button>
                            </div>
                            <div>
                                <img className='w-72 h-96' src='./third.png' alt="Image description" />
                            </div>
                            <div className='absolute bottom-[280px] left-0'>
                                <img className='' src="./three.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;