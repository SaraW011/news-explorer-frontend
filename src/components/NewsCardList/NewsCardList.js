import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <section className="cards-list">
      <div className="cards-list__wrapper">
        <div className="cards-list__heading">Search Results</div>
        <ul className="cards-list__container">
          <NewsCard></NewsCard>
        </ul>
      </div>
      <button className="cards-list__btn">Show more</button>
    </section>
  );
}

export default NewsCardList;