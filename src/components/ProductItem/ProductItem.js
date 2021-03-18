import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
ProductItem.propTypes = {
    product: PropTypes.object,
    index: PropTypes.number,
};
ProductItem.defaultProps = {

}
const ProductItem = (props) => {

    const onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            props.onDelete(id);
        }
    }


    var { product, index } = props;
    var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
    var statusClass = product.status ? 'success' : 'default';
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <span className={`label label-${statusClass}`}>
                    {statusName}
                </span>
            </td>
            <td>
                <Link to={`/product/${product.id}/edit`} className="btn btn-info mr-5">
                    <i className="glyphicon glyphicon-edit"></i> Sửa
                    </Link>
                <button type="button" className="btn btn-danger" onClick={() => onDelete(product.id)}>
                    <i className="glyphicon glyphicon-trash"></i> Xóa
                    </button>
            </td>
        </tr>
    );

}


export default ProductItem;