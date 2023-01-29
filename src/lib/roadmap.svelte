<script lang="ts">

    import Road from "$lib/assets/img/SolidRoad.svg";
    import DashedLine from "$lib/assets/img/DashedRoad.svg";
    import Hero from "$lib/assets/img/GroupedHero.svg";
    import PointyTextBubble from "$lib/assets/img/PointyTextBubble.svg";
    import RoundTextBubble from "$lib/assets/img/RoundTextBubble.svg";
    import Pinpoint from "$lib/assets/img/Pinpoint.svg"
    import Cloud from "$lib/assets/img/Cloud.svg"

</script>

<div id="container">
    <div id="road-container">
        <img class="road" id="solid" src={Road} alt=""/>
        <img class="road" id="dashed" src={DashedLine} alt=""/>

        <div id="points-container">
            <img class="pinpoint" id="point1" src={Pinpoint} alt=""/>
            <img class="cloud" id="cloud1" src={Cloud} alt=""/>
            <h2 class="title" id="title1">1. Find</h2>
            <p class="text" id="text1">Find a cat who needs your help</p>
        </div>
    </div>

    <div id="hero-container">
        <img id="pointy-bubble" src={PointyTextBubble} alt=""/> 
        <img id="round-bubble" src={RoundTextBubble} alt=""/>

        <img id="hero" src={Hero} alt=""/>
    </div>

    
</div>


<style lang="css">

    @font-face {
        font-family: 'itc_avant_garde_gothic_ltdemi';
        src: url('$lib/assets/fonts/itc_avant_garde_gothic_lt_demi_regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'avenir_lt_std45_book';
        src: url('$lib/assets/fonts/avenirltstd-book-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    :global(body) {
        margin: 0; /* Made the image fit the entire screen */
    }

    #road-container {
        align-items: center;
    }

    .road {
        position: absolute;
        align-self: center;
        width: 100%;
        height: auto;
        float: left;
        top: 15%

    }

    #solid {
        z-index: -3;
        margin: auto;
        overflow: hidden
    }

    #dashed {
        z-index: -2;
        margin: auto;
        margin-top: 2%;
    }

    #points-container {
        position: inherit;
    }

    .pinpoint {
        height: auto;
        width: 4%;
    }

    #point1, #cloud1 {
        position: absolute;

        left: 15%;
        margin-top: 12%;
        z-index: -1;
    }

    #cloud1 {
        margin-top: 16%;
        left: 11%;
        height: auto;
        width: 12%;
    }

    .title {
        font-family: 'itc_avant_garde_gothic_ltdemi';
        font-style: normal;
        font-weight: 700;
        font-size: 2vh;
        line-height: 150%;

        color: #20525C;
    }

    #title1 {
        position: absolute;
        left: 14%;
        margin-top: 18%;
        height: auto;
        width: 12%;
        z-index: 2;
    }

    .text {
        font-family: 'avenir_lt_std45_book';
        font-style: normal;
        font-weight: 500;
        font-size: 130%;
        line-height: 150%;
        word-wrap: break-word;
        width: 8%;
        z-index: 2;

        color: #20525C;
    }

    #text1 {
        position: absolute;
        left: 14%;
        margin-top: 20%;
        
        
    }



    #hero-container {
        float: right;
    }

    #hero {
        position: absolute;
        top: 25%;
        right: 13%;

        height: auto;
        width: 15%;
    }

    #pointy-bubble {
        z-index: -1;
        position: absolute;

        top: 5%;
        right:37%;
        height: auto;
        width: 22%;
    }

    #round-bubble {
        position: absolute;

        top: 6%;
        right: 20%;
        height: auto;
        width: 20%;
    }





</style>