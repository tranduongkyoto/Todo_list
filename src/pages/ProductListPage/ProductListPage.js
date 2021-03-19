import React, { useEffect } from 'react';
import './ProductListPage.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';
import PropTypes from 'prop-types';

const ProductListPage = (props) => {
    var { products } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchProductsRequest());
    }, []);

    const onDelete = (id) => {
        dispatch(actDeleteProductRequest(id));
    }
    const showProducts = (products) => {
        var result = null;
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
ProductListPage.propTypes = {
    products: PropTypes.object,

};




export default ProductListPage;