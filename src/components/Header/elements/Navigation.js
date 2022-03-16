import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward, IoIosCart, IoIosHeartEmpty, IoIosSearch, IoMdPerson } from "react-icons/io";
const Navigation = () => {
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

              <Col lg={1} className="icon-space">
                <button
                  onClick={() => {
                    setOffCanvasWishlistActive(true);
                    document
                      .querySelector("body")
                      .classList.add("overflow-hidden");
                  }}
                >
                  <div className="d-flex justify-content-center">

                    {/* <IoIosHeartEmpty />
                {wishlistItems.length >= 1 ? (
                  <span className="count">
                    {wishlistItems.length ? wishlistItems.length : ""}
                  </span>
                ) : (
                  ""
                )} */}
                    <IoIosHeartEmpty />
                    <p>Lista de favoritos</p>

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
                    <IoIosCart />
                    {/* {cartItems.length >= 1 ? (
                    <span className="count">
                      {cartItems.length ? cartItems.length : ""}
                    </span>
                  ) : (
                    ""
                  )} */}

                    <p>Meu carrinho</p>
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

    </nav>
  );
};

export default Navigation;
