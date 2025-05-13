import ReactLogo from '../assets/images/React_Logo.png';
import HtmlLogo from '../assets/images/HTML5_logo.png';
import CssLogo from '../assets/images/CSS3_logo.png';
import BootstrapLogo from '../assets/images/Bootstrap_logo.png';
import JsLogo from '../assets/images/js_logo.png';
import './Profile.css';

export default function Profile() {
    return (
        <section id="profile">
    <div className="gameboy-container">
    <div className="screen-container">
      <div className="screen-headline">
        <span>PROFESSIONAL PROFILE</span>
      </div>

      <div className="battery-light">
        <span>BATTERY</span>
      </div>

      <div className="screen">
        <div className="inner-screen">

        </div>
        <div>
        //   <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i>: Select <br /> A: Confirm  B: Back</p>
        </div>
      </div>
    </div>

    <div id="controller">

      <div className="buttons-a-b">
        <div className="button-b button-key-j" id="controller_b"></div>

        <div className="button-a button-key-k" id="controller_a"></div> 
      </div>

      <div className="cross-container">
        <div className="spike"><div></div></div>
        <div className="spike"><div></div></div>
        <div className="spike"><div></div></div>
        <div className="spike"><div></div></div>

        <div className="cross" id="controller_dpad">
          <div className="top-down">
            <div className="button-top button-key-w" id="controller_up">
              <div className="button-stripe"></div>
              <div className="button-stripe"></div>
              <div className="button-stripe"></div>
            </div>
            <div className="button-bottom button-key-s" id="controller_down">
              <div className="button-stripe"></div>
              <div className="button-stripe"></div>
              <div className="button-stripe"></div>
            </div>
          </div>

          <div className="left-right">
            <div className="button-left button-key-a" id="controller_left">
              <div className="button-stripe"></div>
              <div className="button-stripe"></div>
              <div className="button-stripe"></div>
            </div>
            <div className="button-right button-key-d" id="controller_right">
              <div className="button-stripe"></div>
              <div className="button-stripe"></div>
              <div className="button-stripe"></div>
            </div>
          </div>
          <div className="cross-middle-bumb"></div>
        </div>
      </div>

    </div>
  </div>
  <div className="language-logos">
    <a><img className="code-logo" src={HtmlLogo} alt="html logo" height="100px" /></a>
    <a><img className="code-logo" src={CssLogo} alt="css logo" height="100px" /></a>
    <a><img className="code-logo" src={JsLogo} alt="javascript logo" height="100px" /></a>
    <a><img className="code-logo" src={BootstrapLogo} alt="bootstrap logo" height="100px" /></a>
    <a><img className="code-logo" src={ReactLogo} alt="react logo" height="100px" /></a>
  </div>
  </section>
    )
}