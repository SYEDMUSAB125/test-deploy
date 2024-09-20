import React from 'react'

function ShowTemp(text) {
    // console.log("props coiming", text)
    return (
        <div classNameName="container my-5 color=black">
            <div className="row mb-2">
                <div className="col-md-4">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">Description</h5>
                            <p className="card-text">{text.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Temp</h5>
                            <p className="card-text">{text.temp-273}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Temp Min </h5>
                            <p className="card-text">{text.temp_min-273}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-4">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">Temp Max</h5>
                            <p className="card-text">{text.temp_max-273}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Humidity</h5>
                            <p className="card-text">{text.humidity}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Sunrise</h5>
                            <p className="card-text">{text.sunrise}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-4">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">Sunset</h5>
                            <p className="card-text">{text.sunset}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Country</h5>
                            <p className="card-text">{text.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShowTemp;