import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';
function ProductActionPage(props) {
    var { itemEditing } = useSelector(state => state);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        id: "",
        txtName: "",
        txtDescription: "",
        txtPrice: "",
        chkbStatus: false
    });

    useEffect(() => {
        console.log("Did Mount");
        var { match } = props;
        //console.log(match);
        if (match) { // update
            var id = match.params.id;
            dispatch(actGetProductRequest(id));
        }
    }, []);

    useEffect(() => {
        if (props.match && itemEditing) {
            setInput({// đổ dữ liệu ra ngoài để sửa
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtDescription: itemEditing.description,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            });
        }
        return () => {
        };
    }, [itemEditing]);

    function onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        setInput({
            ...input,
            [name]: value
        });
    }
    function onSubmit(e) {
        e.preventDefault();
        var { id, txtName, txtDescription, txtPrice, chkbStatus } = input;
        var { history } = props;
        var product = {
            id: id,
            name: txtName,
            description: txtDescription,
            price: txtPrice,
            status: chkbStatus
        };
        if (id) {// update
            console.log(input);
            dispatch(actUpdateProductRequest(product));
        } else {//add
            dispatch(actAddProductRequest(product));

        }
        history.goBack();
    }
    var { txtName, txtDescription, txtPrice, chkbStatus } = input;
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={onSubmit}>
                        <legend>* Vui lòng nhập đầy đủ thông tin</legend>
                        <div className="form-group">
                            <label>Tên Sản Phẩm: </label>
                            <input onChange={onChange} value={txtName} name="txtName" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Mô Tả Sản Phẩm: </label>
                            <textarea onChange={onChange} value={txtDescription} name="txtDescription" className="form-control" rows="3">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <label>Giá: </label>
                            <input onChange={onChange} value={txtPrice} name="txtPrice" type="number" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Tình Trạng: </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input checked={chkbStatus} onChange={onChange} value={chkbStatus} type="checkbox" name="chkbStatus" />
                                Còn Hàng
                            </label>
                        </div>
                        <Link to="/product-list" className="btn btn-danger mr-5">
                            <i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
                        </Link>
                        <button type="submit" className="btn btn-primary">
                            <i className="glyphicon glyphicon-save"></i> Lưu Lại
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default ProductActionPage;