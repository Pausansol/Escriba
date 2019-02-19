export default function createAlertWindow(context) {
  const alertWindow = COSAlertWindow.new()
  
  alertWindow.setIcon(NSImage.alloc().initByReferencingFile(context.plugin.urlForResourceNamed('icon.png').path()))
  alertWindow.setMessageText('Escriba')
  alertWindow.setInformativeText("Configure your Escriba preferences. What properties of overrides do you want to Copy&Paste?")

  return alertWindow
}