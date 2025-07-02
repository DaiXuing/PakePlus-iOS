console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('<video id="193218180" autoplay="" playsinline="true" preload="none" disableremoteplayback="" style="height: auto');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector(' width: 100%');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector(' max-height: unset');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('" src="blob:https://missav.ai/f21cd975-08e1-46d2-85fd-53211f7e0662"></video>
<video id="200064047" autoplay="" playsinline="true" preload="none" disableremoteplayback="" style="height: auto');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector(' width: 100%');
                if (element4) {
                    element4.style.display = 'none';
                };const element5 = document.querySelector(' max-height: unset');
                if (element5) {
                    element5.style.display = 'none';
                };const element6 = document.querySelector('" src="blob:https://missav.ai/7d92237b-c3fc-4eaa-b4c7-00f328ceb79e"></video>
<video class="ts-outstream-video__video" loop="" preload="auto" playsinline="" controlslist="nodownload" src="blob:https://missav.ai/f75bfd43-70ce-49e3-abe4-f5d07969529d"></video>');
                if (element6) {
                    element6.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
