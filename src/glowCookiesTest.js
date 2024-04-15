/*
    GLOW COOKIES
    CREATED BY MANUEL CARRILLO
    https://github.com/manucaralmo/GlowCookies
    2021 - v 3.1.3
*/

function assert(condition, lineNum) {
  if(condition != true){
      throw new Error("Assert failed on line: " + lineNum)
  }else{
      return;
  }
}

function assertParameters(parameters, glowCookiesObj) {
  let keys = Object.keys(glowCookiesObj);
  
  for (i in keys) {
    console.log("\n" + keys[i] + ", " + typeof glowCookiesObj[keys[i]]);
    if (typeof glowCookiesObj[keys[i]] === 'object') {
      let inner_keys = Object.keys(glowCookiesObj[keys[i]]);
      for (in_i in inner_keys) {
        console.log(inner_keys[in_i] + ", " + typeof glowCookiesObj[keys[i]][inner_keys[in_i]]);
      }
    }
  }
}


function presetParams(){
  return {
    style: 1,
    analytics: 'G-FH87DE17XF',
    facebookPixel: '990955817632355',
    hideAfterClick: false,
    shadowSpread: '1.875em',
    shadowColor: 'rgba(255,0,0,.2)',
    border: 'none',
    position: 'right',
    policyLink: 'https://google.es',
    customScript: [{ type: 'custom', position: 'body', content: `console.log('my custom js');` }],
    bannerDescription: 'banner desc',
    bannerLinkText: 'banner link text',
    bannerBackground: '#fff',
    bannerColor: '#fafafa',
    bannerHeading: '<h2>Cookies</h2>',
    acceptBtnText: 'accept btn text',
    acceptBtnColor: 'green',
    acceptBtnBackground: 'red',
    rejectBtnText: 'reject btn text',
    customizeBtnDisplay: true,
    customizeBtnText: 'More options',
    customizeBtnBackground: 'gray',
    customizeBtnColor: 'black',
    rejectBtnBackground: 'lightblue',
    rejectBtnColor: 'blue',
    manageColor: 'white',
    manageBackground: 'blue',
    manageText: 'cookies text',
    selectorTitleText: 'Customize your cookies',
    selectorTitleColor: 'green',
    additionalCookies: ['Test 1', 'Test 2'],
    //additionalCookieScripts: [[{ type: 'custom', position: 'body', content: `console.log('test 1');` }], 
    //[{ type: 'custom', position: 'body', content: `console.log('test 2');` }]],
    customizeUserPreferences: false,
    //userPreferencesScript: [{ type: 'custom', position: 'body', content: `console.log('my user preferences js');` }],
    //thirdPartyScript: [{ type: 'custom', position: 'body', content: `console.log('my third party js');` }],
    //analyticsScript: [{ type: 'custom', position: 'body', content: `console.log('my analytics js');` }],
    customizeAnalytics: true,
    customizeThirdParty: true,
    customizeSessionCookies: true,
    customizeSwitchOnColor: 'green',
    selectorBtnBackground: 'green',
  }
}


class CombinatorialTestingSetup {

    // This will generate combinations bassed off of the types
    // types is the type of variable each label can take on. The length of labels must equal types if you use this constructor
    // type_infos is a list of the extra information for types
    constructor(types, type_infos) {
      assert(type_infos.length == types.length, new Error().lineNumber)
      // We are making a 2d array of different combinations of inputs
      // For now, mainly n testing where if there n inputs, we will make a 2d array of size 2^n x n. So 2 inputs will mean our array is 4 x 2
      let potentialOptionsList = []
      for(let i = 0; i < types.length; i++){
        if(types[i] == 'bool'){
          potentialOptionsList.push([false, true]);
        }else if(types[i] == 'num'){
          // pass in list for type_info (e.g. [1, 2, 5])
          potentialOptionsList.push(type_infos[i])
        }
      }
      let permutationList = Array()
      this.generateCombinations(types.length, [], potentialOptionsList, permutationList, types.length);
      this.inputCombinations = permutationList;
  }

    // Used ChatGPT by asking "How to do boolean permutations generalizable to n in JavaScript?"
    // Then, expanded it to be able to handle more than just boolean permutation
    generateCombinations(n, prefix = [], potentialOptions, permutationList, max_options) {
      if (n === 0) {
          //console.log(prefix);
          permutationList.push(prefix);
          return;
      }
      for (const value of potentialOptions[max_options - n]) {
          this.generateCombinations(n - 1, [...prefix, value], potentialOptions, permutationList, max_options);
      }
    }



}

  function getRandomColorHex() {
    var hexDigits = '0123456789ABCDEF';
    var randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += hexDigits[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  }

  function getRandomColorWithOpacity() {
    var randomColor = 'rgba(';
    for (let i = 0; i < 3; i++) {
      randomColor += Math.floor(Math.random() * 256);
      randomColor += ",";
    }
    randomColor += Math.random();
    randomColor += ")";
    return randomColor;
  }

  function getRandomString(length) {
    var randomString = "";
    var strLength = Math.floor(Math.random() * length);
    for (let i = 0; i < strLength; i++) {
      randomString += String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33))
    }
    return randomString;
  }

const customizationOptions = {
  selections: {
    style: [1, 2, 3],
    analytics: ['G-FH87DE17XF'],
    facebookPixel: ['990955817632355'],
    customScript: [{ type: 'custom', position: 'body', content: `console.log('my custom js');` }],
    hideAfterClick: [false], // SHOULD BE [true, false]
    border: ["border", "none"],
    position: ["left", "right"],
    customizeBtnDisplay: [true, false],
    customizeUserPreferences: [true, false],
    customizeAnalytics: [true, false],
    customizeThirdParty: [true, false],
    policyLink: ['https://policies.google.com/technologies/cookies'],
    shadowSpread: ["0em", "0.5em", "1em", "1.25em", "1.75em", "2.0000em", "2.5em"]
  },
  hexColors: ["bannerBackground", "bannerColor", "acceptBtnColor", "acceptBtnBackground",
    "customizeBtnBackground", "customizeBtnColor", "rejectBtnBackground", "rejectBtnColor",
    "manageColor", "manageBackground", "selectorTitleColor", "customizeSwitchOnColor", "selectorBtnBackground"],
  opacityColors: ["shadowColor"],
  strings: ["bannerDescription", "bannerLinkText", "bannerHeading", "acceptBtnText", "rejectBtnText", "customizeBtnText", "manageText", "selectorTitleText"]
}

class Fuzzer {
  constructor(numTests, setProbability) {
    this.numTests = numTests;
    this.setProbability = setProbability;
    this.customizers = {};
    this.glowCookies = undefined;
  }

  

  setCustomizers() {
    var keys = Object.keys(customizationOptions.selections);
    for (let i = 0; i < keys.length; i++) {
      if (Math.random() < this.setProbability) {
        this.customizers[keys[i]] = customizationOptions.selections[keys[i]][Math.floor(Math.random() * customizationOptions.selections[keys[i]].length)];
      }
    }

    for (let i = 0; i < customizationOptions.hexColors.length; i++) {
      if (Math.random() < this.setProbability) {
        this.customizers[customizationOptions.hexColors[i]] = getRandomColorHex();
      }
    }

    for (let i = 0; i < customizationOptions.opacityColors.length; i++) {
      if (Math.random() < this.setProbability) {
        this.customizers[customizationOptions.opacityColors[i]] = getRandomColorWithOpacity();
      }
    }

    for (let i = 0; i < customizationOptions.strings.length; i++) {
      if (Math.random() < this.setProbability) {
        this.customizers[customizationOptions.strings[i]] = getRandomString(20);
      }
    }
  }

  fuzz() {
    try {
      for (let i = 0; i < this.numTests; i++) {
        this.setCustomizers();
        this.glowCookies = new GlowCookies()
        this.glowCookies.start('en', this.customizers);
        // delete the object
        console.log(this.customizers);
      }
    } catch (error) {
      console.log(error);
      console.log(this.customizers);
    }
  }
}



// Pass in labels for tests to run each corresponding test
class GlowCookiesTester {
  constructor(test_inputs){
    this.glowCookies = new GlowCookies()
    // If you are running the fuzzer, it must be on its own, as default + combinatorial tests
    // use a preset to go through the tests, while the fuzzer generates random values.
    this.containsFuzzer = false
    test_inputs.forEach(test_input => {
      if(test_input.length > 0 && test_input[0] == 'fuzz'){
        this.containsFuzzer = true;
      }
    });
    if(this.containsFuzzer){
      if(test_inputs.length != 1){
        return;
      }
    }else{
      this.glowCookies.start('en', presetParams());
    }
    this.test_inputs = test_inputs; // Test inputs are in the following form: [test_name, test_args...]
    this.test_object = {
      'test1': this.test1,
      'test2': this.test2,
      'test3': this.test3,
      'test4': this.test4,
      'test5': this.test5,
      'ctest1': this.ctest1,
      'fuzz': this.fuzz,
    }
    this.waitForRender();
  }

  waitForRender = () => {
    if(!this.glowCookies.rendered && !this.containsFuzzer) {
      window.setTimeout(this.waitForRender, 100); 
   } else {
      this.runTests()
   }
  }

  runTests = () => {
    // Tests
    this.test_inputs.forEach(test_input => {
      console.log(Object.keys(this.test_object));
      if(test_input.length >= 1 && Object.keys(this.test_object).includes(test_input[0])){
        let args = [];
        for(let i = 1; i < test_input.length; i++){
          args.push(test_input[i]);
        }
        this.test_object[test_input[0]](...args);
      }
      

    });
    //this.test1();
    //this.test2();
    //this.test3();

    //this.ctest1();
    //assertParameters({}, this.glowCookies);
  }


  // Default Testing
  // Assuming no user input
  // Testing purely for accepting cookies
  test1 = () => {
      console.log("Running Test 1");
      this.glowCookies.openManageCookies();
      this.glowCookies.acceptCookies();
      assert(localStorage.getItem("GlowCookies") == '1', new Error().lineNumber)
      console.log("Passed all parts of Test 1")
  }

  test2 = () => {
      console.log("Running Test 2");
      // Ensure that hideafterclick is not true
      this.glowCookies.config.hideAfterClick = false
      this.glowCookies.openManageCookies();
      this.glowCookies.acceptCookies();
      assert(localStorage.getItem("GlowCookies") == '1', new Error().lineNumber)
      this.glowCookies.openManageCookies();
      this.glowCookies.rejectCookies();
      assert(localStorage.getItem("GlowCookies") == '0', new Error().lineNumber)
      console.log("Passed all parts of Test 2")
  }

  test3 = () => {
      console.log("Running Test 3");
      this.glowCookies.openManageCookies();
      this.glowCookies.rejectCookies();
      assert(localStorage.getItem("GlowCookies") == '0', new Error().lineNumber)
      console.log("Passed all parts of Test 3")
  }

  test4 = () => {
    console.log("Running Test 4");
    this.glowCookies.addNewScript([{ type: 'custom', position: 'body', content: `console.log('Test script for Test 4!');` }]);
    let foundScript = false;
    Object.keys(document.body.children).forEach(child => {
      if(document.body.children[child].outerHTML != undefined && document.body.children[child].outerHTML == "<script>console.log('Test script for Test 4!');</script>"){
        foundScript = true;
      }
    });
    assert(foundScript, new Error().lineNumber)
    console.log("Passed all parts of Test 4")
  }

  test5 = () => {
    console.log("Running Test 5");
    let foundScripts = [false, false];
    this.glowCookies.addNewScript([{ type: 'custom', position: 'body', content: `console.log('Test script 1 for Test 5!');` },
    { type: 'custom', position: 'body', content: `console.log('Test script 2 for Test 5!');` }]);
    Object.keys(document.body.children).forEach(child => {
      if(document.body.children[child].outerHTML != undefined){
        if(document.body.children[child].outerHTML == "<script>console.log('Test script 1 for Test 5!');</script>"){
          foundScripts[0] = true;
        }else if(document.body.children[child].outerHTML == "<script>console.log('Test script 2 for Test 5!');</script>"){
          foundScripts[1] = true;
        }
      }
    });
    assert(foundScripts[0] && foundScripts[1], new Error().lineNumber)
    console.log("Passed all parts of Test 5")
  }

  ctest1 = () => {
      console.log("Running Combinatorial Test 1 for selector");
      // Ensure hide after click is false
      this.glowCookies.config.hideAfterClick = false
      let selectorTestInputs = new CombinatorialTestingSetup(['bool', 'bool', 'bool', 'bool'], ['','','', ''])['inputCombinations'];
      console.log(selectorTestInputs)
      selectorTestInputs.forEach((selectorTestComb) => {
          this.glowCookies.openManageCookies();
          this.glowCookies.openSelector();
          // Go through each comb, and set switches
          console.log("Testing selector combination: " + selectorTestComb)
          for(let switch_num = 0; switch_num < 4; switch_num++){

              this.glowCookies.CustomizeSwitches[switch_num].classList.remove(this.glowCookies.switch_on[switch_num]);
              this.glowCookies.CustomizeSwitches[switch_num].classList.remove(this.glowCookies.switch_colors[switch_num]);
              if(selectorTestComb[switch_num]){
                  this.glowCookies.switch_on[switch_num] = "glowCookies__customize_switch_button_on";
                  this.glowCookies.switch_colors[switch_num] = "switch_color_on";
              }else{
                  this.glowCookies.switch_on[switch_num] = "glowCookies__customize_switch_button_off";
                  this.glowCookies.switch_colors[switch_num] = "switch_color_off";
              }
              this.glowCookies.CustomizeSwitches[switch_num].classList.add(this.glowCookies.switch_on[switch_num]);
              this.glowCookies.CustomizeSwitches[switch_num].classList.add(this.glowCookies.switch_colors[switch_num]);   
          }
          this.glowCookies.savePreferences();
          // After saving, let's ensure that all of the selections held and are now applied
          for(let switch_num = 0; switch_num < 4; switch_num++){
              assert(this.glowCookies.cookiesAllowed[switch_num] == selectorTestComb[switch_num], new Error().lineNumber);
          }
          console.log("Selector combination: " + selectorTestComb + " was saved correctly.")
      })
      console.log("Passed Combinatorial Test 1 for selector");
  }

  fuzz = (numTests, prob) => {
    console.log("fuzzing")
    const fuzzer = new Fuzzer(numTests, prob);
    fuzzer.fuzz();
  }

}


new GlowCookiesTester([["test4"], ["test5"]]);
//new GlowCookiesTester([["fuzz", 1, 0.5]]);