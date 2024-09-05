const ServiceArticle = ({ info, idx }) => {
    return (
        <article className="service" key={idx}>
            <span className="service-icon"><i className={info.ico}></i></span>
            <div className="service-info">
                <h4 className="service-title">{info.title}</h4>
                <p className="service-text">{info.content}</p>
            </div>
        </article>
    )
}

export default ServiceArticle