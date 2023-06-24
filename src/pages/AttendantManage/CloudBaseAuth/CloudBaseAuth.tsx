import React from 'react';
import Table from 'react-bootstrap/Table';


const CloudBaseAuth = () => {
    return (
        <div className="text-center">
            <div className="cbatitle text-center">
                <h3 className="text-dark fw-bold text-uppercase border-bottom">this is a cloud base auth</h3>
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CloudBaseAuth