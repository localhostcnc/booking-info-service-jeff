/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleUp, faAngleDown, faPlus, faMinus);

const Wrapper = styled.section`
  margin-left: 5%;
  text-align: left;
  font-size: 17px;
  font-weight: lighter;
`;

const Title = styled.section`
  display: inline-block;
  margin-right: 180px;
  margin-top: -100px;
  border-radius: 5px;
  padding: 5px 5px 5px 5px;
`;

const InfantTitle = styled.section`
  display: inline-block;
  margin-right: 180px;
  margin-top: -100px;
  border-radius: 5px;
  padding: 5px 5px 5px 5px;
`;

const Header = styled.section``;

const AngleDown = styled.section`
  display: inline-block;
  float: right;
  margin-right: 25px;
`;

const PlusCircle = styled.section`
  float: right;
  display: inline-block;
  border-radius:50%;
  border: solid;
  color: #368489;
  margin-top: 12px;
  margin-right: 15px;
  padding: 4px 6px 3.5px 6px;
  border-width: thin;
`;

const MinusCircle = styled.section`
  float: right;
  display: inline-block;
  border-radius:50%;
  border: solid;
  color: #368489;
  margin-top: 12px;
  margin-right: 20px;
  padding: 4px 6px 3.5px 6px;
  opacity: 0.5;
  border-width: thin;
`;

const TotalAdults = styled.section`
  float: right;
  display: inline-block;
  margin-top: 17px;
  margin-right: 24px;
`;

const Adults = styled.section`
  padding-top: 10px;
  margin-left: -6.5px;
  font-weight: normal;
  padding-bottom: 15px;
  display: inline-block;
`;

const Children = styled.section`
  padding-top: 18px;
  margin-left: -6.5px;
  font-weight: normal;
  padding-bottom: 5px;
`;

const ChildrenDetails = styled.section`
  margin-left: -6.5px;
  font-weight: thin;
  padding-bottom: 15px;
  font-size: 14px;
`;

const Infants = styled.section`
  padding-top: 18px;
  margin-left: -6.5px;
  font-weight: normal;
  padding-bottom: 5px;
`;

const InfantDetails = styled.section`
  margin-left: -6.5px;
  font-weight: thin;
  padding-bottom: 15px;
  font-size: 14px;
`;

const MaxGuestsDetails = styled.section`
  padding-top: 10px;
  padding-bottom: 15px;
  padding-right: 20px;
  margin-left: -6.5px;
  font-weight: thin;
  font-size: 14px;
`;

const Close = styled.section`
  padding-top: -20px;
  font-weight: normal;
  padding-bottom: 5px;
  padding-left: 200px;
  margin-right: 20px;
  text-align: right;
  color: #368489;
`;

const modalStyle = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    width: '21.75%',
    marginTop: '200px',
    marginLeft: '-1px',
  },
};

ReactModal.setAppElement('#app');

class GuestDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      adults: 1,
      kids: 0,
      infants: 0,
      guestTotal: 1,
      showInfants: false,
    };
    // modal open
    this.toggleGuestDrop = this.toggleGuestDrop.bind(this);

    //after modal method

    //modal close
    this.closeClick = this.closeClick.bind(this);
    this.addAdult = this.addAdult.bind(this);
    this.addKid = this.addKid.bind(this);
    this.addInfant = this.addInfant.bind(this);
    this.deleteAdult = this.deleteAdult.bind(this);
    this.deleteKid = this.deleteKid.bind(this);
    this.deleteInfant = this.deleteInfant.bind(this);
  }

  currentTotal() {
    const { adults, kids } = this.state;
    const totalGuests = adults + kids;
    this.setState({
      guestTotal: totalGuests,
    }, () => this.props.currentGuestTotal(totalGuests));
  }

  //   handleClickOutside(event) {
  //     event.preventDefault();
  //     this.setState({
  //       modalOpen: false,
  //     });
  //   }

  addAdult() {
    if (this.state.guestTotal === this.props.maxGuests) {
      this.setState({
        adults: this.state.adults,
        guestTotal: this.state.guestTotal,
      });
    } else {
      this.setState({
        adults: this.state.adults + 1,
        guestTotal: this.state.guestTotal + 1,
      }, () => this.currentTotal());
    }
  }

  deleteAdult() {
    if (this.state.adults === 1) {
      this.setState({
        adults: 1,
        guestTotal: 1,
      });
    } else {
      this.setState({
        adults: this.state.adults - 1,
        guestTotal: this.state.guestTotal - 1,
      }, () => this.currentTotal());
    }
  }

  addKid() {
    if (this.state.guestTotal === this.props.maxGuests) {
      this.setState({
        kids: this.state.kids,
        guestTotal: this.state.guestTotal,
      });
    } else {
      this.setState({
        kids: this.state.kids + 1,
        guestTotal: this.state.guestTotal + 1,
      }, () => this.currentTotal());
    }
  }

  deleteKid() {
    if (this.state.kids === 0) {
      this.setState({
        kids: 0,
      });
    } else {
      this.setState({
        kids: this.state.kids - 1,
        guestTotal: this.state.guestTotal - 1,
      }, () => this.currentTotal());
    }
  }

  addInfant() {
    this.setState({
      infants: this.state.infants + 1,
    });
  }

  deleteInfant() {
    if (this.state.infants < 1) {
      this.setState({
        infants: 0,
      });
    } else {
      this.setState({
        infants: this.state.infants - 1,
      });
    }
  }


  closeClick() {
    this.setState({
      modalOpen: false,
    });
  }

  toggleGuestDrop() {
    this.setState(({
      modalOpen: !this.state.modalOpen,
    }));
  }

  render() {
    const { modalOpen, kids, infants, adults, guestTotal, showInfants } = this.state;

    let guestPlural = '';
    if (guestTotal > 1) {
      guestPlural = 'guests';
    } else {
      guestPlural = 'guest';
    }

    let plusOpacity = {};
    if (guestTotal === this.props.maxGuests) {
      plusOpacity = { opacity: '0.5' };
    }

    let minusOpacity = {};
    if (adults > 1) {
      minusOpacity = { opacity: '1' };
    }

    let minusOpacityKids = {};
    if (kids > 0) {
      minusOpacityKids = { opacity: '1'};
    };

    const plusOpacityKidsAndInfants = Object.assign({}, plusOpacity, { marginTop: '-20px' });
    // const minusOpacityKids = Object.assign({}, minusOpacityKids, { marginTop: '-20px' });
    const minusOpacityAndMarginKids = Object.assign({}, minusOpacityKids, { marginTop: '-20px' });
    
    let infantPlural = '';
    if (infants > 1) {
      infantPlural = 'infants';
    } else {
      infantPlural = 'infant';
    }

    if (infants > 0) {
      this.setState({
        showInfants: true,
      });
    }

    let highlightedDropDown = {};
    let highLightedInfant = {};
    if (modalOpen) {
      highlightedDropDown = { backgroundColor: '#75efe3' };
    } else if (modalOpen && showInfants) {
      highlightedDropDown = {};
      highLightedInfant = { backgroundColor: '#75efe3' };
    }
    return (

        <Wrapper>
          <Header onClick={() => this.toggleGuestDrop()}>
            <Title style={highlightedDropDown}>
              {`${guestTotal} ${guestPlural}`}
            </Title>
            { showInfants && (
                <InfantTitle style={highLightedInfant}>
                  {`${infants} ${infantPlural}`}
                </InfantTitle>
            )}
            <AngleDown>
              {modalOpen
                ? <FontAwesomeIcon icon="angle-up" size="lg" />
                : <FontAwesomeIcon icon="angle-down" size="lg" />
            }
            </AngleDown>
          </Header>

{/* 
              // put modal here
            { listOpen && ( */}
            <ReactModal
              isOpen={this.state.modalOpen}
              style={modalStyle}
              >
            <div>
              <Adults>
            Adults
              </Adults>
              <PlusCircle onClick={this.addAdult} style={plusOpacity}>
                  <FontAwesomeIcon icon="plus" />
              </PlusCircle>
              <TotalAdults>
              {adults}
              </TotalAdults>
              <MinusCircle onClick={this.deleteAdult} style={minusOpacity}>
                <FontAwesomeIcon icon="minus" />
              </MinusCircle>
              <Children>
            Children
              </Children>
              <PlusCircle onClick={this.addKid} style={plusOpacityKidsAndInfants}>
                  <FontAwesomeIcon icon="plus" />
              </PlusCircle>
              <TotalAdults style={{ marginTop: '-17px' }}>
              {kids}
              </TotalAdults>
              <MinusCircle onClick={this.deleteKid} style={minusOpacityAndMarginKids}>
                <FontAwesomeIcon icon="minus" />
              </MinusCircle>
              <ChildrenDetails>
                Ages 2-12
              </ChildrenDetails>
              <Infants>
            Infants
              </Infants>
              <PlusCircle onClick={this.addInfant} style={plusOpacityKidsAndInfants}>
                  <FontAwesomeIcon icon="plus" />
              </PlusCircle>
              <TotalAdults style={{ marginTop: '-17px' }}>
              {infants}
              </TotalAdults>
              <MinusCircle onClick={this.deleteInfant} style={{ marginTop: '-20px' }}>
                <FontAwesomeIcon icon="minus" />
              </MinusCircle>
              <InfantDetails>
            Under 2
              </InfantDetails>
              <MaxGuestsDetails>
              {this.props.maxGuests} guests maximum. Infants don’t count toward the number of guests.
              </MaxGuestsDetails>
              <Close onClick={this.closeClick}>
                Close
              </Close>
            </div>
            </ReactModal>
        </Wrapper>
    );
  }
}

export default onClickOutside(GuestDropDown);
