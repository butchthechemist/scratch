define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
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
      console.log('scratch::postCreate');
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
