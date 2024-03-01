<template>
    <div class="layout">
		<slot />
    </div>
</template>

<style>
* {
	font-family: 'Inter', sans-serif;
	font-size: 1rem;
	line-height: 115%;
}
h1, p {
	pointer-events: none;
}
html {
	background-color: #f8f4f0;
	/* background-image: radial-gradient(circle, #959595, #7c7c7c00 1px, #FFFFFF00 1px, #4b4b4b00);
    background-size: 15px 15px; */
}
.dark {
    background-color: #101010;
    color: #f8f4f0;
	/* background-image: radial-gradient(circle, #959595bb, #D7D7D700 1px, #FFFFFF00 1px, #0a0a0a00);
	background-size: 15px 15px; */
}

.title, .subtitle {
	pointer-events: none;
}

::selection {
	background-color: #0010ee;
	color: white;
}
::-moz-selection {
	background-color: #0010ee;
	color: white;
}

body::-webkit-scrollbar {
	width: 0.4rem;
	z-index: 0;
}
body::-webkit-scrollbar-track {
	background-color: #101010;
}
body::-webkit-scrollbar-track:hover {
	cursor: pointer !important;
}
body::-webkit-scrollbar-thumb {
	background-color: #ffffff;
}
</style>