
const title_name = document.getElementById('title_name');
const title_text = document.getElementById('title_text');
const unique_underline = document.getElementById('unique_underline');
const inside_title_text = document.getElementById('inside_title_text')
const first_external = document.getElementById('first_external');
const second_external = document.getElementById('second_external');
const third_external = document.getElementById('third_external');
const githubicon = document.getElementById('githubicon');
const linkedinicon = document.getElementById('linkedinicon');
const paperclipicon = document.getElementById('paperclipicon');
const experience_studies = document.getElementById('experience-studies')
const sidebarstudies = document.getElementById('side-bar-studies');

function body_dark() {
    const dots = Array.from(document.getElementsByClassName('light_dot'));
    const timespan = Array.from(document.getElementsByClassName('light_span'));
    const black_text = Array.from(document.getElementsByClassName('black_text'));
    const black_text_inside = Array.from(document.getElementsByClassName('black_text_inside'));
    const blue_links = Array.from(document.getElementsByClassName('blue_links'));

    title_name.style.color = "#e7e7e7";
    title_text.style.color = "#e7e7e7";

    inside_title_text.classList.add("dark_inside_title_text");
    inside_title_text.classList.remove("light_inside_title_text");

    unique_underline.classList.add("underline_dark");
    unique_underline.classList.remove("underline_light");

    first_external.classList.add("external_dark");
    second_external.classList.add("external_dark");
    third_external.classList.add("external_dark");

    first_external.classList.remove("external_light");
    second_external.classList.remove("external_light");
    third_external.classList.remove("external_light");

    githubicon.classList.add("github_dark");
    githubicon.classList.remove("github_light");

    linkedinicon.classList.add("linkedin_dark");
    linkedinicon.classList.remove("linkedin_light");

    paperclipicon.classList.add("paperclip_dark");
    paperclipicon.classList.remove("paperclip_light");

    experience_studies.style.color = "#e7e7e7";

    const dotsCopy = [...dots];
    for (let dot of dotsCopy) {
        dot.classList.remove("light_dot");
        dot.classList.add("dark_dot");
    }

    for (let time of timespan) {
        time.classList.remove("light_span");
        time.classList.add("dark_span");
    }

    for (let black of black_text) {
        black.classList.add("white_text");
        black.classList.remove("black_text");
    }

    for (let black_inside of black_text_inside) {
        black_inside.classList.add("white_text_inside");
        black_inside.classList.remove("black_text_inside");
    }

    sidebarstudies.style.borderColor = "#fff"
    for (let blue_link of blue_links) {
        blue_link.classList.remove("blue_links");
        blue_link.classList.add("dark_blue_links");
    }


}

function body_light() {
    const dots = Array.from(document.getElementsByClassName('dark_dot'));
    const timespan = Array.from(document.getElementsByClassName('dark_span'));
    const white_text = Array.from(document.getElementsByClassName('white_text'));
    const white_text_inside = Array.from(document.getElementsByClassName('white_text_inside'));
    const blue_links = Array.from(document.getElementsByClassName('dark_blue_links'));

    title_name.style.color = "#0d0d0d";
    title_text.style.color = "#0d0d0d";

    inside_title_text.classList.add("light_inside_title_text");
    inside_title_text.classList.remove("dark_inside_title_text");

    unique_underline.classList.add("underline_light");
    unique_underline.classList.remove("underline_dark");

    first_external.classList.remove("external_dark");
    second_external.classList.remove("external_dark");
    third_external.classList.remove("external_dark");

    first_external.classList.add("external_light");
    second_external.classList.add("external_light");
    third_external.classList.add("external_light");

    githubicon.classList.remove("github_dark");
    githubicon.classList.add("github_light");

    linkedinicon.classList.remove("linkedin_dark");
    linkedinicon.classList.add("linkedin_light");

    paperclipicon.classList.add("paperclip_light");
    paperclipicon.classList.remove("paperclip_dark");

    experience_studies.style.color = "#0d0d0d";

    const dotsCopy = [...dots];
    for (let dot of dotsCopy) {
        dot.classList.add("light_dot");
        dot.classList.remove("dark_dot");
    }

    for (let time of timespan) {
        time.classList.add("light_span");
        time.classList.remove("dark_span");
    }

    for (let white of white_text) {
        white.classList.add("black_text");
        white.classList.remove("white_text");
    }

    for (let white_inside of white_text_inside) {
        white_inside.classList.add("black_text_inside");
        white_inside.classList.remove("white_text_inside");
    }

    sidebarstudies.style.borderColor = " #0d0d0d";

    for (let blue_link of blue_links) {
        blue_link.classList.add("blue_links");
        blue_link.classList.remove("dark_blue_links");
    }
}

let isOriginalColor = true;
function ChangeColors() {

    const background = document.getElementById('background');
    const dottedbg = document.getElementById('dotted-background');
    const moonicon = document.getElementById('moon-icon');
    const nav = document.getElementById('nav');
    const aboutme = document.getElementById('aboutme');
    const articles = document.getElementById('articles');
    const contact = document.getElementById('contact');

    const aboutme_mobile = document.getElementById('aboutme_mobile');
    const articles_mobile = document.getElementById('articles_mobile');
    const contact_mobile = document.getElementById('contact_mobile');

    const mobileMenu = document.getElementById('hamburger_menu')

    if (isOriginalColor) {
        const current_mobile_light = Array.from(document.getElementsByClassName('current_mobile_light'));
        background.style.backgroundColor = '#28155e';
        background.style.backgroundImage = 'radial-gradient(60% 120% at 50% 50%, hsla(0, 96.5%, 44.9%, 0) 0%, rgba(0, 0, 0, 0.5) 100%)';
        dottedbg.style.backgroundImage = 'radial-gradient(#0c172d 1px,transparent 1px)';

        moonicon.classList.add("dark_mode_moon");
        moonicon.classList.remove("light_mode_moon");
        nav.style.color = '#e7e7e7';

        aboutme.classList.add("current_dark");
        articles.classList.add("dark_mode_ul_header");
        contact.classList.add("dark_mode_ul_header");

        aboutme_mobile.classList.add("dark_mode_ul_header");
        articles_mobile.classList.add("dark_mode_ul_header");
        contact_mobile.classList.add("dark_mode_ul_header");

        aboutme.classList.remove("current_light");
        articles.classList.remove("light_mode_ul_header");
        contact.classList.remove("light_mode_ul_header");

        aboutme_mobile.classList.remove("light_mode_ul_header");
        articles_mobile.classList.remove("light_mode_ul_header");
        contact_mobile.classList.remove("light_mode_ul_header");

        mobileMenu.classList.add("dark_hamburger");
        mobileMenu.classList.remove("light_hamburger");

        for (let current_mobile_l of current_mobile_light) {
            current_mobile_l.classList.add("current_mobile_dark");
            current_mobile_l.classList.remove("current_mobile_light");
        }

        body_dark()

    } else {
        const current_mobile_dark= Array.from(document.getElementsByClassName('current_mobile_dark'));
        background.style.backgroundColor = '#e7e7e7';
        background.style.backgroundImage = 'radial-gradient(60% 120%, rgba(255, 255, 255, 0) 0%, rgba(244, 181, 225, 0.5) 100%)';
        dottedbg.style.backgroundImage = 'radial-gradient(#e5e7eb 1px,transparent 1px)';

        moonicon.classList.add("light_mode_moon");
        moonicon.classList.remove("dark_mode_moon");
        nav.style.color = '#0d0d0d';

        aboutme.classList.remove("current_dark");
        articles.classList.remove("dark_mode_ul_header");
        contact.classList.remove("dark_mode_ul_header");

        aboutme_mobile.classList.remove("dark_mode_ul_header");
        articles_mobile.classList.remove("dark_mode_ul_header");
        contact_mobile.classList.remove("dark_mode_ul_header");

        aboutme.classList.add("current_light");
        articles.classList.add("light_mode_ul_header");
        contact.classList.add("light_mode_ul_header");

        aboutme_mobile.classList.add("light_mode_ul_header");
        articles_mobile.classList.add("light_mode_ul_header");
        contact_mobile.classList.add("light_mode_ul_header");


        mobileMenu.classList.remove("dark_hamburger");
        mobileMenu.classList.add("light_hamburger");

        
        for (let current_mobile_d of current_mobile_dark) {
            current_mobile_d.classList.remove("current_mobile_dark");
            current_mobile_d.classList.add("current_mobile_light");
        }

        body_light()
    }

    isOriginalColor = !isOriginalColor;
}