<script>
    import BackgroundCat from "$lib/assets/img/background_cat.png"
    import FixNationLogo from "$lib/assets/img/fixnation_logo.svg"
    import TitleBlob from "$lib/assets/img/title_blob.svg"
    import Facebook from "$lib/assets/img/facebook.svg"
    import Instagram from "$lib/assets/img/instagram.svg"
    import Twitter from "$lib/assets/img/twitter.svg"
    import Youtube from "$lib/assets/img/youtube.svg"
    import Yelp from "$lib/assets/img/yelp.svg"
</script>

<div id="masthead">
    <img src={BackgroundCat} alt="black and white cat on the ground" id="background"/>
    <img src={FixNationLogo} alt="logo for fixnation" id="logo"/>
    <div id=container>
        <img src={TitleBlob} alt = "blue blob" id="titleBlob"/>
        <h1 id="titleBlurb">Compassionate Care for Community Cats</h1>
        <p id="textBlurb">Reducing the population of homeless cats in Los Angeles
            in the most humane way, start your TNR journey today.</p>
        <button id="involveButton">Get Involved</button>
        <button id="donateButton">Donate Now</button>
    </div>

    <div id="icons">
        <a href="https://www.facebook.com/FixNationLA/" target="_blank" rel="noreferrer noopener" class="icon_item">
            <img src={Facebook} alt="facebook logo" class="icon">
        </a>
        <a href="https://www.instagram.com/fixnation/" target="_blank" rel="noreferrer noopener" class="icon_item">
            <img src={Instagram} alt="instagram logo" class="icon">
        </a>
        <a href="https://twitter.com/fixnation" target="_blank" rel="noreferrer noopener" class="icon_item">
            <img src={Twitter} alt="twitter logo" class="icon">
        </a>
        <a href="https://www.youtube.com/user/FixNationClinic" target="_blank" rel="noreferrer noopener" class="icon_item">
            <img src={Youtube} alt="youtube logo" class="icon">
        </a>
        <a href="https://www.yelp.com/biz/fixnation-los-angeles" target="_blank" rel="noreferrer noopener" class="icon_item">
            <img src={Yelp} alt="yelp logo" class="icon">
        </a>
    </div>
</div>

<style lang="css">

    #masthead {
        width: 100%;
        margin: 0;
    }

    #background {
        position: absolute;
        width: 100%;
        height: auto;
        top: 0px;
        margin: 0;
        z-index: -2;
        box-shadow: inset 0px 200px 200px 100px rgba(0, 0, 0, 0.4);
    }

    #logo {
        margin: auto;
        display: block;
    }

    #container {
        position: relative;
        text-align: left;
        vertical-align: auto;
        overflow-wrap:break-word;
        align-items: center;
    }

    #titleBlob {
        position: absolute;
        left: 0px;
        z-index: -1;
    }

    @font-face {
        font-family: 'itc_avant_garde_gothic_ltdemi';
        src: url('$lib/assets/fonts/itc_avant_garde_gothic_lt_demi_regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    #titleBlurb {
        font-family:'itc_avant_garde_gothic_ltdemi';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 150%;
        margin-top: auto;
        letter-spacing: 0.02em;

        color: #FFFFFF;

        top: 0%;
        z-index: 1;
    }

    @font-face {
        font-family: 'avenir_lt_std45_book';
        src: url('$lib/assets/fonts/avenirltstd-book-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    #textBlurb {
        font-family: 'avenir_lt_std45_book';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;

        letter-spacing: 0.02em;

        color: #F9F9F9;
    }

    #involveButton, #donateButton {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 10px;

        background: #F9F9F9;
        border-radius: 4px;
        border-color: white;

        /* Body/Medium (Bold) */

        font-family: 'avenir_lt_std45_book';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 24px;

        text-align: center;

        color: #008E7E;

        flex: none;
        order: 1;
        flex-grow: 0;
    }

    #involveButton {
        position: absolute;
        width: 145px;
        height: 48px;
        left: 32px;
        top: 463px;
    }

    #donateButton {
        position: absolute;
        width: 144px;
        height: 48px;
        left: 221px;
        top: 463px;
    }

    .icon_item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        gap: 10px;
        margin: 1%;
        margin-right: 1%;
        margin-left: auto;
        width: 40px;
        height: 40px;

        background: #FFFFFF;

        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        order: 0;
        flex-grow: 0;
        z-index: -1;
    }

    .icon {
        position: inherit;
        left: 29.17%;
        right: 27.08%;
        top: 8.33%;
        bottom: 8.33%;

        /* Primary Teal

        Fix Nation Color 1
        */
        z-index: 1;
        scale: 150%;
    }

    .icon_item:hover .icon {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(354deg) brightness(200%) contrast(101%);
    }

    .icon_item:hover {
        background: #58C3AF;

        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    
</style>