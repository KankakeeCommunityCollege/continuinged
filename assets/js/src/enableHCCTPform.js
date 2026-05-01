// `switchOnMayFourth( callback, fallback, mockDate)`
//  Takes 3 arguments: a callback function, fallback function, and optional mockDate for unit testing purposes
//  The callback function is called on or after May 4
//  The fallback function is called before May 4 has happened
//  The optional mockDate is for unit testing
import switchOnMayFourth from './switchOnMayFourth';

const wrapper = document.getElementById('LoadJotForm');

function enableHCCTPform() {
  // form ID and toggle are stored in data attributes to hook into CloudCannon
  const { 
    formInquiry: inquiryFormID, // Inquiry version of the form for when signup is closed
    formSignUp: signUpFormID, // Signup version of the form for picking an orientation date
    formDisableSignUp: disableSignUpSetting // Toggle that hooks into CloudCannon to disable the signup form once full
  } = wrapper.dataset;
  const script = document.createElement('script');
  
  script.type = 'text/javascript';

  if (disableSignUpSetting === 'false') {
    switchOnMayFourth(
      () => script.src = `https://form.jotform.com/jsform/${signUpFormID}`,
      () => script.src = `https://form.jotform.com/jsform/${inquiryFormID}`
    );
  } else {
    script.src = `https://form.jotform.com/jsform/${inquiryFormID}`;
  }
  wrapper.replaceChildren(script);
}

export default enableHCCTPform;
