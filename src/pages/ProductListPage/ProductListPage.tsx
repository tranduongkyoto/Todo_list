import React, { useEffect } from 'react';
import './ProductListPage.css';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';
import { useAppSelector } from '../../hooks/hook';
import { Product } from '../../constants/Types';
import { useDispatch } from 'react-redux';
const ProductListPage = () => {
    let { products } = useAppSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actFetchProductsRequest());
    }, []);

    const onDelete = (id: string): void => {
        dispatch(actDeleteProductRequest(id));
    }
    const showProducts = (products: Product[]): JSX.Element[] | null => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        product={product}
                        key={index}
                        index={index}
                        onDelete={onDelete}
                    />
                );
            });
        }
        return result;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/product/add" className="btn btn-primary mb-5">
                        <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                        </Link>
                    <ProductList>
                        {showProducts(products)}
                    </ProductList>
                </div>
            </div>
        </div>
    );
}





export default ProductListPage;