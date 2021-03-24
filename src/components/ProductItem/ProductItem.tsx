import React from 'react';
import { Link } from 'react-router-dom';
type product = {
    id: string,
    name: string,
    description: string,
    price: number,
    status: boolean
}
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