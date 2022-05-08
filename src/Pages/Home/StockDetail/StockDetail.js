import React from 'react';

const StockDetail = () => {
    return (
        <section>
            <div className='container'>
                <h1 class="d-flex justify-content-center mt-4 all-header-color text-warning"><strong>Benefits</strong></h1>
                <div className='row py-5'>
                    <div className="col-md-5">
                        <div className="d-flex align-items-center h-100">
                            <h2 className="text-muted me-5 mb-5 text-center benefits-header ms-4">
                                <span className="text-warning">TO
                                    STOCK YUR
                                    BIKES,</span>
                                you have to know about our more
                                benefits and utilities.
                            </h2>
                        </div>
                    </div>
                    <div class="col-md-7 pb-5">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="text-center my-3 border rounded-3 shadow p-3 bg-secondary">
                                    <h5 class="fw-bold pt-3 text-warning">Keep Bikes Safe</h5>
                                    <br />
                                    <strong class="text-info">We have safe area</strong>
                                    <p class="text-white py-2">The entire ware house is under control with cctv camera and security.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-center border rounded-3 shadow p-3 bg-secondary">
                                    <h5 class="fw-bold  pt-3 text-warning">Huge Place to Stock</h5>
                                    <br />
                                    <strong class="text-info">We have huge place</strong>
                                    <p class="text-white py-2">We have huge area to stock bikes.Come here to stock or buy.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-center my-3 border rounded-3 shadow p-3 bg-secondary">
                                    <h5 class="fw-bold  pt-3 text-warning">Bike Maintaining</h5>
                                    <br />
                                    <strong class="text-info">We have bike maintainer</strong>
                                    <p class="text-white py-2">We have many more bike maintainer to protect the bikes.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-center border rounded-3 shadow p-3 bg-secondary">
                                    <h5 class="fw-bold pt-3 text-warning">Bike Washroom</h5>
                                    <br />
                                    <strong class=" text-info">We have bike washroom</strong>
                                    <p class="text-white py-2">We have bike washroom and we wash bike regurlarly to safe the bikes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StockDetail;