var navItems = [{
    label: 'Basic information',
    link: '/'
}, {
    label: 'Eligibility',
    link: '/2.html'
},{
    label: 'eKYC',
    link: '/3.html'
},{
    label: 'Establishment Details',
    link: '/4.html'
},{
    label: 'Personal Details',
    link: '/5.html'
},{
    label: 'Charges and nomination',
    link: '/6.html'
},{
    label: 'Common Declaration',
    link: '/7.html'
},{
    label: 'Video KYC',
    link: '/8.html'
},{
    label: 'Digital fuding',
    link: '/9.html'
},{
    label: 'Thank you',
    link: '/10.html'
}];


var baseURL = (window.location.hostname === "localhost") ? '' : '/tryca';
var numberPattern = /\d+/g;
var pathName = window.location.pathname;
var page = !(pathName.slice(-1) === '/') ? pathName.match(numberPattern).join('') : 1;

var navRender = `
<ul class="nav flex-column">
${navItems.map( (item, index) => `
<li class="nav-item">
    <a class="nav-link${((index + 1) == page) ? ' active' : ''}" aria-current="page" href="${baseURL}${item.link}">${item.label}</a>
</li>
`).join('')}
</ul>
`;

document.getElementById('nav').innerHTML = navRender;   


var channels = [{"label":"SMS/ Insta Alert","id":"sms"},
{"label":"Internet Banking","id":"ib"},
{"label":"WhatsApp","id":"wa"},
{"label":"Cheque Book Facility","id":"cb"},
{"label":"Debit card","id":"dc"},
{"label":"TPT rights","id":"tpt", "info" : "TPT rights will be default provided to customer between the age group of 18yrs to70 yrs. For all cases above 70yrs message to be provided requesting customer to visit branch"},
{"label":"Register for Email Statement","id":"email"},
{"label":"Info on other product","id":"info"}];


var channelRender = `
${channels.map(item => `
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="${item.id}" checked>
    <label class="form-check-label" for="${item.id}">${item.label}</label>
    ${(item.info) ? `<small class="form-text text-muted">${item.info}</small>` : ''}
</div>
`).join('')}
`;

if(document.getElementById('channels')) {
    document.getElementById('channels').innerHTML = channelRender;
}   