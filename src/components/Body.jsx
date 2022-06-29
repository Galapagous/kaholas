import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import arrow from "./Images/arrow.png"
import love from "./Images/love.png"
import forward from "./Images/forward.png"
// import { ArrowForwardIosIcon, FavoriteBorderIcon, ShortcutIcon } from "@mui/icons-material"

function Body() {
  const [ratingValue, setRatingValue] = useState(null)
  const [ratingValueB, setRatingValueB] = useState(null)
  return (
    <div className="p-2 justify-center items-center w-screen mt-20 ">
      <div className="flex gap-3">
        <div className="font-normal w-2/5 ">
          <p className="text-lg">In this 5day class, we will explore artist, Monet, Matisse, Van Gogh among others and then recreate paintings using crayon and watercolor.Student will have fun learning about the artist & creating their own art inspired by their work.</p>
          <div className="flex mt-4 items-center gap-2">
            <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="teacher" />
            <span className="text-lg text-blue-700">Kimber R Morseler</span>
          </div>
          <div className="flex w-auto items-center justify-center mt-4">
            {[...Array(5)].map((star, i) => {
              const rating = i + 1
              return (
                <label>
                  <input
                    className="hidden"
                    type="checkbox"
                    value={ratingValue}
                    onClick={() => {
                      setRatingValue(rating)
                    }}
                  />
                  <FaStar className="w-30" color={ratingValue >= rating ? "yellow" : "grey"} />
                </label>
              )
            })}
            <span className="ml-4 w-96 text-gray-600 text-xs">467 total review for this teacher</span>
          </div>
          <div className="flex w-auto items-center justify-center mt-2 mb-2">
            {[...Array(5)].map((star, i) => {
              const brating = i + 1
              return (
                <label>
                  <input
                    className="hidden"
                    type="checkbox"
                    value={ratingValueB}
                    onClick={() => {
                      setRatingValueB(brating)
                    }}
                  />
                  <FaStar className="w-30" color={ratingValueB >= brating ? "yellow" : "grey"} />
                </label>
              )
            })}
            <span className="ml-4 w-96 text-gray-600 text-xs">5 reviews for this class</span>
          </div>
          <span className="block text-gray-700 text-xl font-semibold mb-4">Completed by 21 learners</span>
          <div className="mt-4 flex items-center">
            <div>
              <span className="bg-indigo-600 text-white text-xl font-semibold p-3 rounded-3xl w-60 h-13 mr-4 flex items-center justify-center gap-1">
                See Class Schedule <img className="w-4 h-4 object-cover" src={arrow} alt="arrow" />
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 mr-6">
              <img className="w-5 h-5" src={love} alt="love" />
              <span className="text-indigo-600 font-bold">Save</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img className="w-5 h-5" src={forward} alt="forward" />
              <span className="text-indigo-600 font-bold">Share</span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-between gap-2 p-4">
            <img className="w-1/2 h-80 " src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=448&q=80" />
            <img className="w-1/2 h-80" src="https://images.unsplash.com/photo-1594136976553-38699ae9047c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHZhbiUyMGdvZ2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
