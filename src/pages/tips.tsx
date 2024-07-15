import React from 'react'
import TipCards from '../componenets/tipCards'

interface Props {}

function Tips(props: Props) {
    const posts = [
        {
          tip: '50% off on all the seeds at Plantagen Brommaplan',
          postedBy: 'Anna',
          postedOn: '15/07/2024',
        },
        {
            tip: 'Egg shells are good fertilizer for baby tomato plants.',
            postedBy: 'Supipi',
            postedOn: '10/06/2024',
          },
          {
            tip: '2 for 1 offer for soil at Blomstalandet and Ica maxi Solna',
            postedBy: 'Ricky',
            postedOn: '05/07/2023',
          }
    ]


    return (
        <div className="h-full w-full bg-custom-primary">
        <div className="px-6 py-4">
            <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">Let's grow together</h1>
            {posts.map((post, index) => (
        <TipCards
          key={index}
          tip={post.tip}
          postedBy={post.postedBy}
          postedOn={post.postedOn}
        />
      ))}
            </div>
            <div className="text-center">
       <button className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl">Post</button>

      </div>
            </div>
    )
}

export default Tips
