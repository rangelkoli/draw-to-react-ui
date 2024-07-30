import React from "react";
import parse from "html-react-parser";

const Profile = () => {
  const code = `<div class="w-full bg-gray-800 p-4 rounded-lg shadow-md">
    <h1 class="text-white text-2xl font-bold mb-2">Hello</h1>
    <div class="bg-gray-700 p-4 rounded-lg">
      <p class="text-gray-300 text-lg">this is a blog post...</p>
    </div>
    <div class="flex mt-4 gap-2">
      <button class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">like</button>
      <button class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">comment</button>
      <button class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">share</button>
    </div>
  </div>`;

  return (
    <div>
      <div className='flex flex-wrap -mx-3 overflow-hidden justify-center items-center'>
        <div className='flex px-3 py-3 '>
          <div className='max-w-lg rounded overflow-hidden shadow-lg bg-indigo-600'>
            <div>{parse(code)}</div>
            <div className='px-6 py-4'>
              {/* <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p> */}
            </div>
            <div className='px-6 py-4'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
