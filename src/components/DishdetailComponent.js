import React, { Component } from 'react'
import {Card,CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
export class Dishdetail extends Component {
    /*renderComments(comments){
        <ul class="list-unstyled">
            <li>{comments}</li>
        </ul>
    }*/
    render() {
        const dish = this.props.SelectedDish;
        
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
              {/*  <div className="col-12 col-md-5 m-1">
                    {renderComments(dish.comments)}
        </div>*/}
            </div>
        )
    }
}
