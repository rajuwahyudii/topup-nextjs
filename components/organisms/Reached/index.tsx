import React from 'react'
import ReachedItem from '../../molecules/ReachedItem'

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <ReachedItem angka={"290M+"} penjelasan={'Players Top Up'}/>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <ReachedItem angka='12.500' penjelasan='Games Available'/>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <ReachedItem angka='99,9%' penjelasan='Happy Players'/>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <ReachedItem angka='4.7' penjelasan='Rating Worldwide'/>
          </div>
        </div>
      </section>
  )
}
