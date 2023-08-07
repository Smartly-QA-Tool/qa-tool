import React from 'react'
import { useNavigate } from 'react-router-dom'

import { toolSelection } from '../../constants/options'

function Main() {
  const navigate = useNavigate();

  const handleRedirect = (redirect) => navigate(redirect)

  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <dialog className="modal" open={true}>
        <div id="modal" method="dialog" className="modal-box w-11/12 max-w-5xl">
          <div className="hero min-h-fit">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h2 className="text-4xl font-bold">QA Tools</h2>
                <p className="py-6">What do you want to do today?</p>
              </div>
            </div>
          </div>
          <div className="flex">
            {
              toolSelection?.map((data, index) => (
                <React.Fragment key={index}>
                  <div className={`card w-[50%] before:!bg-accent bg-base-100 shadow-xl image-full ${data.disabled ? 'grayscale' : 'hover:scale-105 transition duration-300 ease-in-out'}`}>
                    <figure><img src={data.banner} alt={data.title} /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-white">{data.title}</h2>
                      <p className="text-gray-200">{data.description}</p>
                      <div className={`card-actions justify-end ${data.button === '' ? 'hidden' : 'visible'}`}>
                        <button className="btn btn-neutral capitalize" onClick={() => handleRedirect(data.redirect)}>
                          {data.button}
                          <svg  className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {
                    toolSelection.length !== index + 1 && (
                      <div className="divider lg:divider-horizontal opacity-0"></div>
                    )
                  }
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </dialog>
    </div>
  )
}

export {
  Main as default
}

