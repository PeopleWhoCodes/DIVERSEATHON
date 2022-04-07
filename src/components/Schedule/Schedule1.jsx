import './Schedule1.css';
import  Registration from '../../assets/img/Registration.png';
import  Crowd from '../../assets/img/Crowd.png';
import  Event_Accepted_Tentatively from '../../assets/img/Event_Accepted_Tentatively.png';
import  Laurel_Wreath from '../../assets/img/Laurel_Wreath.png';
import  Source_Code from '../../assets/img/Source_Code.png';
import  Public_Speaking from '../../assets/img/Public_Speaking.png';
import  Leaderboard from '../../assets/img/Leaderboard.png';



 const Schedule1 =()=>{

    return(<>
    

    <div className="mainshedule " >
        <h1 id="heading">SCHEDULE</h1>
  <p id="headingpara"> Here is the schedule of the Hackathon </p>
        
          <div className="schedule">
              <div className="schedule-wrapper">
                   <div className="schedule-yr">
                         <img src={Registration} className="images" />
                   </div>
                   <div className="circle"></div>         
                   <div className="schedule-info">
                        <h3>25 March, 2022</h3>
                        <p className="para">Registration starts</p>
                   </div>
              </div>

              <div className="schedule-wrapper">
                  <div className="schedule-yr">
                    <img src={Crowd} className="images" />
                  </div>
                  <div className="circle"></div>
                
                  <div className="schedule-info">
                      <h3>25th April, 2022</h3>
                      <p className="para">Team formation</p>
                  </div>
              </div>

              <div className="schedule-wrapper">
                  <div className="schedule-yr">
                    <img src={ Event_Accepted_Tentatively} className="images" />
                  </div>
                  <div className="circle"></div>
                  <div className="schedule-info">
                      <h3>25th May, 2022</h3>
                      <p className="para">Pre hackathon event starts</p>
                      
                  </div>
              </div>
              
              <div className="schedule-wrapper">
                  <div className="schedule-yr">
                    <img src={Laurel_Wreath} className="images" />
                  </div>
                  <div className="circle"></div>
                  <div className="schedule-info">
                      <h3>23rd June, 2022</h3>
                        <p className="para">Opening ceremony</p>
                      
                  </div>
              </div>

              <div className="schedule-wrapper">
                <div className="schedule-yr">
                    <img src={Source_Code} className="images" />
                </div>
                <div className="circle"></div>
                <div className="schedule-info">
                    <h3>25th June, 2022</h3>
                        <p className="para">Hackathon starts</p>
                    
                </div>
            </div>


            <div className="schedule-wrapper">
                <div className="schedule-yr">
                    <img src={Public_Speaking} className="images" />
                </div>
                <div className="circle"></div>
                <div className="schedule-info">
                    <h3>26th June, 2022</h3>
                        <p className="para">Final pitch & closing ceremony</p>

                </div>
            </div>

            <div className="schedule-wrapper">
                <div className="schedule-yr">
                    <img src={Leaderboard} className="images" />
                </div>
                <div className="circle"></div>
                <div className="schedule-info">
                    <h3>29th June, 2022</h3>
                        <p className="para">Winners Announcement</p>
                    
                </div>
            </div>


          </div>
      </div>

    </>);
 }

 export default Schedule1;