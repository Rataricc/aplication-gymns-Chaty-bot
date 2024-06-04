import React from 'react';

export default function ForgotPassword() {
    return (
        <>
            <br></br><br></br><br></br>
            <center>
                <div className="login-box">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <a href="#" className="h1"><b>Chaty</b>Bot</a>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                            <form action="recover-password.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary btn-block">Request new password</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <p className="mt-3 mb-1">
                                <a href="http://localhost:3000/login">Login</a>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </center>
        </>
    );
}; 
