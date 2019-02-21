import googleAnalytics from './analytics'

var sketch = require('sketch/dom')
const doc = sketch.getSelectedDocument()
const selection = doc.selectedLayers.layers
var UI = require('sketch/ui')
var Settings = require('sketch/settings')

export function copySelected (selectedOverrideId, context){
	selection.forEach(function (layer) {
		layer.overrides.forEach(function (override){
	    	if(selectedOverrideId == override.affectedLayer.id){
				var string = override.value
				
				var property = override.property
				var settingName = [`settings${property}`]
				Settings.setSessionVariable(settingName, string)
				googleAnalytics(context, "Escriba Success", "Copy done", string);
			}
	    })
	})
}

export default function(context) {
  const selectedOverrides = context.document.documentData().selectedOverrides();
	if (selectedOverrides.length == 1){
		selectedOverrides.forEach(function(selectedOverride){
			var tokens = selectedOverride.split('#')
			var element = tokens[tokens.length-1] 
			var tokensSplit = element.split('_')
			var selectedOverrideId = tokensSplit[tokensSplit.length-2]
			googleAnalytics(context, "Escriba Initiated", "Copy selected", selectedOverrideId);
			copySelected(selectedOverrideId, context)
			})	
	}
	if (selectedOverrides.length < 1){
		UI.message('⚠️ Select one Symbol override to copy ⚠️')
		googleAnalytics(context, "Escriba UI", "No override selected to copy");	
	}
	if (selectedOverrides.length > 1){
		UI.message('⚠️ You have selected more than one override, select only one Symbol override to copy ⚠️')
		googleAnalytics(context, "Escriba UI", "More than one override selected to copy");
	}
}

