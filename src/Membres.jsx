import React, { Component } from "react";
import "./Members.css";
import "./Row"
import Row from "./Row";

class Membres extends Component {
    constructor(props) {
        super(props);


          this.state = {
              Members: [
                  {
                      Id: 0,
                      firstName: 'Zoher',
                      lastName: 'Lourguioui',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 1,
                      firstName: 'Zoher',
                      lastName: 'Lourguioui',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 2,
                      firstName: 'Zoher',
                      lastName: 'Lourguioui',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 3,
                      firstName: 'Abdenour',
                      lastName: 'Dahmani',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 4,
                      firstName: 'Abdelhak',
                      lastName: 'Ouchar',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 5,
                      firstName: 'Akram',
                      lastName: 'Noui',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 6,
                      firstName: 'Seif',
                      lastName: 'Hafri',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 7,
                      firstName: 'Zoher',
                      lastName: 'Lourguioui',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 8,
                      firstName: 'Zoher',
                      lastName: 'Lourguioui',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  },
                  {
                      Id: 9,
                      firstName: 'Zoher',
                      lastName: 'Lourguioui',
                      mailAdrress: 'iz_lourguioui@esi.dz',
                      Depa: 'web',
                      grade: 'actif'
                  }
              ],
                  Id: '',
                  firstName: '',
                  lastName: '',
                  mailAdrress: '',
                  Depa: '',
                  grade: ''



          };
          this.handleDelete = this.handleDelete.bind(this);
          this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
          this.handleChangeLastName = this.handleChangeLastName.bind(this);
          this.handleChangeMail = this.handleChangeMail.bind(this);
          this.handleChangeDepa = this.handleChangeDepa.bind(this);
          this.handleChangeGrade = this.handleChangeGrade.bind(this);
    }
    handleSubmit (event){

    }

    handleChangeFirstName(event){
        this.setState( {firstName : event.target.firstName});
    }
    handleChangeLastName(event){
        this.setState({lastName : event.target.lastName});
    }
    handleChangeMail(event){
        this.setState( {mailAdrress : event.target.mailAdrress});
    }
    handleChangeDepa(event) {
        this.setState( {Depa : event.target.Depa});
    }
    handleChangeGrade(event) {
        this.setState({grade : event.target.Depa});
    }
    handleDelete = (memberId) => {
      console.log('memberid' + memberId);
        // this.state.Members.splice(memberId , 1);
        // const Members = this.state.Members;
        // this.setState({ Members });
        // console.log(Members);
        /*this.setState(prevState => {
            console.log(prevState)
            return {
                Members : prevState.Members.filter(x => x.Id !== memberId)
            }
        })*/
      this.state.Members.splice(memberId , 1);
      const Members = this.state.Members;
        console.log(this.Members);
        this.setState({ Members });


    };
  render() {
    return (
      <div className="members">
          <div className="members-table">
              <div className="container theader">
                  <div className="row">
                      <div className="col-md-2 FN"><p className="firstName">First Name</p></div>
                      <div className=":col-md-2 LN"><p className="lastName">Last Name</p></div>
                      <div className="col-md-2 ML"><p className="mailAddress">Mail</p></div>
                      <div className="col-md-2 DP"><p className="dep">Departement</p></div>
                      <div className="col-md-2 GD"><p className="grade">Grade</p></div>
                      <div className="col-md-2 remove"></div>
                  </div>
              </div>
            { this.state.Members.map(members => (
                <Row
                  Key={members.Id}
                  Id={members.Id}
                  firstName={members.firstName}
                  lastName={members.lastName}
                  mailAddress={members.mailAdrress}
                  dep={members.Depa}
                  grade={members.grade}
                  onDelete={this.handleDelete}
                />
            ))}
          </div>
              <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.firstName} placeholder="Enter First Name" onChange={this.handleChangeFirstName} />
                        </label>
                        <label>
                            <input type="text" value={this.state.lastName} placeholder="Enter Last Name" onChange={this.handleChangeLastName} />
                        </label>
                        <label>
                            <input type="text" value={this.state.mailAdrress} placeholder="Enter Mail" onChange={this.handleChangeMail} />
                        </label>
                        <label>
                            <input type="text" value={this.state.Depa} placeholder="Enter Section" onChange={this.handleChangeDepa} />
                        </label>
                        <label>
                            <input type="text" value={this.state.grade} placeholder="Enter Grade" onChange={this.handleChangeGrade} />
                        </label>
                    </form>
              </div>

      </div>
    );
  }
}

export default Membres;
