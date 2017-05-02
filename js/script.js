const myFinalPaper = [
    {
        name: `Home`,
        title: `Welcome`,
        intro: ``,
        content: [`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`]
    },
    {
        name: `Intro`,
        title: `Intro`,
        intro: ``,
        content: [
            `As the world wide web grew, so too did its designs. Inspiration for modern web designs come from many of the art movements of the 20th century.`,
            `images/hero.png`
        ]
    },
    {
        name: `The 1990s`,
        title: `The 90s: Beginning of the Web`,
        intro: `short text for quote box`,
        content: [
            `Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.`,
            `images/hero.png`,
            `Another problem is because the gambling ban was attached to another bill, it means that to reverse the law the entire bill needs to be reversed, but the other part of the bill is for an increase in port security, so any congressmen who recommends reversing this law, will be going on record as trying to reverse the increase in port security.`,
            `Because of this trying to get the law reversed could ruin a congressman’s chances of ever getting elected to public office again for the rest of their lives.`
        ]
    },
    {
        name: `The 2000s`,
        title: `The 2000s: Flash and more`,
        intro: `short text for quote box`,
        content: [
            `images/hero.png`,
            `If you are a culinary fan, if you like to spend time in your kitchen, you likely find yourself looking for reliable resources through which you can make the purchase of cookware products in the brick and mortar world. In the 21st century, there are many resources available to you in the brick and mortar world at which you can make the purchase of a wide array of different cookware products.`,
            `In many major cities in the brick and mortar world, there are culinary and kitchen specialty stores. At these specialty stores, a person such as you can make the purchase of a wide array of different types of cookware products. In addition to finding a nice selection of cookware products, these stores also offer trained sales staffs that can assist you in finding just the right products for your particular needs. Finally, oftentimes these specialty stores also offer classes and seminars that can help you become an even better cook.`,
            `In addition to specialty stores, major department stores in the brick and mortar world also tend to maintain a selection of cookware and kitchenware products. More often than not, these types of stores maintain a nice selection of high end products that can be truly beautiful and practical additions to your own kitchen.`
        ]
    },
    {
        name: `The 2010s`,
        title: `The 2010s: HTML5 & Bootstrap`,
        intro: `short text for quote box`,
        content: [
            `Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! Downloading music to your Ipod has more than one pitfall associated with it, and this article will tell you the best way to download free song for Ipod.`,
            `An Ipod can easily become a vital part of your life. If you had thought about the possibility of carrying around a virtually unlimited supply of music ten years ago, it would have seemed a bit futuristic, but it has all happened, and now all we have to do when we get tired of our present music collection is download free song for Ipod. This could however, be the start of a few problems…`
        ]
    },
    {
        name: `Now`,
        title: `Modern Web Design`,
        intro: `short text for quote box`,
        content: [
            `images/hero.png`,
            `Problem 1-Your computer picks up a virus.You did an internet search, looking to download free song for Ipod, and, totally without knowing, you downloaded some nasty spyware or malware from a dodgy p2p site.Your laptop has now stopped working, and your Ipod is now only usable as a bookmark.P2P sites can appear to be the answer to your prayers.You can download as much as you want, many different version of songs etc, but you have probably noticed that you often download a file, and it is completely different from what it is supposed to be.In case you have ever wondered why this is, the answer is spyware.If you have downloaded from a site like this, get your computer seen to. If your computer has been infected, it can not only harm your computer, but also your Ipod.Free Ipod music download can cost you very dearly.`,
            ` Problem 2-It is illegal. It is against the law to download from a P2P site. It could lead to your arrest. It is not difficult with modern equipment for law enforcement officers to locate your IP address, and then locate you. World governments are becoming ever more proactive in combating this – it will not be long before you are found out if you are using P2P . You will have to think about whether it is worth risking prison or possibly a huge fine, just to download free song for Ipod. I’m sure it won’t be worth it for many.`,
            `images/hero.png`,
            `Problem 3-Good quality download sites are rare.. If you search the internet for “download free song for Ipod,” you will almost certainly find endless awful sites with pop ups etc. The people who run these sites do so in the hope that you will click on their advertising, so they are not interested in you, or whether you find what it is you want. They are only interested in getting you to click on their popup ads. There is an answer. There really are sites that do let you download free song for Ipod- in a safe and legal way. We are now starting to see sites spring up that are a lot better organized and the good thing is that they are on the right side of the law. When you find one of these sites, you can be set up for a long time. You can have all the Ipod songs you could possibly want, and also films for all the Ipod video owners. The only downside to these types of site is that they have to charge you a membership fee, usually somewhere around $20 to $50, and that covers you for LIFE. You can download an unlimited amount of music and films, as soon as you have paid the fee. It is definitely not difficult to download more than $50 worth of music. Many people have done more than that in a day!`
        ]
    },
    {
        name: `The Future`,
        title: `New Possibilities in Layout`,
        intro: `Web Designers once again have tools to create captivating interactive designs without the use of Flash techniques, and new layout options to mimic Print Design.`,
        content: [
            `If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each. You may be saying to yourself, “Wow, what a deal!”. But be careful, check out the quality before you make your purchase. Make sure the tape will fit your needs.`,
            `If you are using your cassette tapes to record something fast, and the life of the cassette will be short, then maybe the cheap ones are for you. However, if you need a quality recording, or are looking to keep that cassette for some time, then you will need to be prepared to pay a little more. The quality you receive will be well worth the added cost.`
        ]
    }
];
const displayContent = (data) => {
    const $body = $(`body`), $title = $(`#title`), $intro = $(`#intro`), $content = $(`#content`), $btn = $(`#btn`);
    $title.text(data[0].title);
    $intro.text(``);
    $(`#content>.container>.paragraph`).text(data[0].content[0]);
    let i = 0;
    const c = (x) => { return data[x].name.replace(/\s/, `-`).toLowerCase(); }, reset = (x) => {
        i = 0;
        $body.removeAttr(`class`);
        $title.text(`${data[i].title}`);
        $intro.text(`${data[i].intro}`);
        $content.append(`<section class="container"><p class="paragraph">${data[i].content[0]}`);
        $btn.text(`Begin`);
    }, build = (x) => {
        i < data.length - 1 ? i++ : i = 0;
        console.log(i);
        $body.removeClass(`${c(i - 1)}`).addClass(`${c(i)}`);
        $title.text(`${data[i].title}`);
        $intro.text(`${data[i].intro}`);
        for (let j in data[i].content) {
            data[i].content[j].match(/^images\/\w+\.(?:jpg|png|gif)$/) ? $content.append(`<section class="image-container"><img src="${data[i].content[j]}">`) : $content.append(`<section class="container"><p class="paragraph">${data[i].content[j]}`);
        }
        i < data.length - 1 ? $btn.text(`${data[i + 1].name.replace(/the\s?/i, ``)}`) : $btn.text(`Again?`);
    }, displayContent = (x, y) => {
    };
    $btn.on(`click`, function () {
        $content.empty();
        i === data.length - 1 ? reset(i) : build(i);
    });
};
displayContent(myFinalPaper);
$(window).on(`scroll`, function () {
    $(window).scrollTop() > 100 ? $(`.header`).addClass(`small`) : $(`.header`).removeClass(`small`);
});
$(`img`).click(function () {
});
