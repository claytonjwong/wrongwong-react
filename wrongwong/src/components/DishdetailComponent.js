import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Label, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const RenderComments = ({comments, postComment, dishId}) => {
    if (comments == null) {
        return (
            <React.Fragment></React.Fragment>
        );
    }

    const commentListItems = comments.map((comment) => {
        return (
            <Fade in>
                <li key={comment.id}>
                    <span>{comment.comment}</span>
                    <br />
                    <span>-- {comment.author} , {new Date(comment.date).toDateString()}</span>
                    <br /><br />
                </li>
            </Fade>
        );
    });

    return (
        <div>
            <h4>Comments</h4>
                <ul className="list-unstyled">
                    <Stagger in>
                        {commentListItems}
                    </Stagger>
                </ul>
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    );
}

const Comments = (props) => {
    return (
        <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            dishId={props.dish.id}
        />
    );
}

const RenderDishDetail = ({dish}) => {
    if (dish == null) {
        return (
            <React.Fragment></React.Fragment>
        );
    }
    return(
        <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

const DishDetail = ({dish, comments, postComment, isLoading, errMess}) => {
    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }
    else if (dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDishDetail dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Comments dish={dish} comments={comments} postComment={postComment} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const isNumber = (val) => !isNaN(Number(val));
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg"></i>
                    {' '}Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody className="m-3">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select className="form-control"
                                        model=".rating" name="rating"
                                        validators={{
                                            isNumber
                                        }} >
                                    <option hidden>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Errors
                                className="text-danger"
                                model=".rating"
                                show="touched"
                                messages={{
                                    isNumber: 'Invalid Rating!'
                                }}
                            />
                            <Row className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text className="form-control"
                                    model=".author" id="author" name="author" placeholder="Your Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                            </Row>
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                    minLength: 'Must be greater than 2 characters!',
                                    maxLength: 'Must be 15 characters or less!'
                                }}
                            />
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea className="form-control"
                                    model=".comment" id="comment" name="comment" rows={6}
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                            </Row>
                            <Errors
                                className="text-danger"
                                model=".comment"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                    minLength: 'Must be greater than 2 characters!'
                                }}
                            />
                            <Button type="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default DishDetail;