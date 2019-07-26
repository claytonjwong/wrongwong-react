import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value +
              "Password: " + this.password.value +
              "Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-cutlery fa-lg"></span> Food</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/move'><span className="fa fa-child fa-lg"></span> Move</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/mindset'><span className="fa fa-smile-o fa-lg"></span> Mindset</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/tools'><span className="fa fa-wrench fa-lg"></span> Tools</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/social'><span className="fa fa-wrench fa-lg"></span> Social</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button className="btn btn-block btn-danger" onClick={this.toggleModal}>
                                    <i className="fa fa-book fa-lg"></i>
                                    {' '}Disclaimer
                                </Button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Medical Information Disclaimer</ModalHeader>
                    <ModalBody>
<p>1. Credit</p>
<p>1.1 This document was created using a template from SEQ Legal (https://seqlegal.com).
You must retain the above credit. Use of this document without the credit is an infringement of
copyright. However, you can purchase from us an equivalent document that does not include the credit.</p>
<p>2. No advice</p>
<p>2.1 Our website contains general medical information.</p>
<p>2.2 The medical information is not advice and should not be treated as such.</p>
<p>3. No warranties</p>
<p>3.1 The medical information on our website is provided without any representations or warranties,
express or implied.</p>
<p>3.2 Without limiting the scope of Section 3.1, we do not warrant or represent that the medical
information on this website:</p>
<p>(a) will be constantly available, or available at all; or</p>
<p>(b) is true, accurate, complete, current or non-misleading.</p>
<p>4. Medical assistance</p>
<p>4.1 You must not rely on the information on our website as an alternative to medical advice from
your doctor or other professional healthcare provider.</p>
<p>4.2 If you have any specific questions about any medical matter, you should consult your doctor or
other professional healthcare provider.</p>
<p>4.3 If you think you may be suffering from any medical condition, you should seek immediate
medical attention.</p>
<p>4.4 You should never delay seeking medical advice, disregard medical advice or discontinue medical
treatment because of information on our website.</p>
<p>5. Interactive features</p>
<p>5.1 Our website includes interactive features that allow users to communicate with us.</p>
<p>5.2 You acknowledge that, because of the limited nature of communication through our website's
interactive features, any assistance you may receive using any such features is likely to be
incomplete and may even be misleading.</p>
<p>5.3 Any assistance you may receive using any our website's interactive features does not constitute
specific advice and accordingly should not be relied upon without further independent
confirmation.</p>
<p>6. Limits upon exclusions of liability</p>
<p>6.1 Nothing in this disclaimer will:</p>
<p>(a) limit or exclude any liability for death or personal injury resulting from negligence;</p>
<p>(b) limit or exclude any liability for fraud or fraudulent misrepresentation;</p>
<p>(c) limit any liabilities in any way that is not permitted under applicable law; or</p>
<p>(d) exclude any liabilities that may not be excluded under applicable law.</p>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;