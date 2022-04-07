
import {BrowserRouter as Router, Switch, Link, useParams} from 'react-router-dom';
import React, { useState } from 'react';
import './work.scss';
import img8 from './img8.png';
import img9 from './img9.png';
import img10 from './img10.png';
import img3 from './img3.png';
import blog2 from './blog2.png';

const Blog=()=> {
  const {loggedinuser} =  useParams();
  //console.log("loggedinuser is: "+loggedinuser);
  
  //console.log("loggedin is: "+loggedinuser.name());
  return (
   <>

    <main className="container">
    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark work_bg-custom">
      <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">LifeStyle Decisions you can never go wrong about</h1>
        <p className="lead my-3"> Lorem Ipsum Aliqua eiusmod ex et enim nulla consectetur excepteur voluptate.</p>
        <p className="lead mb-0"><Link  to="/blog/post" className="text-white fw-bold">Continue reading...</Link></p>
      </div>
    </div>
  
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">World</strong>
            <h3 className="mb-0">Working and Parenting</h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto"> Lorem Ipsum Culpa veniam aliqua adipisicing ad sunt Amet.</p>
            <Link  to="/blog/post" className="stretched-link">Continue reading</Link>

            <img src={img8} className="col-auto d-lg-none work_cardimage-custom " >

           </img>
          </div>
          <div className="col-auto d-none d-lg-block">
           <img src={img8} className="work_cardimage-custom " >

           </img>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">How Healthy do you Eat</h3>
            <div className="mb-1 text-muted">Nov 11</div>
            <p className="card-text mb-auto">Lorem Ipsum Amet Lorem voluptate do cillum veniam laborum nisi.
            </p>
                <Link  to="/blog/post" className="stretched-link">Continue reading</Link>

            <img src={img9} className=" col-auto d-lg-none work_cardimage-custom " >
          </img>
          </div>
          <div className="col-auto d-none d-lg-block">
          <img src={img9} className="work_cardimage-custom " >
          </img>
          </div>
        </div>
      </div>
    </div>
  
    

    <div className="row g-5">
        <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              All Blog Posts
            </h3>

            <article className="blog-post work_article-custom mb-5">
                <div className="work_article-custom-div">
                    <img className="work_article-custom-img" src={img10}  />
                    <div className="work_article-custom-post-div ">
                    <Link to="/blog/post" className="work_article-custom-link"><h2 className="blog-post-title ">Healthy Lifestyle Changes</h2></Link>
                      <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
              
                      <p> Blogging about various .. Lorem do proident ad esse est in consectetur sint anim officia commodo qui consequat elit. Do ut pariatur elit non voluptate velit ad enim in voluptate cupidatat. Enim est nostrud nostrud dolor in anim sint cupidatat nisi enim aute ex. Culpa elit excepteur id nostrud amet elit nisi cillum.</p>
                      <hr />
                      <p > Quis sint proident aliqua aliquip in anim voluptate ullamco. Enim enim consectetur qui pariatur mollit sint qui occaecat nostrud laborum laboris. Nisi ad cillum ullamco exercitation. Irure fugiat fugiat pariatur occaecat qui tempor labore cupidatat. Labore excepteur ut pariatur minim quis quis incididunt cupidatat. Sint amet ullamco fugiat deserunt incididunt et ullamco do.</p>
                      <Link  to="/blog/post"> Learn More </Link>
                    </div> 
                </div>

            </article>

            <article className="blog-post work_article-custom mb-5">
                <div className="work_article-custom-div">
                    <img className="work_article-custom-img" src={blog2}  />
                    <div className="work_article-custom-post-div ">
                      <Link to="/blog/post" className="work_article-custom-link"><h2 className="blog-post-title ">Family Time</h2></Link>
                      <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
              
                      <p>This blog post shows some ..Eu nulla nisi culpa duis dolore do. Esse incididunt pariatur laborum ex ea ex proident dolor fugiat excepteur labore. Et duis ipsum labore do ullamco quis officia est aliquip officia qui ad. Velit consequat pariatur incididunt et. Aliqua do pariatur deserunt ex do minim Lorem veniam sint velit consequat consectetur incididunt. Dolor consectetur cupidatat ea sint id consectetur aute magna officia adipisicing ut mollit ut ipsum.</p>
                      <hr />
                      <p > Aliqua est reprehenderit sunt occaecat incididunt eiusmod aliquip esse. Anim eiusmod elit anim in cupidatat ipsum mollit exercitation cupidatat. Minim commodo incididunt eu deserunt exercitation eu in id magna magna. Irure pariatur incididunt aliquip in. Officia proident incididunt voluptate cupidatat sint culpa aliqua laboris ut eiusmod. Enim anim aliquip do cupidatat amet aliquip ex exercitation sunt incididunt do irure est.</p>
                      <Link  to="/blog/post"> Learn More </Link>
                    </div> 
                </div>

            </article>

            <article className="blog-post work_article-custom mb-5">
                <div className="work_article-custom-div">
                    <img className="work_article-custom-img" src={img3}  />
                    <div className="work_article-custom-post-div ">
                    <Link  to="/blog/post" className="work_article-custom-link"><h2 className="blog-post-title ">Mental Health Awareness</h2></Link>
                      <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
              
                      <p>This topic is a very delicate .. Magna duis duis dolore laborum excepteur officia qui enim magna occaecat proident proident excepteur sit. Ipsum sint officia culpa ut proident proident id nisi ea. Id exercitation dolor eiusmod voluptate mollit non occaecat dolore id eu Lorem anim. Adipisicing officia magna anim sit et sit officia dolor proident esse officia dolore qui.</p>
                      <hr />
                      <p > Tempor labore veniam fugiat magna consequat aliqua elit exercitation consectetur excepteur. Incididunt in consequat sunt magna in consequat proident excepteur aliquip reprehenderit. Nulla consectetur anim est quis nostrud quis cillum ullamco proident in incididunt dolore velit deserunt. Pariatur in esse aliquip voluptate. Do dolor sit laboris consectetur nostrud.</p>
                      <Link  to="/blog/post"> Learn More </Link>
                    </div> 
                </div>

            </article>
          
  
    </div>
  
      <div className="col-md-4">
        <div className="position-sticky" style={{top: 2}}>
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="fst-italic">About</h4>
            <p className="mb-0">This blog page discusses basic lifestyle issues ranging from family to parenthood to fashion and even food blogs. </p>
          </div>
  
          <div className="p-4">
            <h4 className="fst-italic">Browse Our Archives</h4>
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

export default Blog;
