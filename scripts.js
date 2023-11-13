document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'May 2023 - Present',
        title: 'IT Engineering Lead, Actium Health',
        description: '• Developed a new streamlined technology plan and tech stack to fit the organizations new strategy and business objectives'
    },
    {
        date: 'September 2022 - April 2023',
        title: 'IT Lead, Remitly',
        description: 'Technical Lead for the IT Support teams in a global organization, including project planning and prioritization'
    },
    {
        date: 'March 2019 - September 2022',
        title: 'Lead IT Systems Engineer, 98point6',
        description: 'Technical Lead for the IT team in a fast-paced and dynamic healthcare startup environment'
    },
    {
        date: ' January 2018 - March 2019',
        title: 'Systems Analyst, Seitel Systems',
        description: 'Owned system design, maintenance, and operations of all software and hardware systems'
    },
    {
        date: 'March 2019 - September 2022',
        title: 'IT Consultant II, 501 Commons',
        description: 'Managed over 20 customer networks including remote support, scheduled visits to client offices, and emergency incident response'
    },
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
