import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward, IoIosCart, IoIosHeartEmpty, IoIosSearch, IoMdPerson } from "react-icons/io";
import { connect } from "react-redux";
import AboutOverlay from "./AboutOverlay";
import CartOverlay from "./CartOverlay";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";
import WishlistOverlay from "./WishlistOverlay";
const Navigation = (
  { cartItems, wishlistItems }
) => {

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasAboutActive, setOffCanvasAboutActive] = useState(false);
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
  const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );

  return (
    <nav style={{ boxSizing: "content-box", marginTop: "20px" }} className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul className="d-flex align-items-start">
        <li style={{ width: "100%" }}>
          <div className="icons-header-top">
            {/* search widget */}
            <Row>

              <Col lg={7}>
                <div className="search-widget">
                  <form>
                    <input type="search" placeholder="Digite aqui..." />
                    <button type="button" className="search-bar">
                      <IoIosSearch className="icon" />
                    </button>
                  </form>
                </div>
              </Col>

              <Col lg={1} className="icon-space">
                <button
                  href="/other/login-register"
                  as={process.env.PUBLIC_URL + "/other/login-register"}
                >
                  <div className="d-flex justify-content-center" style={{ cursor: "pointer" }}>
                    <a>
                      <IoMdPerson />
                    </a>

                    <p>Entrar minha conta</p>

                  </div>
                </button>
              </Col>

              <Col lg={1} className="icon-space" style={{ marginRight: "60px" }}>
                <button
                  onClick={() => {
                    setOffCanvasWishlistActive(true);
                    document
                      .querySelector("body")
                      .classList.add("overflow-hidden");
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <div>
                      <IoIosHeartEmpty />
                      {wishlistItems.length >= 1 ? (
                        <span className="count">
                          {wishlistItems.length ? wishlistItems.length : ""}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="margin-l">Lista de favoritos</p>

                  </div>

                </button>
              </Col>

              <Col lg={1} className="icon-space">
                <button
                  onClick={() => {
                    setOffCanvasCartActive(true);
                    document
                      .querySelector("body")
                      .classList.add("overflow-hidden");
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <div>
                      <IoIosCart />
                      {cartItems.length >= 1 ? (
                        <span className="count">
                          {cartItems.length ? cartItems.length : ""}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="margin-l">Meu carrinho</p>
                  </div>
                </button>
              </Col>

            </Row>
          </div>
        </li>
      </ul>

      <ul className="d-flex align-items-start">
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a className="d-flex align-items-start">
              <p>Ofertas</p>
            </a>
          </Link>
        </li>
        <li>
          <Link className="d-flex align-items-baseline" href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Porcelanatos</a>
          </Link>
        </li>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Pisos Cerâmicos</a>
          </Link>
        </li>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Pisos Laminados</a>
          </Link>
        </li>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Pisos de Madeira</a>
          </Link>
        </li>
      </ul>

      {/* cart overlay */}
      <CartOverlay
        activeStatus={offCanvasCartActive}
        getActiveStatus={setOffCanvasCartActive}
      />

      {/* wishlist overlay */}
      <WishlistOverlay
        activeStatus={offCanvasWishlistActive}
        getActiveStatus={setOffCanvasWishlistActive}
      />
      {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />

    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

export default connect(mapStateToProps)(Navigation);
