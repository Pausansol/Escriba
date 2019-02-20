import createAlertWindow from './create-alert-window'
import googleAnalytics from './analytics'
var Settings = require('sketch/settings')

export default function(context){
  googleAnalytics(context, "Escriba settings", "Open")

	// create the alertWindow UI
	const alertWindow = createAlertWindow(context);
  	
	// create the radioButtons
  // Create inputs

	// Create the main view
  var viewWidth = 400;
  var viewHeight = 210;
  var viewSpacer = 10;
  var layerStyleCheckbox = NSButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 125, viewWidth - viewSpacer, 20));
  var textStyleCheckbox = NSButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 150, (viewWidth / 2) - viewSpacer, 20));
  var stringValueCheckbox = NSButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 175, (viewWidth / 2) - viewSpacer, 20));
  var symbolIDCheckbox = NSButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 200, (viewWidth / 2) - viewSpacer, 20));

  var layerStyleSetting = Settings.settingForKey('ValuelayerStyle')
	var textStyleSetting = Settings.settingForKey('ValuetextStyle')
	var stringValueSetting = Settings.settingForKey('ValuestringValue')
	var symbolIDSetting = Settings.settingForKey('ValuesymbolID')
  // Configure checkboxes

  layerStyleCheckbox.setButtonType(NSSwitchButton);
  layerStyleCheckbox.setBezelStyle(0);
  layerStyleCheckbox.setTitle("Layer Style");
	if(layerStyleSetting == 1 || layerStyleSetting == undefined){
  	layerStyleCheckbox.setState(NSOnState);	
  } else {
  	layerStyleCheckbox.setState(NSOffState);	
  }
	
	textStyleCheckbox.setButtonType(NSSwitchButton);
	textStyleCheckbox.setBezelStyle(0);
	textStyleCheckbox.setTitle("Text Style");
	if(textStyleSetting == 1 || textStyleSetting == undefined){
  	textStyleCheckbox.setState(NSOnState);	
  } else {
  	textStyleCheckbox.setState(NSOffState);	
  }

	stringValueCheckbox.setButtonType(NSSwitchButton);
  stringValueCheckbox.setBezelStyle(0);
  stringValueCheckbox.setTitle("Text content");
  if(stringValueSetting == 1 || stringValueSetting == undefined){
  	stringValueCheckbox.setState(NSOnState);	
  } else {
  	stringValueCheckbox.setState(NSOffState);	
  }
	
	symbolIDCheckbox.setButtonType(NSSwitchButton);
  symbolIDCheckbox.setBezelStyle(0);
  symbolIDCheckbox.setTitle("Symbol");
 	if(symbolIDSetting == 1 || symbolIDSetting == undefined){
  	symbolIDCheckbox.setState(NSOnState);	
  } else {
  	symbolIDCheckbox.setState(NSOffState);	
  }

	//Adding inputs to the dialog
	alertWindow.addAccessoryView(layerStyleCheckbox);
  alertWindow.addAccessoryView(textStyleCheckbox);
  alertWindow.addAccessoryView(stringValueCheckbox);
  alertWindow.addAccessoryView(symbolIDCheckbox);

  alertWindow.addButtonWithTitle('Save')
  alertWindow.addButtonWithTitle('Cancel')

  if (alertWindow.runModal() == NSAlertFirstButtonReturn) {
		Settings.setSettingForKey('ValuelayerStyle', layerStyleCheckbox.state())
		Settings.setSettingForKey('ValuetextStyle', textStyleCheckbox.state())
		Settings.setSettingForKey('ValuestringValue', stringValueCheckbox.state())
		Settings.setSettingForKey('ValuesymbolID', symbolIDCheckbox.state())
    googleAnalytics(context, "Escriba settings", "Save")
  }
}