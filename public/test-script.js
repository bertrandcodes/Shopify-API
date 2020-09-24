console.log('this is a script tag api')

const header = $('#shopify-section-header').parent();

console.log(header)

header.prepend('<div>Hello this is Script tag is coming from the public folder</div>').css({ 'background-color': 'orange', 'text-align': 'center' })