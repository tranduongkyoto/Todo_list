import React from 'react';
import { Link } from 'react-router-dom';
import type { product } from '../../constants/Types';

interface Props {
    product: product,
    index: number,
    onDelete: (...args: any[]) => any
}

const ProductItem: React.FC<Props> = (props) => {

    const onDelete = (id: string) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            props.onDelete(id);
        }
    }

    let { product, index } = props;
    let statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
    let statusClass = product.status ? 'success' : 'default';
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