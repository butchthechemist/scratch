define(['dojo/_base/declare', 'jimu/BaseWidget', "esri/request", "dojo/dom",
"dojo/on",
"dojo/dom-class",
"esri/config"],
function(declare, BaseWidget, esriRequest, dom,
  on,
  domClass,
  esriConfig) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'scratch',
    // this property is set by the framework when widget is loaded.
    // name: 'scratch',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      esriConfig.defaults.io.corsEnabledServers.push(this.config.serviceUrl); // supports CORS
      console.log('scratch::postCreate');
    },

    getData: function() { 
      // alert('ya clicked it!')
      let contentDiv = dom.byId("content");
      contentDiv.value = "";
      domClass.remove(contentDiv, "failure");
      dom.byId("status").innerHTML = "Downloading...";

      let requestHandle = esriRequest({
        "url": this.config.serviceUrl
        ,handleAs: "json"
      });
      
      requestHandle.then(
        (response, io)=>{
          dom.byId("status").innerHTML = "";
          dom.byId("content").value = JSON.stringify(response," ");
        }
        , (error, io)=>{
          domClass.add(dom.byId("content"), "failure");
          dom.byId("status").innerHTML = "";
          dom.byId("content").value = JSON.stringify(error," ");
        }
      );
    }
    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('scratch::startup');
    // },

    // onOpen: function(){
    //   console.log('scratch::onOpen');
    // },

    // onClose: function(){
    //   console.log('scratch::onClose');
    // },

    // onMinimize: function(){
    //   console.log('scratch::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('scratch::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('scratch::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('scratch::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('scratch::onPositionChange');
    // },

    // resize: function(){
    //   console.log('scratch::resize');
    // }

    //methods to communication between widgets:

  });

});
