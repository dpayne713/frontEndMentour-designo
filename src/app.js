
const express = require('express'); 
const hbs = require('hbs'); 
const path = require('path'); 


const app = express(); 

const viewsPath = path.join(__dirname, '/views'); 
const partialsPath = path.join(__dirname, '/views/partials'); 
const staticPath = path.join(__dirname, '/public'); 

app.use(express.static(staticPath)); 
app.use(express.json()); 

app.set('view engine', 'hbs'); 
app.set('views', viewsPath); 
hbs.registerPartials(partialsPath); 



app.get('/', (req,res)=> {
    res.render('index', {fullFooter: true});
}); 
app.get('/about', (req,res)=> {
    res.render('about', {fullFooter: true});  
});
app.get('/app-design', (req,res)=> {
    res.render('app-design', {fullFooter: true}); 
});
app.get('/contact', (req,res)=> {
    res.render('contact', {fullFooter: false}); 
});
app.get('/graphic-design', (req,res)=> {
    res.render('graphic-design', {fullFooter: true}); 
});
app.get('/locations', (req,res)=> {
    res.render('locations', {fullFooter: true}); 
});
app.get('/web-design', (req,res)=> {
    res.render('web-design', {fullFooter: true}); 
});

const graphicDesignHTML = require('./views/string-templates/graphic-design-body');
const appDesignHTML = require('./views/string-templates/app-design-body');
const webDesignHTML = require('./views/string-templates/web-design-body');
const locationsHTML = require('./views/string-templates/locations-body'); 
const indexHTML = require('./views/string-templates/index-body'); 
const aboutHTML = require('./views/string-templates/about-body'); 
const contactHTML = require('./views/string-templates/contact-body'); 


app.get('/graphic-design-html', (req,res)=> {
    res.json({"html": graphicDesignHTML});  
});
app.get('/app-design-html', (req,res)=> {
    res.json({"html": appDesignHTML});  
});
app.get('/web-design-html', (req,res)=> {
    res.json({"html": webDesignHTML});  
});
app.get('/locations-html', (req,res)=> {
    res.json({"html": locationsHTML});  
});
app.get('/index-html', (req,res)=> {
    res.json({"html": indexHTML});  
});
app.get('/about-html', (req,res)=> {
    res.json({"html": aboutHTML});  
});
app.get('/contact-html', (req,res)=> {
    res.json({"html": contactHTML});  
});



app.listen(process.env.PORT || 3000, () => {
    console.log('server started'); 
}); 
