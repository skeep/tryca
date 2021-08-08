var navItems = [{
    label: 'Basic information',
    link: ''
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
    link: '/6.html'
},{
    label: 'Video KYC',
    link: '/6.html'
},{
    label: 'Digital fuding',
    link: '/6.html'
},{
    label: 'Thank you',
    link: '/6.html'
}];

var navRender = `
<ul class="nav flex-column">
${navItems.map(item => `
<li class="nav-item">
    <a class="nav-link active" aria-current="page" href="${item.link}">${item.label}</a>
</li>
`).join('')}
</ul>
`;

document.getElementById('nav').innerHTML = navRender;   