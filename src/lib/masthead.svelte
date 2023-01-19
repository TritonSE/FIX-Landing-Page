<script>
    import BackgroundCat from "$lib/assets/img/background_cat.png"
    import FixNationLogo from "$lib/assets/img/fixnation_logo.svg"
</script>

<div>
    <img src={BackgroundCat} alt="black and white cat on the ground" id="background"/>
    <img src={FixNationLogo} alt="logo for fixnation" id="logo"/>
    <div id="titleBlob"/>
    <h1 id="titleBlurb">Compassionate Care for Community Cats</h1>
    <p id="textBlurb">Reducing the population of homeless cats in Los Angeles
        in the most humane way, start your TNR journey today.</p>
    <button id="involveButton">Get Involved</button>
    <button id="donateButton">Donate Now</button>
</div>

<style lang="css">

    #background {
        position: absolute;
        width: 100%;
        height: auto;
        top: 0px;
        z-index: -1;
        box-shadow: inset 0px 200px 200px 100px rgba(0, 0, 0, 0.4);
    }

    #logo {
        margin: auto;
        display: block;
    }

    #titleBlob {
        left: 0px;

        background-image: url("assets/title_blob.svg");
    }


    #titleBlurb {
        font-family: 'ITC Avant Garde Gothic LT Demi';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 150%;

        letter-spacing: 0.02em;

        color: #FFFFFF;
    }

    #textBlurb {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;

        letter-spacing: 0.02em;

        color: #F9F9F9;
    }
</style>