import Link from "next/link";
import { connect } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { LayoutFive } from "../../components/Layout";
import { ShopInfo } from "../../components/Shop";
import { getProducts } from "../../lib/product";
import { HeroSliderOne, HeroSliderTwo } from "../../components/HeroSlider";
import { CategorySlider } from "../../components/Category";
import { SectionTitleOne, SectionTitleThree } from "../../components/SectionTitle";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { BlogPostSlider } from "../../components/Blog";
import categoryData from "../../data/categories/category-one.json";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import imageCtaData from "../../data/image-cta/image-cta-one.json";
import { ImageCta } from "../../components/Cta";

const Final = ({ products }) => {
    return (
        <LayoutFive>
            <HeroSliderOne sliderData={heroSliderData} />

            <BreadcrumbOne
                pageTitle="Nossas categorias"
            />

            <CategorySlider
                categoryData={categoryData}
                spaceBottomClass="space-mb--r100"
            />

            <ImageCta
                image={imageCtaData.image}
                tags={imageCtaData.tags}
                title={imageCtaData.title}
                url={imageCtaData.url}
            />


            <div className="element-wrapper space-mt--r130 space-mb--r130">
                <SectionTitleThree
                    title="Produtos que você pode gostar"
                    subtitle="Separamos alguns produtos com as melhores ofertas"
                />
                <Container>
                    <Row>
                        <ProductGridWrapper
                            products={products}
                            column={4}
                            bottomSpace="space-mb--r50"
                        />
                        <Col lg={12} className="text-center">
                            <Link
                                href="/shop/left-sidebar"
                                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                            >
                                <a className="lezada-loadmore-button">
                                    <IoIosAdd /> Veja mais...
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

        </LayoutFive>
    );
};

const mapStateToProps = (state) => {
    const products = state.productData;
    return {
        products: getProducts(products, "fashion", "popular", 10)
    };
};

export default connect(mapStateToProps)(Final);
