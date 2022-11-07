import React from 'react';
import TanFormulaImage from "../../Assets/Img/HomeImage/TanFormulaImage.png"

const SourcesMap = () => {
    return (
        <>
            <section className='py-16'>
                <div className="container mx-auto">
                    <div className='flex justify-end'>
                        <img src={TanFormulaImage} alt="Tan Formula Image" />
                    </div>
                    <div>
                        <div className="grid grid-cols-6 gap-12">
                            <div>
                                <div>
                                    <div className="uppercase bg-[#410EAD]">
                                        <h6>Nfts</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SourcesMap