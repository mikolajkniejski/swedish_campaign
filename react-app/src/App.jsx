import CookieConsent from "react-cookie-consent";
import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import { Container, Row, Col } from "react-bootstrap";

import TypeForm from "./TypeForm";
import TextBox from "./TextBox";
import MpForm from "./MpForm";
import DisplayMps from "./DisplayMps";
import SendEmail from "./SendEmail";
import IntroContent from "./IntroContent";
import ShareLinks from "./ShareLinks";

import "./App.scss";

require("dotenv").config({ path: "../.env" });

const socket = socketIOClient();

const App = () => {
  const [state, setState] = useState({
    width: window.innerWidth,
    responseId: "",
    mpData: { error: "Could not find MP", name: "", full_name: "" },
    generatedEmailBody: "Your email will appear here",
    emailSubject: "",
    positiveTypeFormResponseReturned: false,
    greeting: "",
    emailWithGreeting: "",
    emailVisible: false,
    emailSent: false,
    dropDownOpen: false,
  });

  const {
    responseId,
    mpData,
    generatedEmailBody,
    emailSubject,
    greeting,
    emailWithGreeting,
    positiveTypeFormResponseReturned,
    width,
    emailVisible,
    emailSent,
  } = state;

  const displayMpRef = useRef(null);
  const emailBoxRef = useRef(null);

  useEffect(() => {
    if (responseId) {
      socket.emit("register", responseId);
    }
  }, [responseId]);

  const generateGreetingDisplayEmail = (mp) => {
    const greetings = ["Kära", "Till", "Hej"];
    function rand(items) {
      // "|" for a kinda "int div"
      return items[(items.length * Math.random()) | 0];
    }
    const memberArray = mp.Member.split(" ");
    const lastName = memberArray[memberArray.length - 1];
    // Check if last name exists
    const firstAndLastName = memberArray[0] + " " + (lastName ? lastName : "");
    const greeting = rand(greetings) + " " + firstAndLastName + ",";

    setState((state) => ({
      ...state,
      emailVisible: true,
      greeting,
      emailWithGreeting: greeting + "\n\n" + state.generatedEmailBody,
      mpData: {
        ...state.mpData,
        mpEmailAddress: mp.Email,
        mpEmailFromGreeting: mp.Email,
      },
      // dropDownOpen: false, //Dropdown can not be closed from this point
    }));
  };

  useEffect(() => {
    socket.on("typeform-incoming", ({ generatedEmail }) => {
      setState({
        ...state,
        generatedEmailBody: generatedEmail.body,
        emailSubject: generatedEmail.subject,
        mps: generatedEmail.mps,
        mpData: generatedEmail.mpData,
        greeting: generatedEmail.greeting,
        emailWithGreeting: generatedEmail.greeting + generatedEmail.body,
        positiveTypeFormResponseReturned: generatedEmail.supportsAid,
      });
    });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://static.addtoany.com/menu/page.js";
    document.body.appendChild(script);
  }, [emailSent]);

  let isMobile = width && width <= 768;

  useEffect(() => {
    setTimeout(() => {
      const { current } = displayMpRef;
      if (current) {
        if (isMobile) {
          if (positiveTypeFormResponseReturned) {
            current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }
    }, 3000);
  }, [displayMpRef, positiveTypeFormResponseReturned]);

  //once the emailBox postcode is rendered on click of 'Continue with this MP', this scrolls the page down to it
  useEffect(() => {
    const { current } = emailBoxRef;
    current &&
      current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
  }, [emailVisible, emailBoxRef]);

  const passDataUpstream = (data) => {
    Object.keys(data).forEach((key) => {
      setState({ ...state, [key]: data[key] });
    });
  };

  return (
    <div className="main">
      <CookieConsent
        location="bottom"
        acceptOnScroll={true}
        buttonText="OK"
        cookieName="cookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Denna webbplats använder cookies och liknande tekniker för att förbättra
        användaren erfarenhet. <a href="/integritetspolicy">Läs mer.</a>
      </CookieConsent>
      <Container>
        <Row>
          <Col>
            <IntroContent />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="typeform">
              <TypeForm
                passDataUpstream={passDataUpstream}
                isMobile={isMobile}
              />
            </div>
          </Col>
        </Row>
        {positiveTypeFormResponseReturned && (
          <>
            <Row>
              <Col>
                <div ref={displayMpRef}>
                  <DisplayMps
                    mps={state.mps}
                    setState={setState}
                    generateGreetingDisplayEmail={generateGreetingDisplayEmail}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div id="mpForm" className="">
                  <MpForm
                    passDataUpstream={passDataUpstream}
                    mp={state.mpData}
                    setUpstreamState={setState}
                    upstreamState={state}
                    generateGreetingDisplayEmail={generateGreetingDisplayEmail}
                  />
                </div>
              </Col>
            </Row>
            {emailVisible && (
              <div>
                <Row>
                  <Col>
                    <div ref={emailBoxRef}>
                      <TextBox
                        passDataUpstream={passDataUpstream}
                        emailBody={emailWithGreeting}
                        subject={emailSubject}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="">
                      <SendEmail
                        mpEmailAddress={mpData.mpEmailFromGreeting}
                        body={emailWithGreeting}
                        subject={emailSubject}
                        passDataUpstream={passDataUpstream}
                      />
                    </div>
                  </Col>
                </Row>
                {emailSent && (
                  <Row>
                    <Col>
                      <h2 className="secondary-header">Thankyou!</h2>
                    </Col>
                  </Row>
                )}
              </div>
            )}
          </>
        )}
        <ShareLinks />
      </Container>
    </div>
  );
};

export default App;
