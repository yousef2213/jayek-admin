import React, { Component, createContext } from "react";
import axios from 'axios';
import LikeImg from '../images/image.png'; 

const JayAdminContext = createContext();

const Url = "https://rest-manage.herokuapp.com";
let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
class JayAdminProvider extends Component {
    state = {
        Project: "Jayek",
        activeAdmin: false,
        Resturants: [],
        DeActiveResturants: [],
        AprovedOffer: [],
        RquestesOffer: [],
        Domine: Url,
        // 
        ResturantsActivation: [],
        ResturantsDeActivation: [],
        OrdersTimes: [],
        TokenAdmin: ''
    };
    componentDidMount() {
        this.getResturants();
        this.ResturantsActiveFun();
        this.getResturantsDeActive();
        this.getAllOffers();
        this.setState({
            activeAdmin: this.getLogin(),
            TokenAdmin: this.getToken()
        })
    }
    getLogin = () => localStorage.getItem("ActiveJayAdmi") ? JSON.parse(localStorage.getItem("ActiveJayAdmi")) : false;
    getToken = () => localStorage.getItem("TokenJayAdmin") ? JSON.parse(localStorage.getItem("TokenJayAdmin")) : '';

    Synch = () => {
        localStorage.setItem("ActiveJayAdmi", JSON.stringify(this.state.activeAdmin));
        localStorage.setItem("TokenJayAdmin", JSON.stringify(this.state.TokenAdmin));
    };

    // Done
    Login = (e) => {
        e.preventDefault();
        let email = document.getElementById("EmailLogin").value;
        let pass = document.getElementById("PassLogin").value;
        if(email === "" || pass === ""){
            alert('Please, Complete the data !')
        }else {
            document.querySelector(".loading").classList.remove("hideloader");
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({"email":email,"password":pass});

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${Url}/api/admin/login`, requestOptions)
            .then(response => {
                let data = "";
                if(response.status !== 200){
                    data = {message:110}
                }else {
                    data = response.json();
                    console.log("success");
                }
                return data
            })
            .then(result => {
                document.querySelector(".loading").classList.add("hideloader");
                if(result.message !== 110){
                    this.setState({
                        activeAdmin: true,
                        TokenAdmin: result.token
                    }, () => {
                        this.Synch();
                    })
                    alert('تم التسجيل بنجاح');
                    window.location.replace(window.origin + "/")
                } else {
                    alert('حدث خطا من فضلك حاول مرة اخري')
                }
            })
            .catch( () => {
                document.querySelector(".loading").classList.add("hideloader");
                alert('حدث خطا من فضلك حاول مرة اخري')
            });
        }
    }
    Logout = () => {
        localStorage.removeItem('ActiveJayAdmi');
        localStorage.removeItem('TokenJayAdmin');
        this.setState({
            activeAdmin : !this.state.activeAdmin
        }, () => {
            window.location.replace(window.origin + "/")
        })
    }



    // Done
    Invitation = () => {
        let email = document.getElementById('titleInvitation').value;
        let msg = document.getElementById('msgInvitation').value;
        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
        if(email === "" || msg === "") {
            alert();
        }else {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${Token}`);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"email":email,"message":msg});

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch(`${Url}/api/admin/restaurants/invitation`, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(result.message);
                document.getElementById('titleInvitation').value = "";
                document.getElementById('msgInvitation').value = "";
            })
            .catch(error => alert(error.message) );
        }
    }

    // Done
    getResturants = () => {
        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);
        myHeaders.append("Content-Type", "application/json");
        let data = JSON.stringify({"status": "approved"});

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch(`${Url}/api/admin/restaurants`, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                Resturants: result.restaurants
            })
        })
        .catch(error => console.log('error', error));
    }

    // Done
    getResturantsDeActive = () => {
        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);
        myHeaders.append("Content-Type", "application/json");
        let data = JSON.stringify({"status": "deactivated"});

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch(`${Url}/api/admin/restaurants`, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                ResturantsDeActivation: result.restaurants
            })
        })
        .catch(error => console.log('error', error));
    }
    
    // Done and Done Del For me
    DelResturants = (id) => {
        let Arr = [...this.state.ResturantsActivation];
        let newArr = Arr.filter(item => item.id != id);
        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);
        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${Url}/api/admin/restaurants/delete?rest_id=${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            this.setState({
                ResturantsActivation: newArr 
            })
        })
        .catch(error => {
            alert('error', error);
            console.log('error', error);
        });
    }


    // Done Come
    ResturantsActiveFun = (id) => {
        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);
        myHeaders.append("Content-Type", "application/json");
        let data = JSON.stringify({"status": "activated"});

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch(`${Url}/api/admin/restaurants`, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                ResturantsActivation: result.restaurants
            })
        })
        .catch(error => console.log('error', error));
    }

    // Done
    getAllOffers = () => {
        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);
        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`${Url}/api/admin/offers`, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                AprovedOffer: result.approved_offers,
                RquestesOffer: result.requested_offers,
            })
        })
        .catch(error => console.log('error', error));
    }


   // Done All Version
    getAllOrders = (from = '2021-02-16',to = '2021-02-16T18:11:45.408+00:00') => {
        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
        let from_date = from.toISOString().split('T')[0];
        let to_date = to.toISOString().split('T')[0];
        var data = {"from_date":from_date.toString(),"to_date":to_date.toString()};
        var config = {
            method: 'post',
            url: `${Url}/api/admin/orders`,
            headers: { 
                'Authorization':  `Bearer ${Token}`, 
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
            .then(function (response) {
                
                return response.data.orders;
            }).then( (data) => {
                this.setState({
                    OrdersTimes: data
                })
            } )
            .catch(function (error) {
                console.log(error);
            });
    }


    // Done All Version
    CreateNewOfferByAdmin = () => {
        let name = document.getElementById('nameAdminOffer').value;
        let desc = document.getElementById('descAdminOffer').value;
        let img = document.getElementById("img-replace-new-Admin").src;
        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));

        if(name === "" || desc === ""){
            alert('Please, Complete Data');
        }else {
            document.querySelector(".loading").classList.remove("hideloader");
            let myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${Token}`);
            myHeaders.append("Content-Type", "application/json");
            let data = JSON.stringify({"image": img,"name": name,"description": desc})
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: data,
                redirect: 'follow'
            };
        
            fetch(`${Url}/api/admin/offers`, requestOptions)
            .then(response => response.json())
            .then(result => {
                document.querySelector(".loading").classList.add("hideloader");
                alert(result.message);
                this.getAllOffers();
                document.getElementById('nameAdminOffer').value = "";
                document.getElementById('descAdminOffer').value = "";
                document.getElementById("img-replace-new-Admin").src = LikeImg;
            })
            .catch(error =>{
                alert(error)
                console.log('error', error)
            });
        }
    }

    // Done All Version
    DelOfferById = (id) => {
        let AllOffers = [...this.state.AprovedOffer];
        let AllOffersReq = [...this.state.RquestesOffer];
        let FindApprov = AllOffers.find(item => item._id === id);

        let Token = JSON.parse(localStorage.getItem('TokenJayAdmin'));
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);
        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${Url}/api/admin/offers?offer_id=${id}`, requestOptions)
        .then(response => {
            let data;
            if(response.status === 200){
                data = response.json();
            }else {
                data = { message: `Error This Status = ${response.status}`, status: 2021 }
            }
            return data;
        })
        .then(result => {
            if(result.status === 2021){
                alert(result.message);
            }else {
                alert(result.message);
                if(FindApprov === undefined){
                    let newReq = AllOffersReq.filter(item => item._id != id);
                    this.setState({
                        RquestesOffer: newReq
                    })
                }else {
                    let newAp = AllOffers.filter(item => item._id != id);
                    this.setState({
                        AprovedOffer: newAp
                    })
                }
            }
        })
        .catch(error => {
            alert('error', error);
            console.log('error', error);
        });
    }





    // **********************************Done

    Approvition = (id) => {
        let Arr = [...this.state.Resturants];
        let newArr = Arr.filter(item => item.id != id);
        var FormData = require('form-data');
        var data = new FormData();

        var config = {
            method: 'put',
            url: `${Url}/api/admin/restaurants/approvation?rest_id=${id}`,
            headers: { 
                'Authorization':  `Bearer ${Token}`, 
                data
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            alert(response.data.message)
        }).then(() => {
            this.setState({
                Resturants: newArr
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    Activation = (id) => {
        let Arr = [...this.state.ResturantsDeActivation];
        let newArr = Arr.filter(item => item.id != id);
        var FormData = require('form-data');
        var data = new FormData();

        var config = {
            method: 'put',
            url: `${Url}/api/admin/restaurants/activation?rest_id=${id}`,
            headers: { 
                'Authorization':  `Bearer ${Token}`, 
                data
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            alert(response.data.message);
        }).then(() => {
            this.setState({
                ResturantsDeActivation: newArr
            }, () => {
                this.ResturantsActiveFun()
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    DeletingResturant = (id) => {
        let Arr = [...this.state.Resturants];
        let newArr = Arr.filter(item => item.id != id);
        var config = {
            method: 'delete',
            url: `${Url}/api/admin/restaurants/delete?rest_id=${id}`,
            headers: { 
                'Authorization':  `Bearer ${Token}`, 
            },
        };
        axios(config)
            .then(function (response) {
                alert(response.data.message)
            }).then(() => {
                this.setState({
                    Resturants: newArr
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    DeActivation = (id) => {
        let Arr = [...this.state.ResturantsDeActivation];
        let newArr = Arr.filter(item => item.id != id);
        var config = {
            method: 'put',
            url: `${Url}/api/admin/restaurants/deactivation?rest_id=${id}`,
            headers: { 
                'Authorization':  `Bearer ${Token}`, 
            },
        };
        
        axios(config)
        .then(function (response) {
            alert(response.data.message);
        }).then(() => {
            this.setState({
                ResturantsDeActivation: newArr 
            }, () => {
                this.ResturantsActiveFun();
                this.getResturantsDeActive();
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    handelSearch = (e) => {
        let value = e.target.value;
        let Searching = [...this.state.AprovedOffer];
        let items = Searching.filter(item => item.name === value)
        if(value !== ""){
            this.setState({
                AprovedOffer: items
            })
        }else {
            this.getAllOffers()
        }
    }

    render() {
        return (
        <JayAdminContext.Provider
            value={{
                ...this.state,
                Login: this.Login,
                Logout: this.Logout,
                Invitation: this.Invitation,
                DelResturants: this.DelResturants,
                ResturantsActiveFun: this.ResturantsActiveFun,
                ReActiveResturants: this.ReActiveResturants,
                getAllOrders: this.getAllOrders,
                CreateNewOfferByAdmin: this.CreateNewOfferByAdmin,
                DelOfferById: this.DelOfferById,
                Approvition: this.Approvition,
                DeletingResturant: this.DeletingResturant,
                DeActivation: this.DeActivation,
                Activation: this.Activation,
                handelSearch: this.handelSearch
            }}
        >
            {this.props.children}
        </JayAdminContext.Provider>
        );
    }
    }

// const QafeerConsumer = QafeerContext.Consumer;

export { JayAdminProvider, JayAdminContext };
