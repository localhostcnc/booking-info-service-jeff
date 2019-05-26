/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';
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

const Header = styled.section``;

const AngleDown = styled.section`
  display: inline-block;
  float: right;
  margin-right: 50px;
  margin-top: -25px;
`;

const PlusCircle = styled.section`
  float: right;
  display: inline-block;
  border-radius:50%;
  border: solid;
  color: #368489;
  margin-top: 12px;
  margin-right: 15px;
  padding: 4px 7px 4px 7px;
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
  padding: 3.5px 6px 3.5px 6px;
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
  padding-top: 18px;
  margin-left: -6.5px;
  font-weight: normal;
  padding-bottom: 15px;
  display: inline-block;
`;

const Bar = styled.section`
  border:solid;
  margin-top: 12px;
  margin-left: -17.5px;
  border-width: 1px;
  color: #368489;
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


class GuestDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false,
      adults: 1,
      kids: 0,
      infants: 0,
      guestTotal: 1,
    };
    this.toggleGuestDrop = this.toggleGuestDrop.bind(this);
    this.closeClick = this.closeClick.bind(this);
    this.addAdult = this.addAdult.bind(this);
    this.addKid = this.addKid.bind(this);
    this.addInfant = this.addInfant.bind(this);
    this.deleteAdult = this.deleteAdult.bind(this);
    this.deleteKid = this.deleteKid.bind(this);
    this.deleteInfant = this.deleteInfant.bind(this);
  }

  currentTotal() {
    const { adults, kids, infants } = this.state;
    const totalGuests = adults + kids + infants;
    this.setState({
      guestTotal: totalGuests,
    }, () => this.props.currentGuestTotal(totalGuests));

    //todo if total guests === this.props.maxGuests STOP

    // if (this.state.total === this.props.maxGuests){
    //   this.set
    // }
  }

  handleClickOutside(event) {
    event.preventDefault();
    this.setState({
      listOpen: false,
    });
  }

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
    this.setState({
      kids: this.state.kids + 1,
      guestTotal: this.state.guestTotal + 1,
    }, () => this.currentTotal());
  }

  deleteKid() {
    if (this.state.adults === 1) {
    }
    this.setState({
      kids: this.state.kids - 1,
      guestTotal: this.state.guestTotal - 1,
    }, () => this.currentTotal());
  }

  addInfant() {
    this.setState({
      infants: this.state.infants + 1,
      guestTotal: this.state.guestTotal + 1,
    }, () => this.currentTotal());
  }

  deleteInfant() {
    if (this.state.adults === 1) {
    }
    this.setState({
      infants: this.state.infants - 1,
      guestTotal: this.state.guestTotal - 1,
    }, () => this.currentTotal());
  }


  closeClick() {
    this.setState({
      listOpen: false,
    });
  }

  toggleGuestDrop() {
    this.setState(({
      listOpen: !this.state.listOpen,
    }));
  }

  render() {
    const { total, listOpen, kids, infants, adults } = this.state;

    let guestPlural = '';
    if (total > 1) {
      guestPlural = 'guests';
    } else {
      guestPlural = 'guest';
    }

    let highlightedDropDown = {};
    if (listOpen) {
      highlightedDropDown = { backgroundColor: '#75efe3' };
    }
    return (
        <div>
        <Wrapper>
            <div>
          <Header onClick={() => this.toggleGuestDrop()}>
            <Title style={highlightedDropDown}>
              {`${this.state.guestTotal} ${guestPlural}`}
            </Title>
            <AngleDown>
              {listOpen
                ? <FontAwesomeIcon icon="angle-up" size="lg" />
                : <FontAwesomeIcon icon="angle-down" size="lg" />
            }
            </AngleDown>
          </Header>
            </div>


          <div>
            { listOpen && (
            <div>
              <Bar />
              <Adults>
            Adults
              </Adults>
              <PlusCircle onClick={this.addAdult}>
                  <FontAwesomeIcon icon="plus" />
              </PlusCircle>
              <TotalAdults>
              {adults}
              </TotalAdults>
              <MinusCircle onClick={this.deleteAdult}>
                <FontAwesomeIcon icon="minus" />
              </MinusCircle>
              <Children>
            Children
              </Children>
              <PlusCircle onClick={this.addKid} style={{ marginTop: '-20px' }}>
                  <FontAwesomeIcon icon="plus" />
              </PlusCircle>
              <TotalAdults style={{ marginTop: '-17px' }}>
              {kids}
              </TotalAdults>
              <MinusCircle onClick={this.deleteKid} style={{ marginTop: '-20px' }}>
                <FontAwesomeIcon icon="minus" />
              </MinusCircle>
              <ChildrenDetails>
                Ages 2-12
              </ChildrenDetails>
              <Infants>
            Infants
              </Infants>
              <PlusCircle onClick={this.addInfant} style={{ marginTop: '-20px' }}>
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
            )}
          </div>
        </Wrapper>
        </div>
    );
  }
}

export default onClickOutside(GuestDropDown);
