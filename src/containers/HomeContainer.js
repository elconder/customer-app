import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CustomerActions from './../components/CustomerActions'
import AppFrame from './../components/AppFrame'

class HomeContainer extends Component {
    handleClick = () => {
        console.log('handle Click()')
        this.props.history.push('/customers')
    }
    render() {
        return (
            <div>
                <AppFrame
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleClick}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    }
                >
                </AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);