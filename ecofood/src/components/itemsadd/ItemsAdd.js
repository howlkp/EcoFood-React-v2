
import React from "react";
import "./ItemsAdd.css";
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex            : 1000
  },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '25%'
      }
};
 
export default class Main extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      startDate: moment()
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }

  // Date picker
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }
 
  render() {
    return (
        <div>
        <section className="container donator">
        <div className="row">
            <div className="col-lg-8 mx-auto text-left">
                <h3 className="section-heading">Donations</h3>
                <hr />
                <br />
                <form action="" method="POST">
                    <div className="form-group">
                        <label htmlFor="">Item</label>
                        <input type="text" className="form-control" id="name" placeholder="Item Name..." required autoFocus />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" id="category">Category</label>
                        <select className="form-control" id="category">
                            <option defaultValue="">All Categories</option>
                            <option value="Proteins">Proteins</option>
                            <option value="Grains">Grains</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Oils">Oils</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Quantity</label>
                        <input type="text" className="form-control" id="quantity" placeholder="Quantity in pounds..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Expiration</label>
                        {/* <input type="text" className="form-control" id="expiration" data-provide="datepicker" placeholder="Days until expiration..." /> */}
                        <DatePicker className="form-control" id="expiration"
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                    
                    </div>
                    <button onClick={this.openModal} className="btn btn-secondary add" type="button">Add Items!</button>
              </form>
            </div>
        </div>
    </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="modal-heading" ref={subtitle => this.subtitle = subtitle}>Thanks!</h2>
          <button className="btn btn-default close-modal" onClick={this.closeModal}>close</button>
          <form>
            <p className="modal-inner">Your donation has been added!</p>
          </form>
        </Modal>
      </div>
    );
  }
}
