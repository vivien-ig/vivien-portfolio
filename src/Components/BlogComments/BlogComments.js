import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './blogcomments.scss';
import img3 from './img3.png';


const BlogComments=()=> {
	return (
<>
		<div class="card mb-3 comment_card-custom" style={{maxWidth: 540}}>
		<div class="row g-0">
			<div class="col-md-4">
				<img src={img3} class="img-fluid rounded-start" alt="..." />
			</div>
			<div class="col-md-8">
				  <div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
				  </div>

				 <div className=" text-light">
				   <input type="submit" name="commentbtn" value="REPLY"></input>
				 </div>
			</div>
		</div>
  </div>

  <div className=" text-primary">
				   <input type="submit" name="postbtn" value="POST A COMMENT"></input>
				 </div>
</>
	);
}
export default BlogComments;
