import React, { Component } from 'react';
import './ProductListPage.css';
import { connect } from 'react-redux';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import {actFetchProductsRequest, actDeleteProductRequest} from './../../actions/index';
class ProductListPage extends Component {
   
    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllProducts();
    }
    onDelete=(id)=>{
        this.props.onDeleteProduct(id);
    }
    
    render() {
        var {products} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/product/add" className="btn btn-primary mb-5">
                            <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                        </Link>
                        <ProductList>
                            {this.showProducts(products)}
                        </ProductList>
                    </div>
                </div>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return(
                    <ProductItem 
                        product={product} 
                        key={index} 
                        index={index}  
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;  
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: (products) => {
            dispatch(actFetchProductsRequest(products));
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);