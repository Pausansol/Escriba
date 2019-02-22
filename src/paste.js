import googleAnalytics from './analytics'

var sketch = require('sketch/dom')
const doc = sketch.getSelectedDocument()
const selection = doc.selectedLayers.layers
var UI = require('sketch/ui')
var Settings = require('sketch/settings')

export function pasteSelected(selectedOverrideId, context){
	selection.forEach(function (layer) {
		layer.overrides.forEach(function (override){
			if(selectedOverrideId == override.affectedLayer.id){
				var property = override.property
				var getseetting = [`Value${property}`]
				var settingValue = Settings.settingForKey(getseetting.toString())
				
				if(settingValue == 1 || undefined){
					var settingName = [`settings${property}`]
	    			var setting = Settings.sessionVariable(settingName)
	    			override.value = setting
					googleAnalytics(context, "Escriba Success", "Paste done", setting)
	    		} else {
	    			if(property == 'symbolID' || property == 'layerStyle'){
	    				UI.message('⚠️ ' + property + ' Copy&Paste is disabled, you can enable it in Escriba/Settings ⚠️')
					}
	    		}
			}
		})
	})
}

export default function(context){
const selectedOverrides = context.document.documentData().selectedOverrides();
	if (selectedOverrides.length > 0){
		selectedOverrides.forEach(function(selectedOverride){
			if(selectedOverride.includes('/')){
				var tokens = selectedOverride.split('/')
				var element = tokens[tokens.length-1] 
				var tokensSplit = element.split('_')
				var selectedOverrideId = tokensSplit[tokensSplit.length-2]
				googleAnalytics(context, "Escriba Initiated", "Copy selected", selectedOverrideId);
				pasteSelected(selectedOverrideId, context)
			} else {
				var tokens = selectedOverride.split('#')
				var element = tokens[tokens.length-1] 
				var tokensSplit = element.split('_')
				var selectedOverrideId = tokensSplit[tokensSplit.length-2]
				googleAnalytics(context, "Escriba Initiated", "Copy selected", selectedOverrideId);
				pasteSelected(selectedOverrideId, context)
			}
		})	
	} else {
		UI.message('⚠️ Select one Symbol override to paste ⚠️')
		googleAnalytics(context, "Escriba UI", "No override selected to paste");
	}
}