
import {BrowserRouter as Router, Switch, Link, useParams} from 'react-router-dom';
import React, { useState } from 'react';
import BlogComments from '.././BlogComments/BlogComments';
import './blogdetails.scss';
import img8 from './img8.png';
import img9 from './img9.png';
import img10 from './img10.png';
import img3 from './img3.png';
import blog2 from './blog2.png';

const BlogDetails=({submitComment, comment})=> {


  //const {loggedinuser} = useParams();
//console.log("loggedinuser is: "+loggedinuser);

  const submitReplyComment=(e)=>{
    e.preventDefault();
    if(e.target.commenter.value == ""){
      e.target.commenter.value="Anonymous";
    }
    submitComment(e.target.comment.value , e.target.commenter.value);
    e.target.comment.value="";
    e.target.commenter.value="";

//console.log(e.target.comment.value);
//console.log(e.target.commenter.value);
  }

  return (
   <>

    <main className="container">
    <div className="p-4 p-md-5  text-primary rounded bg-dark work_bg-custom">
      <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">LifeStyle Decisions you can never go wrong about</h1>
        <p className="lead my-3"> Lorem Ipsum Non ad esse cillum et fugiat.</p>
        <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
      </div>
    </div>
  
    
    

    <div className="row g-5">
        <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              Blog Details
            </h3>

            <article className="blog-post work_article-custom mb-5">
                <div className="work_article-custom-div">
                    <img className="work_article-custom-img" src={img10}  />
                    <div className="work_article-custom-post-div ">
                    <Link to="#" className="work_article-custom-link"><h2 className="blog-post-title ">Healthy Lifestyle Changes</h2></Link>
                      <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
              
                      <p>Nisi deserunt enim fugiat laboris anim. Incididunt amet Lorem commodo elit exercitation dolore et velit velit esse fugiat veniam eiusmod. Ea Lorem Lorem excepteur excepteur veniam dolore elit labore elit proident irure dolore aliqua ullamco.</p>
                      <hr />
                      <p > Ad ex mollit aliqua aliqua mollit aliqua reprehenderit minim irure. Deserunt magna nisi dolor incididunt voluptate dolore eu eiusmod. Lorem cupidatat duis duis cupidatat. Nisi culpa dolore et id cillum elit Lorem do.</p>
                      <p > Magna dolore occaecat duis officia. Quis quis aliqua incididunt ad commodo do enim proident aliqua elit aliquip fugiat mollit do. Ad exercitation nisi exercitation aliquip nisi minim sint. Occaecat aliquip nisi amet aliquip Lorem duis cupidatat eu aute sint elit et.</p>
                      <p > Ea sunt dolor minim reprehenderit. Mollit quis irure est mollit deserunt incididunt laboris eiusmod laboris excepteur velit enim. Incididunt culpa minim excepteur nostrud.</p>
                      <p > Ex consequat ullamco dolor dolor pariatur ex laboris tempor voluptate irure irure veniam. Enim ut aute in tempor occaecat ex cillum minim pariatur dolor. Esse pariatur commodo eu ullamco laborum consequat nostrud occaecat ut laborum occaecat est. Officia duis ad excepteur exercitation laborum non dolore ad culpa adipisicing consectetur proident. Magna ex mollit ad pariatur. Cillum dolore Lorem dolore amet ad deserunt duis officia veniam voluptate et nisi anim consectetur.</p>
                      
                    </div> 
                </div>

            </article>

           
      <div  className="card mb-3 comment_card-custom" >
		<div className="row g-5">
			<div className="col-md-4">
				<img src={img3} className="img-fluid rounded-start" alt="..." />
			</div>
			<div className="col-md-8">
				  <div className="card-body">
					<hr/>
           <h5>COMMENTS</h5>
           <hr/>
          

					<p className="card-text">Commenting on above blog post..Sit pariatur id amet magna sunt do irure proident fugiat cupidatat culpa tempor nostrud.</p>
					<div className="d-md-flex flex-row ">
               <p className="card-text me-2"><small className="text-muted">12-10-2021</small></p>
               <p className="card-text ms-2"><small className="text-muted">Jane Dee</small></p>
				  </div>
          
         
          
          

         {
          comment.map((item,i) =>{
           return(
             <div>
              <p className="card-text">{item.comment}</p>
              <div className="d-md-flex flex-row ">
                  <p className="card-text me-2"><small className="text-muted">{item.commentDate}</small></p>
                  <p className="card-text ms-2 "><small className="text-muted">{item.commenter}</small></p>
              </div>
              <hr/>
            </div>
            
           )
           })
           }
					
      </div>

				 
       <form onSubmit={submitReplyComment} name="frmReplyComment" className="row row-cols-lg-auto g-3 align-items-center">
            <div className="row g-3">
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="validationDefault01" name="comment" required placeholder="Add Your Comment" aria-label="Your Comment" />
                </div>
                <div className="col-sm">
                  <input type="text" className="form-control" id="validationDefault02" name="commenter"     placeholder="Your Name" aria-label="Your Name" />
                </div>
               
            </div>


            <div className="col-12">
              <button type="submit" name="btnReplyComment" className="btn btn-primary">Reply</button>
            </div>
      </form>


			</div>
		</div>
  </div>

  <div className=" text-primary">
				   <input type="submit" name="postbtn" value="POST A COMMENT"></input>
				 </div>


            
  
    </div>
  
      <div className="col-md-4">
        <div className="position-sticky" style={{top: 2}}>

  <h3>Popular Posts</h3>
        <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img8} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Fashion</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                    </div>
                </div>
          </div>

          <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img9} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Food</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                    </div>
                </div>
          </div>

          <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img3} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Motherhood</h5>
                             <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                    </div>
                </div>
          </div>

          <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img3} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                          <div class="card-body">
                            <h5 className="card-title">Lifestyle</h5>
                             <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                    </div>
                </div>
          </div>

          



          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="fst-italic">About</h4>
            <p className="mb-0">This blog page discusses basic lifestyle issues ranging from family to parenthood to fashion and even food blogs.</p>
          </div>
  
          <div className="p-4">
            <h4 className="fst-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              <li><a href="#">March 2021</a></li>
              <li><a href="#">February 2021</a></li>
              <li><a href="#">January 2021</a></li>
              <li><a href="#">December 2020</a></li>
              <li><a href="#">November 2020</a></li>
              <li><a href="#">October 2020</a></li>
              <li><a href="#">September 2020</a></li>
              <li><a href="#">August 2020</a></li>
              <li><a href="#">July 2020</a></li>
              <li><a href="#">June 2020</a></li>
              <li><a href="#">May 2020</a></li>
              <li><a href="#">April 2020</a></li>
            </ol>
          </div>
  
          <div className="p-4">
            <h4 className="fst-italic">Tags</h4>
                <button type="button" className="m-2 btn btn-sm btn-outline-secondary">blog</button>
                <button type="button" className="m-2 btn btn-sm btn-outline-secondary">community</button>
                <button type="button" className="m-2 btn btn-sm btn-outline-secondary">Success</button>
                <button type="button" className="m-2 btn btn-sm btn-outline-secondary">lifestyle</button>
                <button type="button" className="m-2 btn btn-sm btn-outline-secondary">motherhood</button>
                <button type="button" className="m-2 btn btn-sm btn-outline-secondary">parenting</button>
                <button type="button" className="m-2 btn btn-sm btn-outline-secondary">fashion</button>
                <button type="button" className="m-2 btn btn-sm btn-outline-secondary">career</button>
          </div>

        </div>
      </div>
    </div>
   
  
    <nav className="mt-4" aria-label="">
      <ul className="pagination ">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
      </ul>
    </nav>

  </main>



</>

  );
}

export default BlogDetails;
