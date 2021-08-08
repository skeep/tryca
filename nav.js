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
console.log(baseURL);

var navRender = `
<ul class="nav flex-column">
${navItems.map(item => `
<li class="nav-item">
    <a class="nav-link active" aria-current="page" href="${baseURL}${item.link}">${item.label}</a>
</li>
`).join('')}
</ul>
`;

document.getElementById('nav').innerHTML = navRender;   