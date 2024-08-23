import React from 'react';
import { Link } from 'react-router-dom';

export default function RecoverPassword() {
    return (
        <>
            <br></br><br></br><br />
            <center>
                <div className="login-box">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <Link to="#" className="h1"><b>Chaty</b>Bot</Link>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>
                            <form action="login.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary btn-block">Change password</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <p className="mt-3 mb-1">
                                <Link to="http://localhost:3000/login">Login</Link>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </center>

        </>
    );
}; 