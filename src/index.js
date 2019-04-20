import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const buzzwords = [
    "Artificial Intelligence",
    "5G",
    "Virtual Reality",
    "Augmented Reality",
    "Extended Reality",
    "Biometrics",
    "Cloud Computing",
    "Edge Computing",
    "Machine Learning",
    "Voice Recognition",
    "Big Data",
    "Data Mining",
    "Data Analytics",
    "Personalization",
    "Voice Recognition",
    "Chatbots",
    "Internet of Things",
    "Robotics",
    "Quantum Computing",
    "Block Chain",
    "Algorithms",
    "Benchmarking",
    "Back-end",
    "Bring your own Device-policies",
    "Cloud",
    "Collaboration",
    "Content management",
    "Content Management System",
    "Convergence",
    "Cyber-physical Systems (CPS)",
    "Datafication",
    "Deep learning",
    "Deep web",
    "Design patterns",
    "DevOps",
    "Digital divide",
    "Digital Remastering",
    "Digital Rights Management",
    "Digital signage",
    "Disruptive Technologies",
    "Document management",
    "Dot-bomb",
    "E-learning",
    "Enterprise Content Management",
    "Frameworks",
    "Front-End",
    "Fuzzy logic",
    "Growth Hacking",
    "IaaS",
    "SaaS",
    "PaaS",
    "Lambda",
    "Machine Learning",
    "Microservices",
    "Nanotechnology",
    "Responsive Web Design",
    "Scalability",
    "Social bookmarking",
    "Social software",
    "Software defined Networking (SDN)",
    "Spam",
    "Strategic Ineptness",
    "Systems Development Life-Cycle",
    "Tagging",
    "Technological Masturbation",
    "Transmedia",
    "Unified Communications (UC)",
    "User generated content",
    "Virtualization",
    "Vlogging",
    "Web services",
    "Workflow",
    "Information Society",
    "Startups",
    "Dark Web",
    "Productivity",
    "Analytics",
    "Best practices",
    "Business Alignment",
    "Exit strategy",
    "Diversity",
    "Globalization",
    "Millenials",
    "Organic growth",
    "Paradigm shift",
    "Business Alignment",
    "Engagement",
    "Embedding",
    "Influencer",
    "Affiliate marketing",
    "Bounce rate",
    "Sales Funnel",
    "Conversion rate optimization (CRO)",
    "Marketing automation",
    "Multichannel Marketing",
    "Search engine marketing (SEM)",
    "Search engine optimization (SEO)",
    "Growth Hacking",
    "A/B Testing",
    "Content Marketing",
    "Website Optimization",
    "User Interface (UI)",
    "User Experience (UX)",
    "User flow",
    "Tracking",
    "Applications",
    "Mobile apps",
    "APIs (Application Programming Interface)",
    "Object-oriented programming (OOP)",
    "Software",
    "Version control",
    "Web servers",
    "Firewalls",
    "Routers",
    "Virtual Machines",
    "Virtual Private Network (VPN)",
    "Data architecture",
    "Hybrid apps",
    "IDEs (Integrated development environment)",
    "Native apps",
    "Near Field Communication (NFC)",
    "Software Development Kit (SDK)",
    "Accelerators",
    "Hackathons",
    "Intellectual Property",
    "Bloatware",
    "Botnets",
    "Bugs",
    "Business Logic",
    "Business Drivers",
    "Cyberbullying",
    "Digital Amnesia",
    "Digital Assets",
    "Digital Detox",
    "Digital Disruption",
    "Digital Divide",
    "Digital Immigrants",
    "Digital Natives",
    "Digital Revolution",
    "Digitization",
    "Hackers",
    "Linkbaiting",
    "Shareware",
    "Showelware",
    "Sandboxing",
    "Stuxnet",
    "Trolling",
    "Full-stack"
]

const adjectives = [
    "Client-centric",
    "Creative",
    "Innovative",
    "Freemium",
    "Early-stage",
    "Virtual",
    "Scalable",
    "Real-time",
    "Cross-platform",
    "Deep",
    "Open source",
    "Immersive",
    "Cross-platform",
    "Agile",
    "Next Generation",
    "Hyperlocal",
    "Holistic",
    "Granular",
    "Profitable",
    "Robust",
    "Streamlined",
    "Engaging",
    "Embedded",
    "Semantic",
    "B2B",
    "B2C",
    "Gamified",
    "Intelligent",
    "Lean",
    "Asycnhronous",
    "Automated",
    "Crowdfunded",
    "Crowdsourced",
    "Failing",
    "Successful",
    "Impactful",
    "Global",
    "Hackable",
    "Viral",
    "Web Enabled",
    "Bleeding edge",
    "Deep-learning",
    "Customized"
]

const verbs = [
    "Developing",
    "Building",
    "Creating",
    "Selling",
    "Designing",
    "Implementing",
    "Customizing"
]

const endings = [
    " - a case study",
    " - a holistic approach",
    " - a literature review",
    " - a framework"
]

class Generator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {topic: null}
    }
    

    newTopic() {
        let sentence = Math.floor(Math.random() * 2)
        let adj = adjectives[Math.floor(Math.random() * adjectives.length)]
        let buzz1 = buzzwords[Math.floor(Math.random() * buzzwords.length)]
        let buzz2 = buzzwords[Math.floor(Math.random() * buzzwords.length)]

        while(buzz1 === buzz2) {
            buzz2 = buzzwords[Math.floor(Math.random() * buzzwords.length)]
        }

        let verb = verbs[Math.floor(Math.random() * verbs.length)]
        let ending = endings[(Math.floor(Math.random() * endings.length))]
        let newTopic = null

        switch(sentence) {
            case(0): 
                newTopic = adj + " " + buzz1 + " and "+ buzz2
                break
            case(1):
                newTopic = buzz1 + " and " + adj + " " + buzz2
                break
            case(2):
                newTopic = verb + " " + adj + " " + buzz1
                break
            default:
                newTopic = "asd"
        }

        let randomAdd = Math.floor(Math.random() * 4)
        if(randomAdd === 0) newTopic += ending
        console.log(newTopic)
        this.setState({topic: newTopic})
    }

    render() {
        return (
            <div>
                <h1>Pöhinä topic generator</h1>
                <p>Are you looking for essay/thesis/research ideas?</p>
                <p>Click the button and discover the latest and greatest topics in IT!!</p>
                <p>Get inspired and believe the <span className="hype"> HYPe!</span></p>
                <button onClick={() => this.newTopic()}>Get a new topic!</button>
                <p className="topic">{this.state.topic}</p>
                <div className="author">
                    <p>Made by <a href="https://www.youtube.com/watch?v=nWm6apd6mp8">Timmy Tammi</a></p>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<Generator />, document.getElementById('root'));
