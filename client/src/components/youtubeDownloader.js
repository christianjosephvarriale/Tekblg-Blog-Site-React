import React, { Component } from 'react';
import TextInput from './textInput';
import Button from './button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../css/dinosaur.css'
import { connect } from 'react-redux';
const WOW = require("../lib/wow/wow.min.js");
const isChrome = (navigator.userAgent.toLowerCase().indexOf('chrome') > -1);

const styles = {
    container: {
      width: '90%',
      marginTop: '150px',
      margin: 'auto'
    },
    vidContainer : {
      margin: '5% 0px',
      width:'100%',
      boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
    },
    margin : {
      margin: 20
    },
    buttonPositioning : {
      display: 'flex',
      justifyContent: 'center',
      padding: 30
    },
  };  

let pollingFuncId;

class YoutubeDownloader extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        url: 'https://www.youtube.com/watch?v=ZnEsG3Kaz6A',
        loading: false,
        progress: 0.00,
        id: null
      };
    }

    handleSubmit = () => {
      document.getElementById("paypal").submit();
    }

    handleChange = url => event => {
        this.setState({
            [url]: event.target.value
        });
    };

    componentDidMount() {

      new WOW().init()
      window.onkeydown = function(e){
        return !(e.keyCode == 32);
      }
    }

    handlePolling = async () => { /* Polls the database to check the progress */
        let res;
        try {
            res = await axios.get(`/tools/get_progress/${this.state.id}`)
        } catch (error) {
            throw Error(error)
        }

        console.log(res.data)

        if ( res.data != 100 ) { /* update the percentage loaded */
            const progress = ( res.data )
            this.setState({
                progress: progress

            })
        } else if ( res.data == 100 ) {

            window.location.href = `https://tekblg.com/tools/get_video/${this.state.id}`;
              
            this.setState({
                loading: false,
                id: null
            });

            clearInterval(pollingFuncId);
        }
    }

    handleDownload = async () => {
          
        const res = await axios.post('/tools/download', {
          url: this.state.url,
        })

        const vidId = res.data.id

        this.setState({
          loading: true,
          id: vidId
        })

        pollingFuncId = setInterval( this.handlePolling, 1000 ); 

      }
  

    render() {
        
        const { classes } = this.props;
        if (this.state.loading) {

            let loader;

            if ( isChrome ) {

              loader = ( 
                <>
                <Helmet>
                  <script onLoad="document.querySelector('.runner-container').style.top = '300px'"src="https://cdn.elg.im/t-rex/scripts/runner.js"></script>
                  <script async defer src="https://cdn.elg.im/js/script.js"></script>
                </Helmet>

                  <header style={{marginBottom: 30}}>
                    <h1 style={{textAlign:'center'}}>T-Rex, Run!</h1>
                    <p style={{textAlign:'center'}}>The Google dinosaur game(T-rex game) <br />Press <strong> Space </strong> to jump.</p>
                  </header>
               
                  <div style={{padding:20}}></div>
                    <div id="main-frame-error" class="interstitial-wrapper" jstcache="0">
                  <img class="icon icon-offline" jseval="updateIconClass(this.classList, iconClass)" jstcache="1" style={{visibility: "hidden"}} />
                    </div>
                    <div id="offline-resources" jstcache="0">
                        <div id="offline-resources-1x" jstcache="0">
                            <img id="1x-obstacle-large" src="https://cdn.elg.im/t-rex/img/1x-obstacle-large.png" jstcache="0" />
                            <img id="1x-obstacle-small" src="https://cdn.elg.im/t-rex/img/1x-obstacle-small.png" jstcache="0" />
                            <img id="1x-cloud" src="https://cdn.elg.im/t-rex/img/1x-cloud.png" jstcache="0" />
                            <img id="1x-text" src="https://cdn.elg.im/t-rex/img/1x-text.png" jstcache="0" />
                            <img id="1x-horizon" src="https://cdn.elg.im/t-rex/img/1x-horizon.png" jstcache="0" />
                            <img id="1x-trex" src="https://cdn.elg.im/t-rex/img/1x-trex.png" jstcache="0" />
                            <img id="1x-restart" src="https://cdn.elg.im/t-rex/img/1x-restart.png" jstcache="0" />
                        </div>
                        <div id="offline-resources-2x" jstcache="0">
                            <img id="2x-obstacle-large" src="https://cdn.elg.im/t-rex/img/2x-obstacle-large.png" jstcache="0" />
                            <img id="2x-obstacle-small" src="https://cdn.elg.im/t-rex/img/2x-obstacle-small.png" jstcache="0" />
                            <img id="2x-cloud" src="https://cdn.elg.im/t-rex/img/2x-cloud.png" jstcache="0" />
                            <img id="2x-text" src="https://cdn.elg.im/t-rex/img/2x-text.png" jstcache="0" />
                            <img id="2x-horizon" src="https://cdn.elg.im/t-rex/img/2x-horizon.png" jstcache="0" />
                            <img id="2x-trex" src="https://cdn.elg.im/t-rex/img/2x-trex.png" jstcache="0" />
                            <img id="2x-restart" src="https://cdn.elg.im/t-rex/img/2x-restart.png" jstcache="0" />
                        </div>
                    </div>
                    <div id="audio-resources" jstcache="0">
                      <audio id="offline-sound-press" src="https://cdn.elg.im/t-rex/sounds/offline-sound-press.mp3"></audio>
                      <audio id="offline-sound-hit" src="https://cdn.elg.im/t-rex/sounds/offline-sound-hit.mp3"></audio>
                      <audio id="offline-sound-reached" src="https://cdn.elg.im/t-rex/sounds/offline-sound-reached.mp3"></audio>
                </div> </> )
            } else {
              loader = (
                <div style={{height: '70vh'}}id="animationWindow">
                <div class='legoContainer'>
                <div class='lego lego-4'>
                <div class='circles circles-1'></div>
                <div class='circles circles-2'></div>
              </div>
              <div class='lego lego-3'>
                <div class='circles circles-1'></div>
                <div class='circles circles-2'></div>
              </div>
              <div class='lego lego-2'>
                <div class='circles circles-1'></div>
                <div class='circles circles-2'></div>
              </div>
              <div class='lego lego-1'>
                <div class='circles circles-1'></div>
                <div class='circles circles-2'></div>
              </div>
              <div class='lego lego-0'>
                <div class='circles circles-1'></div>
                <div class='circles circles-2'></div>
              </div>
              </div>
              </div>
              )
            }
          
            return (
              <div style={{marginBottom: 80}} className={classes.container}>

                <h2 style={{textAlign: 'center' }}> We are Loading some awesome data for you </h2>
                <LinearProgress style={{width: '100%'}} color="secondary" variant="determinate" value={this.state.progress} />

                { loader }

              </div>
            )
        } else {

            setTimeout(() => { /* callback to remove runner container */
              var elem = document.querySelector('.runner-container');
              if (elem) { elem.parentNode.removeChild(elem) }
            }, 0)

            let body;
            if ( this.props.mobile ) {
              body = ( <p> Sorry, this application only works on Desktop </p> )
            } else {
              body = (
                <>
                <h1 style={{textAlign: 'center' }}>Youtube Video Downloader Tool</h1>

                <p style={{textAlign: 'center' }} className={classes.margin}>
                  Enter a url to download a video from. We will download the highest resolution available ( It's super quick )
                </p>
                <TextInput handleChange={this.handleChange} name={'url'} value={this.state.url} />
                
                <div style={{display:'flex', justifyContent: 'center', margin: 30}}>
                  <Button label={'Download'} handleClick={this.handleDownload}/>
                </div>

                <p style={{textAlign: 'center' }}> Although the application is free, there is a cost for the maintenance of this great application. Any donations are appreciated. Sincerely, the Tekblg Team </p>

                <form id="paypal" className={classes.buttonPositioning} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="KU96VMCNZELB6" />
                <Button handleClick={this.handleSubmit} label={'Donate'}/>
                </form>
                </>
              )
            }

            return ( 
                <div className={classes.container}>  

                    <Helmet>
                      <link href="https://cdn.elg.im/css/style.css" rel="stylesheet" />
                      <meta name="description" content="Youtube Downloader perfect to download all your favourite videos from youtube with a safe, no ads site" />
                    </Helmet>

                    { body }

                </div>
            )
        }
    }
}

const mapStateToProps = state => (
  { 
      mobile: state.AppReducer.mobile
  }
)

export default connect(mapStateToProps, { })(withStyles(styles)(YoutubeDownloader));