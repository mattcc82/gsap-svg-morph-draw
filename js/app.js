// dom ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('dom ready')
    TweenMax.set('#svg_marker', { scale: 0.15, x: 20 })
    tweenFunc()
})
// window resize
window.addEventListener('resize', function () {
    console.log('window resized')
})

const mainTimeline = new TimelineLite()
const markerPath = MorphSVGPlugin.pathDataToBezier('#svg_line', { offsetX: -17.5, offsetY: 20 })

const tweenFunc = function () {
    let titleText = new SplitText('.story .title', {
        type: 'chars, lines'
    })
    let titleLines = titleText.lines,
        titleChars = titleText.chars
    let storyText = new SplitText('.story p', {
        type: 'words, lines'
    })
    let storyLines = storyText.lines,
        storyWords = storyText.words
    
    mainTimeline.staggerFrom(
        titleChars,
        0.5,
        {
            opacity: 0,
            x: -200,
            color: '#00C8A6',
            ease: Back.easeOut
        },
        0.1
    ).to(
        '.story .title',
        0.5, {
            color: '#00C8A6 !important',
            boxShadow: '0 4px 0 #00C8A6',
            ease: Power4.easeInOut
        }
    ).staggerFrom(
        storyWords,
        1,
        {
            opacity: 0,
            skewX: '50deg',
            color: '#00C8A6',
            ease: Back.easeInOut
        },
        0.05
    )
    mainTimeline.to(
        '#svg_marker',
        0.25,
        {
            opacity: 1
        },
        1
    ).from(
        '#svg_marker',
        0.5,
        {
            skewY: '60deg',
        },
        1
    ).to(
        '#svg_marker',
        1,
        {
            fill: '#00C8A6'
        },
        1.25
    ).to(
        '#svg_marker',
        1,
        {
            morphSVG: '#svg_logo',
            boxShadow: '0 4px 0 #00C8A6',
            scale: 0.95,
            ease: Elastic.easeInOut
        },
        2
    ).to(
        '#svg_marker',
        1, {
            fill: '#6d6d6e',
            ease: Power3.easeOut
        },
        3
    ).to(
        '#svg_marker',
        1, {
            morphSVG: '#svg_marker',
            scale: 0.15,
            ease: Elastic.easeInOut
        },
        4.75
    ).to(
        '#svg_marker',
        1, {
            fill: '#a53ce5',
            ease: Power3.easeOut
        },
        5
    ).fromTo(
        '#svg_line',
        2.25,
        {
            drawSVG: '0% 0%'
        },
        {
            drawSVG: '20% 100%',
            ease: Power3.easeOut
        },
        7
    ).to(
        '#svg_line',
        1.5,
        {
            drawSVG: '0%, 0%',
            ease: Power3.easeOut
        },
        8.5
    ).to(
        '#svg_marker',
        2.25,
        {
            bezier: {
                values: markerPath,
                type: 'cubic'
            },
            ease: Power3.easeOut
        },
        7
    ).from(
        '#svg_dot',
        0.75,
        {
            opacity: 0,
            scale: 4,
            x: -50,
            y: -50
        },
        8
    ).to(
        '#svg_logo',
        1,
        {
            opacity: 1,
            y: 100,
            x: -30,
            scale: 0.925,
            ease: Back.easeInOut
        },
        9
    ).staggerFromTo(
        [
            '#svg_n1',
            '#svg_n2',
            '#svg_e',
            '#svg_x1',
            '#svg_x2',
            '#svg_t1',
            '#svg_t2' 
        ],
        1, {
            drawSVG: '0% 0%'
        }, {
            drawSVG: '0% 100%',
            ease: Back.easeInOut
        },
        0.1,
        7
    ).fromTo(
        '#svg_next',
        .5,
        {
            x: -40,
            ease: Elastic.easeInOut
        },
        {
            x: 40,
            ease: Elastic.easeInOut
        },
        8.5
    ).to(
        '#svg_logo, #svg_marker',
        1.5,
        {
            y: 0,
            ease: Power4.easeInOut
        }
    ).to(
        '#svg_dot, #svg_next',
        1.5, {
            y: -95,
            ease: Bounce.easeOut
        },
        10.5
    )
}