import React from 'react';
import th from './Static/th.jpg';
import first from './Static/first.jpg';
import sec from './Static/sec.jpg';
function Home() {
    return (
      <div className="content">
      <h4><b>Popular in mobiles</b></h4>
      <div class="row">
       
      <div class="col">The eyes of most tech fanatics are curious about the latest mobiles and their new or unique features.
       Blogspot serves to your curiosity and provides all the information you need to know about the recent launched and to be launched phones. 
       We cover phones from all the brands including Samsung<div>
       <button type="button" class="btn btn-secondary">Write Review</button>
         </div></div>
      <div class="col"><img src={first} width="300px" 
      class='iconDetails'></img> </div>
    </div>
    <h4><b>Popular in pc/laptops</b></h4>
    <div class="row">
       
      <div class="col">The eyes of most tech fanatics are curious about the latest mobiles and their new or unique features.
       Blogspot serves to your curiosity and provides all the information you need to know about the recent launched and to be launched phones. 
       We cover phones from all the brands including Samsung<div>
       <button type="button" class="btn btn-secondary">Write Review</button>
         </div></div>
      <div class="col"><img src={sec} width="300px" 
      class='iconDetails'></img> </div>
    </div>
    <h4><b>Foods</b></h4>
    <div class="row">
       
      <div class="col">The eyes of most tech fanatics are curious about the latest mobiles and their new or unique features.
       Blogspot serves to your curiosity and provides all the information you need to know about the recent launched and to be launched phones. 
       We cover phones from all the brands including Samsung<div>
       <button type="button" class="btn btn-secondary">Write Review</button>
         </div></div>
      <div class="col"><img src={th} width="300px" 
      class='iconDetails'></img> </div>
    </div>
     
    </div>
 
    
    )
}

export default Home
