import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Project = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <h1>
                        Project klsdfkjldfkj
                    </h1>
                    <ul>
                        <li>
                            <Link to="/project/">
                                Front End
                            </Link>
                        </li>
                        <li>
                            <Link to="/project/Back">
                                Back End 
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-8">
                            <Outlet/>
                </div>
            </div>
        </div>
    
    </>
  );
};

export default Project;