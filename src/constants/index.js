import Anisha from "../assets/avatar-anisha.png"
import Richard from '../assets/avatar-richard.png'
import Ali from '../assets/avatar-ali.png'
import Facebook from '../assets/icon-facebook.svg'
import Instagram from '../assets/icon-instagram.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Youtube from '../assets/icon-youtube.svg'

export const constants ={
    title:'Manage',
    nav_items: [
        'Pricing','Products','About Us', 'Carrers','Community'
    ],
    button_text: 'Get Started',
    hero: {
        title: 'Bring everyone together to build better products',
        description: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
    },
    feature: {
        title: ' What\'s different about Manage?',
        description: 'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.',
        numbered_lists: [
            {number: '01', title:'Track company-wide progress', description:' See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.'},
            {number: '02', title:'Advanced built-in reports', description:'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'},
            {number: '03', title:'Everything you need in one place',description:'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'}
        ]
    },
    testimonial: {
        title: 'What\'s Different About Manage?',
        lists:[
            {name:'Anisha Li',dp:Anisha, description:'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'},
            {name:'Ali Bravo',dp:Ali, description:' “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'},
            {name:'Richard Watts',dp:Richard, description:'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'}
        ]
    },
    cta:{
        title: 'Simplify how your team works today'
    },
    footer:{
        copyright:' Copyright &copy; 2022, All Rights Reserved',
        footer_primary_links:[
            'Home', 'Pricing', 'Products','About'
        ],
        footer_secondary_links:[
            'Carrers','Community','Privacy Policy'
        ],
        social_icons:[
            Facebook, Youtube, Instagram, Twitter, Pinterest
        ]
    }
}