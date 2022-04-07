import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/dashboard/Dashboard';

import ProfileForm from './Components/profile-forms/ProfileForm';
import AddExperience from './Components/profile-forms/AddExperience';
import AddEducation from './Components/profile-forms/AddEducation';
import Profiles from './Components/profiles/Profiles';
import Profile from './Components/profile/Profile';
import ProfileAbout from './Components/profile/ProfileAbout';

import Nav from './Components/Nav/Nav';
import Navnew from './Components/Nav/Navnew';
import Footer from './Components/Footer/Footer';
import Sitemap from './Components/Footer/Sitemap';
import Login from './Components/UserAccess/Login';
import Register from './Components/UserAccess/Register';
import NavRegister from './Components/UserAccess/NavRegister';
import NavLogin from './Components/UserAccess/NavLogin';
import Posts from './Components/UserAccess/--Posts';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Booking from './Components/Booking/Booking';
import BlogDetails from './Components/BlogDetails/BlogDetails';
//Redux
import {Provider} from 'react-redux';
import store from './store';

import './App.css';

function App() {

  const [comments,setComments]=useState([{
    commenter:'',
    commentDate:'',
    comment:''
  }]);

  const [post,setPost]=useState([{
    postCreator:'',
    postDate:'',
    postTitle:'',
    imgUrl:''
  }]);

const submitPost=()=>{

}

const onRegisterChange=(eventItem)=>{
console.log(eventItem);
}

const submitComment=(comment, commenter)=>{
  /* console.log(comment);
  console.log(commenter); */

  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//console.log(date);

  setComments(comments.concat([{
    commenter: commenter,
    commentDate:date,
    comment:comment
  }]))
  /* console.log(comments);
  console.log(comments[0].comment);
  console.log(comments[0].commenter);
  console.log(comments[0].commentDate); */
}

  return (
    <Provider store={store}>
    <Router>
      <div >
        <Header />

        <Switch> 
          <Route path="/" exact>
          <Home />
          <About />
          <Contact />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/about" >
         
          <About />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/contact" >
         
          <Contact />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/about" >
          <Nav />
          <About />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/contact" >
          <Nav />
          <Contact />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/home" >
            <Nav />
          <Blog />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/home/:loggedinuser" >
            <Nav />
          <Blog />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/post" >
            <Nav />
          <BlogDetails  comment={comments} submitPost={submitPost} submitComment={submitComment}/>
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/booking" >
            <Nav />
          <Booking />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/login" >
            <NavLogin />
          <Login />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/postssssssssss" >
            <Nav />
          <Posts />
          </Route>
        </Switch>

        <Switch> 
          <Route path="/blog/register" >
            <NavRegister />
          <Register onRegisterChange={onRegisterChange}/>
          </Route>
        </Switch>

        <Switch> 
          <Route path="/sitemap" >
           
          <Sitemap/>
          </Route>
        </Switch>

         <Switch> 
          <Route path="/dashboard" >
           
          <Dashboard/>
          </Route>
        </Switch>

        <Switch> 
          <Route path="/create-profile" >
           
          <ProfileForm/>
          </Route>
        </Switch>

        <Switch> 
          <Route path="/edit-profile" >
            
          <ProfileForm/>
          </Route>
        </Switch>

         <Switch> 
          <Route path="/profiles" >
           
          <Profiles/>
          </Route>
        </Switch>

        <Switch> 
          <Route path="/profile" >
           
          <Profile/>
          </Route>
        </Switch>

        <Switch> 
          <Route path="/profile/about" >
           
          <ProfileAbout/>
          </Route>
        </Switch>

         <Switch> 
          <Route path="/profile/:id" >
            
          <Profile/>
          </Route>
        </Switch>


        <Footer />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
