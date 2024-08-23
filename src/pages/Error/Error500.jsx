import React from 'react'; 
import { Link } from 'react-router-dom';

export default function Error500() {
    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>500 Error Page</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item active">500 Error Page</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="error-page">
                    <h2 className="headline text-danger">500</h2>
                    <div className="error-content">
                        <h3><i className="fas fa-exclamation-triangle text-danger" /> Oops! Something went wrong.</h3>
                        <p>
                            We will work on fixing that right away.
                            Meanwhile, you may <Link to="../../index.html">return to dashboard</Link> or try using the search form.
                        </p>
                        <form className="search-form">
                            <div className="input-group">
                                <input type="text" name="search" className="form-control" placeholder="Search" />
                                <div className="input-group-append">
                                    <button type="submit" name="submit" className="btn btn-danger"><i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                            {/* /.input-group */}
                        </form>
                    </div>
                </div>
                {/* /.error-page */}
            </section>
        </div>

    )
}; 
