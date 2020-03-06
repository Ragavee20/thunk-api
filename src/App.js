import React from 'react'
import { connect } from 'react-redux'
import thunkFunction from './action/action'
import UserInfo from './component/UserInfo'

export class App extends React.Component {
   handleSubmit = (e) => {
      e.preventDefault();
      const username = this.getUsername.value;
      this.props.dispatch(thunkFunction(username));
      this.getUsername.value = "";
   };
   render() {
      console.log(this.props.data);
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label>Enter the Github Username</label>
               <div>
                  <input
                     type="text"
                     placeholder="Enter Github Username"
                     required
                     ref={input => (this.getUsername = input)}
                  />
                  <button>Submit</button>
               </div>
            </form>
            {this.props.data.isFetching ? <h3>Loading...</h3> : null}
            {this.props.data.isError ? (<h3>No such User exists</h3>) : null}
            {Object.keys(this.props.data.userData).length > 0 ? (
               <UserInfo user={this.props.data.userData} />) : null}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      data: state
   };
};

export default connect(mapStateToProps)(App);
