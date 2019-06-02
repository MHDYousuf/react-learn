import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class MenuComponent extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        const menu = this.props.dishes.map((dish)=> {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card tag="li">
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay heading>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
            </div>
        );
    }
}
export default MenuComponent;
