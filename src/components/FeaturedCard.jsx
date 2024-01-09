import { featured } from "../data/Data";

function FeaturedCard() {
return (
<>
    <section className="featured-card">
    {featured.map((item, index) => (
        <article className="card" key={index}>
            <img className="service-img" src={item.cover} alt="icon about social media and web development" />
            <h4 className="service-name">{item.name}</h4>
            <p className="service-description">{item.description}</p>
        </article>
    ))}
    </section>
</>
);
}

export default FeaturedCard;
