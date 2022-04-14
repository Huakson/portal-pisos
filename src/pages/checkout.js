import { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDiscountPrice } from "../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutFive, LayoutTwo } from "../components/Layout";
import { BreadcrumbOne } from "../components/Breadcrumb";

const Checkout = ({ cartItems }) => {
  let cartTotalPrice = 0;

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutFive>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Checkout"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
      </BreadcrumbOne>
      <div className="checkout-area space-mt--r130 space-mb--r130">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col>
                <div className="lezada-form">
                  <form className="checkout-form">
                    <div className="row row-40">
                      <div className="col-lg-7 space-mb--20">
                        {/* Billing Address */}
                        <div id="billing-form" className="space-mb--40">
                          <h4 className="checkout-title">Endereço completo</h4>
                          <div className="row">
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Nome*</label>
                              <input type="text" placeholder="nome" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Ultimo nome*</label>
                              <input type="text" placeholder="ultimo nome" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Email*</label>
                              <input type="email" placeholder="Email" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Telefone*</label>
                              <input type="text" placeholder="telefone" />
                            </div>
                            <div className="col-12 space-mb--20">
                              <label>Endereço*</label>
                              <input type="text" placeholder="endereço" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Cidade*</label>
                              <input type="text" placeholder="cidade" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Estado*</label>
                              <input type="text" placeholder="estado" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>CEP*</label>
                              <input type="text" placeholder="cep" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="row">
                          {/* Cart Total */}
                          <div className="col-12 space-mb--50">
                            <h4 className="checkout-title">Total da compra</h4>
                            <div className="checkout-cart-total">
                              <h4>
                                Produtos <span>Total</span>
                              </h4>
                              <ul>
                                {cartItems.map((product, i) => {
                                  const discountedPrice = getDiscountPrice(
                                    product.price,
                                    product.discount
                                  ).toFixed(2);

                                  cartTotalPrice +=
                                    discountedPrice * product.quantity;
                                  return (
                                    <li key={i}>
                                      {product.name} X {product.quantity}{" "}
                                      <span>R$: {discountedPrice}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                              <p>
                                Preço{" "}
                                <span>R$: {cartTotalPrice.toFixed(2)}</span>
                              </p>
                              <p>
                                Frete <span>R$: 00.00</span>
                              </p>
                              <h4>
                                Total{" "}
                                <span>R$: {cartTotalPrice.toFixed(2)}</span>
                              </h4>
                            </div>
                          </div>
                            {/* Payment Method */}
                            <div className="col-12">
                            <h4 className="checkout-title">Formas de envio</h4>
                            <div className="checkout-payment-method">
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_check"
                                  name="payment-method"
                                  defaultValue="check"
                                />
                                <label htmlFor="payment_check">
                                  Retirar na loja
                                </label>
                              </div>
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_bank"
                                  name="payment-method"
                                  defaultValue="bank"
                                />
                                <label htmlFor="payment_bank">
                                  Receber em casa
                                </label>
                              </div>
                            </div>
                                <br />
                          </div>
                          {/* Payment Method */}
                          <div className="col-12">
                            <h4 className="checkout-title">Metodos de pagamento</h4>
                            <div className="checkout-payment-method">
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_check"
                                  name="payment-method"
                                  defaultValue="check"
                                />
                                <label htmlFor="payment_check">
                                  Boleto
                                </label>
                              </div>
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_bank"
                                  name="payment-method"
                                  defaultValue="bank"
                                />
                                <label htmlFor="payment_bank">
                                  Cartão
                                </label>
                              </div>
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_cash"
                                  name="payment-method"
                                  defaultValue="cash"
                                />
                                <label htmlFor="payment_cash">
                                  Pix
                                </label>
                              </div>
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_paypal"
                                  name="payment-method"
                                  defaultValue="paypal"
                                />
                                <label htmlFor="payment_paypal">Pagamento na retirada</label>
                              </div>
                            
                              <div className="single-method">
                                <input type="checkbox" id="accept_terms" />
                                <label htmlFor="accept_terms">
                                  Aceito os termos de compromisso
                                </label>
                              </div>
                            </div>
                            <button className="lezada-button lezada-button--medium space-mt--20">
                              Finalizar pedido
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      No items found in cart to checkout
                    </p>
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        Shop Now
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutFive>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

export default connect(mapStateToProps)(Checkout);
