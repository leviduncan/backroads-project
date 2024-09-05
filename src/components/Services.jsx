import { services_data } from '../data'
import ServiceArticle from './ServiceArticle'

const Services = () => {
    return (
        <>
            <section className="section services" id="services">
                <div className="section-title">
                    <h2>our <span>services</span></h2>
                </div>
                <div className="section-center services-center">
                    {
                        services_data.map((info, idx) => (
                            <ServiceArticle info={info} idx={idx} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Services