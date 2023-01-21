<script>
	let buttonProps = {
	    class:[$$restProps.class]
	}
</script>

<button on:click>
    <slot/>
</button>

<style>

    button {
        background-color: #58c3af;
        color:white;
        width:100px;
        height:48px; 
        font-size: 16px;
        border-radius: 4px;
    }

    button:hover {
        background-color: #1f9c8e;
    }

    button:disabled {
        background-color: #149788;
    }

    button:active{
        background-color: #F0F4F4;
    }

</style>