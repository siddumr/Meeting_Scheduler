import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
import DateRangeCalendarCalendarsProp from "./MyCalendar";
import Button from "./Button";
import Field from "./Field";
import './image.css';
import './Button.css';
import Card from "./Card";
import Ani from "./Ani";
import DownloadButton from "./Download";
import DownloadButton1 from "./Download1";







function Home()
{
    return(
        <div>
        <Navbar/>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{marginTop:'70px',marginLeft:'150px',width:'548px'}} >
        <h1>Premium video meetings.<br></br>Now free for everyone</h1>
        <br></br>
        <p>Virtualvisa helps you communicate across the continuum of communication methods to foster collaboration and enable your hybrid workforce to stay connected and agile.
        In addition to helping ease Return to the Office/Classroom, powering Hybrid Work/Learning and enhancing general Collaboration & Communication, Virtualvisa is extending our solution focus into industry-specific mission critical, business critical and operational critical applications.</p>
        </div>
        <div style={{marginTop:'70px'}}>
        <img style={{ 
        width: '600px',
        height: '400px',
        borderRadius: '100px',}} src="https://img.freepik.com/premium-vector/conference-meeting-online-concept-live-meeting-laptop-video-meeting-online-video-conference-landing-live-conferencing-online-meeting-workspace_149391-161.jpg?size=626&ext=jpg&uid=R115361283&ga=GA1.1.688353063.1686149813&semt=ais" className="image1"></img>
        </div>
        </div>
        
        <div style={{display:'flex',flexDirection:'row'}}>
        <Field></Field>
        
        <Button></Button>
        <h2 style={{marginLeft:'250px',marginTop:'70px',color:"red"}}>Compatible In All Type Of Devices</h2>
        </div>
        
        <h1 style={{marginLeft:"200px",marginTop:'100px',color:'blue'}}>Powering organizations across industries and geographies</h1>
        <Card></Card>
        <Slider></Slider><br></br>
        <div className="main">
         <img src='https://img.freepik.com/free-vector/online-calendar-concept-illustration_114360-5121.jpg?size=626&ext=jpg&ga=GA1.1.1884890450.1704292968&semt=sph' style={{height:'500px',width:'500px'}}></img>
        <DateRangeCalendarCalendarsProp></DateRangeCalendarCalendarsProp><br></br>
       <div>
       <a href="https://Doodle.com/" ><button class="shadow__b">
       Schedule Event Here
   </button></a>
          <a href="https://Doodle.com/" ><button class="shadow">
       View Scheduled Event
   </button></a>
       </div>
</div>
<div>
<img src='Trust.jpg' style={{height:'25%',width:'85%',marginBottom:'100px',borderRadius:'50px'}}></img>
</div>
<Ani></Ani>
<DownloadButton></DownloadButton>
<DownloadButton1></DownloadButton1>
        <Footer></Footer>
    
   
    
    </div>
   );
}

export default Home;