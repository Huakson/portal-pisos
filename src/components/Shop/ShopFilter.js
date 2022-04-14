import { Container, Row, Col } from "react-bootstrap";
import {
  getIndividualCategories,
  getIndividualColors,
  getProductsIndividualSizes,
  getIndividualTags,
  setActiveSort
} from "../../lib/product";

const ShopFilter = ({ products, getSortParams }) => {
  const categories = getIndividualCategories(products);
  const colors = getIndividualColors(products);
  const sizes = getProductsIndividualSizes(products);
  const tags = getIndividualTags(products);

  return (
    <div className="shop-advance-filter">
      <Container className="space-pt--50 space-pb--50">
        <Row>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Categorias</h2>

              {categories.length > 0 ? (
                <ul className="single-filter-widget__list">
                  <li>
                    <button
                      onClick={(e) => {
                        getSortParams("category", "");
                        setActiveSort(e);
                      }}
                    >
                      Todas as categorias
                    </button>
                  </li>
                  {categories.map((category, i) => {
                    return (
                      <li key={i}>
                        <button
                          onClick={(e) => {
                            getSortParams("category", category);
                            setActiveSort(e);
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "Nenhuma categoria definida"
              )}
            </div>
          </Col>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Dimensão</h2>
              {sizes.length > 0 ? (
                <ul className="single-filter-widget__list single-filter-widget__list--size">
                  <li>
                    <button
                      onClick={(e) => {
                        getSortParams("size", "");
                        setActiveSort(e);
                      }}
                    >
                      Todos os tamanhos
                    </button>
                  </li>
                  {sizes.map((size, i) => {
                    return (
                      <li key={i}>
                        <button
                          onClick={(e) => {
                            getSortParams("size", size);
                            setActiveSort(e);
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "Nenhum tamanho definido"
              )}
            </div>
          </Col>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Tags</h2>
              {tags.length > 0 ? (
                <div className="tag-container">
                  {tags.map((tag, i) => {
                    return (
                      <button
                        key={i}
                        onClick={(e) => {
                          getSortParams("tag", tag);
                          setActiveSort(e);
                        }}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              ) : (
                "Nenhuma tag definida"
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopFilter;
