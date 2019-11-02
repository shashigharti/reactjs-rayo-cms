import React, { useContext } from 'react';

const NavBar = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="container-fluid">
                    <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                        <div className="col s10 m6 l6 breadcrumbs-left">
                            <ol className="breadcrumbs mb-0">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    <Link to="/pages">Pages</Link>
                                </li>
                            </ol>
                        </div>
                        <div className="col s2 m6 l6 right--button">
                            <Link
                                className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                to="/page-add"
                            >
                                <i className="material-icons">add</i>
                            </Link>
                            <a
                                className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                href="#!"
                            >
                                <i className="material-icons">file_upload</i>
                            </a>
                            <a
                                className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                href="#!"
                            >
                                <i className="material-icons">file_download</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataList;