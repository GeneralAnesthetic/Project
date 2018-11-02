// import React from "react";
// import PropTypes from 'prop-types';
// Import Login from "./Login/Login";
// Import AddFishForm from "./AddFishForm";
// import EditFishForm from "./EditFishForm";
// import firebase from "firebase";
// import base, {firebaseApp} from "./Base/Base";

// class PortfolioLogin extends React.Component {
//     static propTypes = {
//         fishes: PropTypes.object,
//         updateFish: PropTypes.func,
//         deleteFish: PropTypes.func,
//         loadSampleFishes: PropTypes.func
//     };

// state = {
//     uid: null,
//     owner: null

// };
// componentDidMount(){
//     firebase.auth().onAuthStateChanged(user => { if(user){
//         this.authHandler({user});
//     } })
// }

//     authHandler = async (authData) => {
//         // get GitHub username
// const loginName =await base.fetch(this.props.loginId, {context: this});
// console.log(loginName);
// if(!loginName){alert("You Must First Login to Github!")} else{
//     await base.post(`${this.props.loginId}/owner`, { data: authData.user.uid
   
// });
// }
//     // set state to reflect username
//     this.setState({
//         uid:authData.user.uid,
//         owner: loginName.owner || authData.user.uid

//     })
//     console.log(authData);
//     }

// authenticate = provider =>{const authProvider= new firebase.auth[`${provider}AuthProvider`]();
// firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)};

// logout = async () => {
//     console.log("Loggin Out Suckas!");
//     await firebase.auth().signOut();
//     this.setState({uid: null});

// }
//     render(){
//         const logout = <button  onClick={this.logout}></button>
//         // check if u0ser is logged in
//         if(!this.state.uid){

        
//         return<Login authenticate={this.props.authenticate} />};

//         //  check if user is "owner" in firebase
//         if(this.state.uid !== this.state.owner){return <div><p> Sorry You Are Not the Owner of the Saved Portfolio<p>{logout}</div>}

//         return(
//             <div className = "PortfolioLogin">
//             <h2> PortfolioLogin</h2>
//             {logout}
//             {Object.keys(this.props.fishes).map(key => (
//                 <EditFishForm
//                 key={key}
//                 index={key}
//                 fish={this.props.updateFish}
//                 deleteFish={this.props.deleteFish}
//                 />
//             ))}
//             <AddFishForm addFish={this.props.addFish}/>
//             <button onclick={this.props.loadSampleFishes}>
//             Load Sample Fishes</button>
//             </div>
//         );
//     }
// };
// export default PortfolioLogin