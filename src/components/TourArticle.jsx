const TourArticle = ({ idx, info }) => {
    return (
        <article className="tour-card" key={idx}>
            <div className="tour-img-container">
                <img src={info.img} className="tour-img" alt="" />
                <p className="tour-date">{info.date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{info.title}</h4>
                </div>
                <p>{info.content}</p>
                <div className="tour-footer">
                    <p>
                        <span><i className="fas fa-map"></i></span>{info.country}
                    </p>
                    <p>{info.days} days</p>
                    <p>from ${info.price}</p>
                </div>
            </div>
        </article>
    )
}

export default TourArticle