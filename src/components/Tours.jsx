import { tours_data } from '../data'
import TourArticle from './TourArticle';

const Tours = () => {
    return (
        <>
            <section className="section" id="tours">
                <div className="section-title">
                    <h2>featured <span>tours</span></h2>
                </div>

                <div className="section-center featured-center">
                    {
                        tours_data.map((info, idx) => (
                            <TourArticle info={info} idx={idx} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Tours