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
            grade: '',
            formDisplay: document.getElementById("form"),
            displayStyle: 'none',
            formStyle: ''



        };
        this.formRef = React.createRef();
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeDepa = this.handleChangeDepa.bind(this);
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }
    handleSubmit(event) {
        const newMember = {
            Id: this.state.Members.length + 1,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mailAdrress: this.state.mailAdrress,
            Depa: this.state.Depa,
            grade: this.state.grade
        }
        if (newMember.firstName.length != 0 && newMember.lastName.length != 0 && newMember.mailAdrress.length != 0) {
            const Members = this.state.Members;
            Members.push(newMember);
            this.setState({ Members });
            this.setState({ displayStyle: 'none' });
            console.log(this.state.Members);
            event.preventDefault();
        } else {
            this.setState({ formStyle: '2px solid red' });
        }
        document.getElementById("membersId").reset();
        event.preventDefault();

    }
    handleCancel = () => {
        this.setState({ displayStyle: 'none' });
    }
    handleDisplay = () => {
        var displayStyle;
        if (this.state.displayStyle === 'none') {
            displayStyle = 'block';
        } else {
            displayStyle = 'none';
        }
        this.setState({ displayStyle });
    }

    handleChangeFirstName(event) {

        this.setState({ firstName: event.target.value });

    }
    handleChangeLastName(event) {
        this.setState({ lastName: event.target.value });
    }
    handleChangeMail(event) {
        this.setState({ mailAdrress: event.target.value });
    }
    handleChangeDepa(event) {
        this.setState({ Depa: event.target.value });
    }
    handleChangeGrade(event) {
        this.setState({ grade: event.target.value });
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
        this.state.Members.splice(memberId, 1);
        const Members = this.state.Members;
        console.log(this.Members);
        this.setState({ Members });


    };
    render() {
        document.getElementsByTagName("META")[2].name = "viewport";
        document.getElementsByTagName("META")[2].content =
            "width=device-width, initial-scale=1";
        return (
            <div className="members">
                <div className="members-table">
                    <div className="container theader">
                        <div className="row tbinfo">

                            <div className="col-md-2 FN"><p className="firstName">First Name</p></div>
                            <div className=":col-md-2 LN"><p className="lastName">Last Name</p></div>
                            <div className="col-md-2 ML"><p className="mailAddress">Mail</p></div>
                            <div className="col-md-2 DP"><p className="dep">Departement</p></div>
                            <div className="col-md-2 GD"><p className="grade">Grade</p></div>
                            <div className="col-md-2 remove"></div>

                        </div>
                    </div>
                    {this.state.Members.map(members => (
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
                <div className="form animate" id="form" style={{ display: this.state.displayStyle }}>

                    <form onSubmit={this.handleSubmit} id="membersId">
                        <label>
                            <input type="text" placeholder="Enter First Name" style={{ border: this.state.formStyle }} onChange={this.handleChangeFirstName} />
                        </label>
                        <label>
                            <input type="text" placeholder="Enter Last Name" style={{ border: this.state.formStyle }} onChange={this.handleChangeLastName} />
                        </label>
                        <label>
                            <input type="email" placeholder="Enter Mail" style={{ border: this.state.formStyle }} onChange={this.handleChangeMail} />
                        </label>
                        <label>
                            <input type="text" placeholder="Enter Section" onChange={this.handleChangeDepa} />
                        </label>
                        <label>
                            <input type="text" placeholder="Enter Grade" onChange={this.handleChangeGrade} />
                        </label>
                        <input type="submit" value="submit" />
                        <button className="cancel" onClick={this.handleCancel}>Cancel</button>
                    </form>
                </div>
                <button className="display-btn" ref={this.formRef} onClick={this.handleDisplay}>Add a member</button>

            </div>
        );
    }
}

export default Membres;
