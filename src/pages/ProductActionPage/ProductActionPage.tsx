import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
interface Props {
    location?: any,
    history?: any,
    match?: any
}
const ProductActionPage: React.FC<Props> = (props) => {
    let { itemEditing } = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    const [input, setInput] = useState({
        id: "",
        txtName: "",
        txtDescription: "",
        txtPrice: 0,
        chkbStatus: false
    });

    useEffect(() => {
        let { match } = props;
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
    var validate = Yup.object({
        txtName: Yup.string().required('Required'),
        txtDescription: Yup.string(),
        txtPrice: Yup.number().required('Required'),
    });
    return (
        <Formik
            initialValues={input}
            enableReinitialize
            validationSchema={validate}
            onSubmit={(values) => {
                var { id, txtName, txtDescription, txtPrice, chkbStatus } = values;
                setInput({
                    id: id,
                    txtName: txtName,
                    txtDescription: txtDescription,
                    txtPrice: txtPrice,
                    chkbStatus: chkbStatus
                })
                var { history } = props;
                var product = {
                    id: id,
                    name: txtName,
                    description: txtDescription,
                    price: txtPrice,
                    status: chkbStatus
                };
                if (id) {// update
                    dispatch(actUpdateProductRequest(product));
                } else {//add
                    dispatch(actAddProductRequest(product));
                }
                history.goBack();
            }}
        >
            <Form >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <legend>* Vui lòng nhập đầy đủ thông tin</legend>
                            <div className="form-group">
                                <label htmlFor="txtName">Tên sản phẩm</label>
                                <Field name="txtName" type="text" className="form-control" />
                                <ErrorMessage name="txtName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDescription">Mô Tả Sản Phẩm:</label>
                                <Field name="txtDescription" type="text" className="form-control" />
                                <ErrorMessage name="txtDescription" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPrice">Giá:</label>
                                <Field name="txtPrice" type="number" className="form-control" />
                                <ErrorMessage name="txtPrice" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="chkbStatus">Tình Trạng: </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <Field name="chkbStatus" type="checkbox" />
                                    <ErrorMessage name="chkbStatus" />
                                    Còn Hàng
                                </label>
                            </div>
                            <Link to="/product-list" className="btn btn-danger mr-5">
                                <i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
                            </Link>
                            <button type="submit" className="btn btn-primary">
                                <i className="glyphicon glyphicon-save"></i> Lưu Lại
                            </button>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}



export default ProductActionPage;